
// request permission on page load
document.addEventListener('DOMContentLoaded', function () {
  if (!Notification) {
    alert('Desktop notifications not available in your browser. Try Chromium.');
    return;
  }

  if (Notification.permission !== "granted")
  Notification.requestPermission();
});



function TableCreator() {
  var data = JSON.parse(true);
  //$("#laender").dynatable();


  var xhr = new XMLHttpRequest();
  xhr.withCredentials = true;

  xhr.addEventListener("readystatechange", function () {
    if (this.readyState === this.DONE) {
      //console.log(this.responseText);
      var json = this.responseText;
      var obj = JSON.parse(json);
      /*
      function globalos(id, nr) {
      var temp = obj.data[nr].status;
      if (temp == 1) {
      $("td").addClass("greenThumb");
      $("td").removeClass("redRocket");
    }
    if (temp == 4){
    $("td").addClass("redRocket");
    $("td").removeClass("greenThumb");
  }
}
*/





for (var i = 0; i < obj.data.length; i++) {
  let component = obj.data[i];
  let id = obj.data[i];
  let name = obj.data[i].name;
  let stat_name = obj.data[i].status_name;
  let linka = obj.data[i].link;
  let linktarget;

  if (obj.data[i].link.length >= 2) {
    linktarget = "_blank";
  }
  else {
    linktarget = "";
  }
  //let idTable = document.getElementById('myTable');
  //ERROR muss ich noch fixxen bei gelegenheit ;) verstest??
  function globalos(id, nr) {
    var temp = obj.data[nr].status;
    let get_it = document.getElementById('ida_' + i);

    if (temp == 1 ) {
      get_it.classList.add("greenThumb");
      get_it.classList.remove("redRocket");
      get_it.classList.remove("yellowBall");
    }
    if (temp == 3){
      get_it.classList.remove("greenThumb");
      get_it.classList.remove("redRocket");
      get_it.classList.add("yellowBall");
    }
    if (temp == 4){
      get_it.classList.remove("greenThumb");
      get_it.classList.remove("yellowBall");
      get_it.classList.add("redRocket");
    }
  }


  function goodMorningV(stat_name, name) {


    if (stat_name === "Offline") {
      new Notification(
        'Warnung!', {
          icon: '../icon128.png',
          body: 'Der Server ' + name + ' ist Offline',
        });
      }

      else if (stat_name === "Wartungsarbeiten") {
        new Notification(
          'Wichtig!', {
            icon: '../icon128.png',
            body: 'Der Server ' + name + ' ist in Wartung',
          });
        }

      }

      let thead = $('<th/>', {
        id: "hid_" + i,
        class: "status_head"
      })

      let tbody = $('<td/>', {
        id: "id_" + i,
        class: "status_body"
      })

      let tlink = $('<a/>', {
        id: "ida_" + i,
        href: linka,
        target: linktarget
      })

      let trow = $('<tr>', {
        id: "root_" + i
      })

      $('#myHead').append($(trow));

      $('#myBody').append($(trow));

      $('#root_' + i).append($(thead));

      $('#root_' + i).append($(tbody));

      $('#hid_' + i).append(name);

      $('#id_' + i).append(tlink);

      $('#ida_' + i).append(stat_name);




      //console.log();
      globalos(id, i);
      goodMorningV(stat_name, name);
    }
  }
});


xhr.open("GET", "https://status.fearnixx.de/api/v1/components?sort=status=desc");

xhr.send(data);
}

TableCreator();

function ClearTable() {
  document.getElementById('myBody').innerHTML = "";
}


function Counter() {
  setInterval(function () {
    ClearTable();
    TableCreator();
  }, 30000);
}

Counter();




chrome.tabs.query({
            active: true,
            lastFocusedWindow: true
        }, function(tabs) {
            // and use that tab to fill in out title and url
            let tab = tabs[0];
            //console.log(tab.url);
            //console.log(tab.index);



            //var URLtype = tab.url; //document.getElementById('pageURL').innerHTML;

            if (tab.url == 'https://fearnixx.de/') {
              let userTitleBadge = "Member";
              let menuOverlayItemTitle = "Name";

              document.getElementById('pageURL').innerHTML = "Du bist auf: " + tab.url;
              document.getElementById('greet').innerHTML ="<b>Herzlich Willkommen: </b> " + userTitleBadge + " " + menuOverlayItemTitle;
            }
            else {
              let userTitleBadge = "Unknown";
              let menuOverlayItemTitle = "Member";

              return;
            }

        });

//chrome.tabs.getCurrent(function(){
  //document.getElementsByClassName('userTitleBadge').innerHTML;
//};);
//chrome.tabs.getCurrent(function(){
  //document.getElementsByClassName('menuOverlayItemTitle').innerHTML;
//};);
//https://status.fearnixx.de/api/v1/components?sort=status=desc



//https://fearnixx.de/status/public/api/v1/components?sort=status=asc



//       ____.               __   _________ __                _______                              .__
//      |    |__ __  _______/  |_/   _____//  |______  ___.__.\      \   ___________  _____ _____  |  |
//      |    |  |  \/  ___/\   __\_____  \\   __\__  \<   |  |/   |   \ /  _ \_  __ \/     \\__  \ |  |
//  /\__|    |  |  /\___ \  |  | /        \|  |  / __ \\___  /    |    (  <_> )  | \/  Y Y  \/ __ \|  |__
//  \________|____//____  > |__|/_______  /|__| (____  / ____\____|__  /\____/|__|  |__|_|  (____  /____/
//                      \/              \/           \/\/            \/                   \/     \/
