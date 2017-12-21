//ROOT SERVER
function pingReqRoot() {

  var server = ;//beschreibung der Server Adresse

  var data = JSON.stringify(false);

  var xhr = new XMLHttpRequest();
  xhr.withCredentials = true;

  xhr.addEventListener("readystatechange", function () {
    if (this.readyState === this.DONE) {
      console.log(this.responseText);
    }
  });

  xhr.open("GET", "https://fearnixx.de/status/public/api/v1/ping");

  xhr.send(data);
}
//TEAMSPEAK SERVER
function pingReqTS() {

  var server = ;//beschreibung der Server Adresse

  var data = JSON.stringify(false);

  var xhr = new XMLHttpRequest();
  xhr.withCredentials = true;

  xhr.addEventListener("readystatechange", function () {
    if (this.readyState === this.DONE) {
      console.log(this.responseText);
    }
  });

  xhr.open("GET", "https://fearnixx.de/status/public/api/v1/ping");

  xhr.send(data);
}

function pingReqBeispiel() {

  var server = ;//beschreibung der Server Adresse

  var data = JSON.stringify(false);

  var xhr = new XMLHttpRequest();
  xhr.withCredentials = true;

  xhr.addEventListener("readystatechange", function () {
    if (this.readyState === this.DONE) {
      console.log(this.responseText);
    }
  });

  xhr.open("GET", "https://fearnixx.de/status/public/api/v1/ping");

  xhr.send(data);
}











//server choice is still in work
//function serverChoice(){

//var server = chrome.tabs.onUpdated.addListener();
//var server = "toor";
//var croot = "uno" ;
//var cgame = "dos";
//var cts = "tress";

//if (server == "root") {
//chrome.tabs.popup.write(croot);
//}
//if (server == "game") {
//chrome.tabs.popup.write(cgame);
//}
//if (server == "ts") {
//chrome.tabs.popup.write(cts);
//}
//else {
//chrome.tabs.popup.write("An error accured");
//window.open("https://fearnixx.de");
//}

//}

//        ____.               __   _________ __                _______                              .__
//       |    |__ __  _______/  |_/   _____//  |______  ___.__.\      \   ___________  _____ _____  |  |
//      |    |  |  \/  ___/\   __\_____  \\   __\__  \<   |  |/   |   \ /  _ \_  __ \/     \\__  \ |  |
//  /\__|    |  |  /\___ \  |  | /        \|  |  / __ \\___  /    |    (  <_> )  | \/  Y Y  \/ __ \|  |__
//  \________|____//____  > |__|/_______  /|__| (____  / ____\____|__  /\____/|__|  |__|_|  (____  /____/
//                      \/              \/           \/\/            \/                   \/     \/
