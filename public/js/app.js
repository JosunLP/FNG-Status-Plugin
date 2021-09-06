var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class App {
    constructor() {
        this.isOnline = false;
        this.uptimeCheck();
        this.main();
    }
    main() {
        return __awaiter(this, void 0, void 0, function* () {
            while (this.isOnline) {
                yield this.drawData();
                yield this.uptimeCheck();
            }
        });
    }
    drawData() {
        return __awaiter(this, void 0, void 0, function* () {
            yield fetch(App.host + App.path_data, {
                method: "GET",
                mode: 'cors',
                cache: 'default',
            })
                .then(r => r.json())
                .then((r) => {
                const content = document.getElementById('content');
                r.forEach(data => {
                    const item = new HTMLDivElement();
                    item.className = "item";
                    const name = new HTMLTitleElement();
                    name.text = data.name;
                    name.className = "item_label";
                    const status = new HTMLParagraphElement();
                    if (data.online) {
                        status.textContent = "Online";
                        status.className = "item_status_online";
                    }
                    else {
                        status.textContent = "Offline: " + data.status_code.toString();
                        status.className = "item_status_offline";
                    }
                    item.appendChild(name);
                    item.appendChild(status);
                    content.appendChild(item);
                });
            })
                .catch((e) => {
                this.isOnline = false;
                console.log(e);
            });
        });
    }
    uptimeCheck() {
        return __awaiter(this, void 0, void 0, function* () {
            yield fetch(App.host + App.path_health, {
                method: "GET",
                mode: 'cors',
                cache: 'default',
            })
                .then(r => r.json())
                .then((r) => {
                this.isOnline = r.online;
            })
                .catch((e) => {
                this.isOnline = false;
                console.log(e);
            });
        });
    }
}
App.host = "https://corsify.de/API.php?apiMode=feed&feedMode=api&dataUrl=https://status.fearnixx.de";
App.path_health = "/health";
App.path_data = "/api/services";
App.container = document.getElementById("content");
new App();
export {};
