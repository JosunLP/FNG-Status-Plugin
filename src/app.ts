import { APIHealth } from './types/APIHealth'
import { APIResponse } from './types/APIResponse'

class App {

    static host = "https://corsify.de/API.php?apiMode=feed&feedMode=api&dataUrl=https://status.fearnixx.de"
    static path_health = "/health"
    static path_data = "/api/services"
    static container = document.getElementById("content")
    private isOnline: boolean = false;

    constructor() {
        this.uptimeCheck();
        this.main()
    }

    async main(): Promise<void> {

        while (this.isOnline) {

            await this.drawData()
            await this.uptimeCheck();
        }
    }

    async drawData(): Promise<void> {

        await fetch(App.host + App.path_data, {
            method: "GET",
            mode: 'cors',
            cache: 'default',
        })
            .then(r => r.json())
            .then((r: Array<APIResponse>) => {

                const content = <HTMLDivElement>document.getElementById('content')

                r.forEach(data => {
                    const item = new HTMLDivElement()
                    item.className = "item"

                    const name = new HTMLTitleElement()
                    name.text = data.name;
                    name.className = "item_label"

                    const status = new HTMLParagraphElement()
                    if (data.online) {
                        status.textContent = "Online"
                        status.className = "item_status_online"
                    } else {
                        status.textContent = "Offline: " + data.status_code.toString()
                        status.className = "item_status_offline"
                    }

                    item.appendChild(name)
                    item.appendChild(status)
                    content.appendChild(item)
                });
            })
            .catch((e) => {
                this.isOnline = false
                console.log(e);
            })
    }

    async uptimeCheck(): Promise<void> {
        await fetch(App.host + App.path_health, {
            method: "GET",
            mode: 'cors',
            cache: 'default',
        })
            .then(r => r.json())
            .then((r: APIHealth) => {
                this.isOnline = r.online
            })
            .catch((e) => {
                this.isOnline = false
                console.log(e);
            })
    }
}

new App();