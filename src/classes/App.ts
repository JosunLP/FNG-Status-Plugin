import { APIHealth } from '../types/APIHealth'
import { APIResponse } from '../types/APIResponse'

export class App {

    static host = "https://status.fearnixx.de"
    static path_health = "/health"
    static path_data = "/api/services"
    static container = document.getElementById("content")

    constructor() {
        this.main()
    }

    async main() {

        while ((await this.uptimeCheck()).online) {

            const content = await this.apiRequest()

            content.forEach(data => {
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
            });
        }
    }

    async apiRequest(): Promise<Array<APIResponse>> {

        const response = await window.fetch(App.host + App.path_data, {
            method: "GET",
            mode: 'cors',
            cache: 'default',
        })
            .then(r => r.json())
            .then((r) => {
                return r
            })
        const result: Promise<Array<APIResponse>> = response

        return (await result)
    }

    async uptimeCheck(): Promise<APIHealth> {
        const response = await window.fetch(App.host + App.path_data, {
            method: "GET",
            mode: 'cors',
            cache: 'default',
        })
            .then(r => r.json())
            .then((r) => {
                return r
            })
        const result: Promise<APIHealth> = response

        return (await result)
    }
}