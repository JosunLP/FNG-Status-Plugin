var TableCreator = new TableCreator();
var StatusCheck = new StatusCheck();

chrome.extension.onMessage.addListener(
    function (request, sender, sendResponse) {
        chrome.pageAction.show(sender.tab.id);
        sendResponse();
    });

setInterval(function () {
    TableCreator.deleteTable(".statusTable");
    let response = StatusCheck.callServerStatus("desc");
    TableCreator.newTable(response, ".statusTable");
}, 1000);