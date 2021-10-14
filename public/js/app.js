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
        this.isOnline = true;
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
                const table = document.createElement('table');
                const tableHead = document.createElement("thead");
                const tableBody = document.createElement("tbody");
                const tableHeadRow = document.createElement("tr");
                const appName = document.createElement("th");
                const appStatus = document.createElement("th");
                const lastEvent = document.createElement("th");
                table.className = "table";
                appName.innerText = "Anwendung";
                appStatus.innerText = "Status";
                lastEvent.innerText = "Letzter Fehler";
                tableHeadRow.appendChild(appName);
                tableHeadRow.appendChild(appStatus);
                tableHeadRow.appendChild(lastEvent);
                tableHead.appendChild(tableHeadRow);
                table.appendChild(tableHead);
                table.appendChild(tableBody);
                content.innerHTML = "";
                content.append(table);
                r.forEach(data => {
                    const row = document.createElement("tr");
                    const link = document.createElement("a");
                    link.href = "https://status.fearnixx.de/service/" + data.permalink;
                    link.target = "_blank";
                    link.innerText = data.name;
                    const name = document.createElement("td");
                    name.appendChild(link);
                    const status = document.createElement("td");
                    if (data.online) {
                        status.innerText = "Online";
                        status.className = "item_status_online";
                        row.classList.add("bg-success");
                    }
                    else {
                        status.innerText = "Offline: " + data.status_code.toString();
                        status.className = "item_status_offline";
                        row.classList.add("bg-danger");
                    }
                    const event = document.createElement("td");
                    const date = new Date(data.last_error);
                    const dateStamp = date.getDay() + "." +
                        date.getMonth() + "." +
                        date.getFullYear();
                    if (dateStamp !== "1.0.1") {
                        event.innerText = dateStamp;
                    }
                    else {
                        event.innerText = "-";
                    }
                    row.appendChild(name);
                    row.appendChild(status);
                    row.appendChild(event);
                    tableBody.appendChild(row);
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
