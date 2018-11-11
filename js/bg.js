
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
  var component = obj.data[i];
  var id = obj.data[i];
  var name = obj.data[i].name;
  var stat_name = obj.data[i].status_name;
  var linka = obj.data[i].link;
  var linktarget;

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

    var status_name;
    var name;

    if (stat_name === "Ausgefallen") {
      new Notification(
        'Warnung!', {
          icon: '../icon128.png',
          body: 'Der Server ' + name + ' ist Ausgefallen',
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
      //goodMorningV(stat_name, name);
    }
  }
});


xhr.open("GET", "https://status.fearnixx.de/api/v1/components?sort=status=desc");

xhr.send(data);




}

function IssueCreator() {

  var data_i = JSON.parse(true);

  var xhb = new XMLHttpRequest();
  xhb.withCredentials = true;

  xhb.addEventListener("readystatechange", function () {
    if (this.readyState === this.DONE) {
      //console.log(this.responseText);
      var json_n = this.responseText;
      var obj_n = JSON.parse(json_n);

      for (var i = 0; i < obj_n.data.length; i++) {
        var id_n = obj_n.data[i];
        var name_n = obj_n.data[i].name;
        var message_n = obj_n.data[i].message;
        var occurred_at = obj_n.data[i].occurred_at;
        var created_at = obj_n.data[i].created_at;
        var is_resolved = obj_n.data[i].is_resolved;
        var notifications = obj_n.data[i].notifications;
        var stickied = obj_n.data[i].stickied;
        var human_status = obj_n.data[i].human_status;
        var latest_icon = obj_n.data[i].latest_icon;


        let article_main = $('<div/>', {
          id: "bodid_" + i,
          class: "issue_main"
        })

        let article_head = $('<h3/>', {
          id: "haid_" + i,
          class: "issue_head",
          title: name_n
        })

        let article_b = $('<p/>', {
          id: "baid_" + i,
          class: "issue_body"
        })

        let article_d_1 = $('<b/>', {
          id: "daid_1_" + i,
          class: "issue_d_1"
        })

        let article_d_2 = $('<b/>', {
          id: "daid_2_" + i,
          class: "issue_d_2"
        })

        let article_i = $('<i/>', {
          id: "iaid_" + i,
          class: "fas fa-flag"
        })

        let article_h = $('<b/>', {
          id: "haidh_" + i,
          class: "issue_h",
          color: "red"
        })


        let = createt = "Erstellt am: " + created_at;

        let = occurred = "Aufgetreten am: " + occurred_at;

        let = hstatus = "Aktueller Status: " +  human_status;

        // First Stage generation
        $('#issues').append($(article_main));
        $('#bodid_' + i).append($(article_i));
        $('#bodid_' + i).append($(article_head));
        $('#bodid_' + i).append($(article_d_1));
        $('#bodid_' + i).append($(article_d_2));
        $('#bodid_' + i).append($(article_b));
        $('#bodid_' + i).append($(article_h));

        // Seccond Stage generation
        document.getElementById('haid_' + i).innerHTML = name_n;
        document.getElementById('daid_1_' + i).innerHTML = occurred;
        document.getElementById('daid_1_' + i).innerHTML = createt;
        document.getElementById('haidh_' + i).innerHTML = hstatus;
        document.getElementById('baid_' + i).innerHTML = message_n;


      }



  }

  });

  console.log("Hello World");

  xhb.open("GET", "https://status.fearnixx.de/api/v1/incidents");

  xhb.send(data_i);



}

TableCreator();

IssueCreator();



function ClearTable() {
  document.getElementById('myBody').innerHTML = "";
}


function Counter() {
  setInterval(function () {
    ClearTable();
    TableCreator();
    console.log("Calling for Data");
  }, 240000);
}

Counter();







//chrome.tabs.query({
  //          active: true,
//            lastFocusedWindow: true
//        }, function(tabs) {
//            // and use that tab to fill in out title and url
//            let tab = tabs[0];
//
//            var userTitleBadge;
//            var menuOverlayItemTitle;
//
//
//            //var URLtype = tab.url; //document.getElementById('pageURL').innerHTML;
//
//            if (tab.url == 'https://fearnixx.de/') {
//              var userTitleBadge = document.getElementsByClassName('userTitleBadge').innerHTML;
//              var menuOverlayItemTitle = document.getElementsByClassName('menuOverlayItemTitle').innerHTML;
//
//              //document.getElementById('pageURL').innerHTML = "Du bist auf: " + tab.url;
//              document.getElementById('greet').innerHTML ="<b>Herzlich Willkommen: </b> " + userTitleBadge + " " + menuOverlayItemTitle;
//            }
//            else {
//              var userTitleBadge = "Unknown";
//              var menuOverlayItemTitle = "Member";
//
//              return;
//            }
//
//
//        });



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
