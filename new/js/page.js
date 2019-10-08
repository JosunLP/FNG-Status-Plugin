// request permission on page load
import {StatusCheck} from "./class-bundle/StatusCheck";


document.addEventListener('DOMContentLoaded', function () {
    if (!Notification) {
        alert('Desktop notifications not available in your browser. Try Chromium.');
        return;
    }

    if (Notification.permission !== "granted") {
        Notification.requestPermission().then();
    }
});
