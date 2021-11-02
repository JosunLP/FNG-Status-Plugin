import { APIHealth } from './types/APIHealth'
import { APIResponse } from './types/APIResponse'

class Background {

    private isOnline: boolean = true;
    private server: Array<APIResponse>;
    static host = "https://corsify.de/API.php?apiMode=feed&feedMode=api&dataUrl=https://status.fearnixx.de"
    static path_health = "/health"
    static path_data = "/api/services"

    constructor() {
        this.server = new Array()
        this.uptimeCheck();
        this.main();
    }

    async main(): Promise<void> {

        await this.serviceStatusInit()

        while (this.isOnline) {

            await this.serviceStatusCheck()
            await this.sleep(10000)
            await this.uptimeCheck()
        }
    }

    async sleep(ms: number) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async serviceStatusCheck(): Promise<void> {
        await fetch(Background.host + Background.path_data, {
            method: "GET",
            mode: 'cors',
            cache: 'default',
        })
            .then(d => d.json())
            .then((d: Array<APIResponse>) => {
                this.server.forEach(cElement => {
                    d.forEach(c => {
                        if (cElement.id === c.id) {
                            if (cElement.online !== c.online) {
                                this.notification(c.name, c.online, c.permalink)
                            }
                        }
                    })
                })
                this.serviceStatusInit()
            })
    }

    async serviceStatusInit(): Promise<void> {
        this.server = []
        await fetch(Background.host + Background.path_data, {
            method: "GET",
            mode: 'cors',
            cache: 'default',
        })
            .then(d => d.json())
            .then((d: Array<APIResponse>) => {
                d.forEach(e => {
                    this.server.push(e)
                })
            })
    }

    async uptimeCheck(): Promise<void> {
        await fetch(Background.host + Background.path_health, {
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

    notification(server: string, status: boolean, link: string): void {

        switch (status) {
            case true:
                const good = new Notification("Server Status changed!", {
                    icon: "./icons/good.png",
                    body: "Der Server " + server + " ist jetzt online!"
                })
                
                good.onclick = () => {
                    window.open(link)
                }

                console.log("The server status of " + server + " changed to " + status);
                break;

            case false:
                const bad = new Notification("Server Status changed!", {
                    icon: "./icons/bad.png",
                    body: "Der Server " + server + " ist jetzt offline!"
                })

                bad.onclick = () => {
                    window.open(link)
                }

                console.log("The server status of " + server + " changed to " + status);
                break;

            default:
                break;
        }
    }
}

new Background();