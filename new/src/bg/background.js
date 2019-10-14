import {TableCreator} from "../../js/class-bundle/TableCreator";
import {StatusCheck} from "../../js/class-bundle/StatusCheck";

chrome.extension.onMessage.addListener(
    function (request, sender, sendResponse) {
        chrome.pageAction.show(sender.tab.id);
        sendResponse();
    });

setInterval(function () {
    TableCreator.prototype.deleteTable(".statusTable");
    let response = StatusCheck.prototype.callServerStatus("desc");
    TableCreator.prototype.newTable(response, ".statusTable");
}, 1000);