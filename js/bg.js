
function TableCreator() {
  var data = JSON.parse(true);
  //$("#laender").dynatable();


  var xhr = new XMLHttpRequest();
  xhr.withCredentials = true;

  xhr.addEventListener("readystatechange", function () {
    if (this.readyState === this.DONE) {
      console.log(this.responseText);
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
        //let idTable = document.getElementById('myTable');
        //ERROR muss ich noch fixxen bei gelegenheit ;) verstest??
        function globalos(id, nr) {
          var temp = obj.data[nr].status;
          let get_it = document.getElementById('id_' + i);

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

        function goodMorningV(stat_name) {

          $( document ).ready(function() {
            if (stat_name === "Offline") {
              alert("The Server " + name + " is Offline");
            }
            if (stat_name === "Wartung") {
              alert("The Server " + name + " is under Maintance");
            }
          });

        }

        let thead = $('<th/>', {
          id: "hid_" + i,
          class: "status_head"
        })

        let tbody = $('<td/>', {
          id: "id_" + i,
          class: "status_body"
        })

        let trow = $('<tr>', {
          id: "root_" + i
        })

        $('#myHead').append($(trow));

        $('#myBody').append($(trow));

        $('#root_' + i).append($(thead));

        $('#root_' + i).append($(tbody));

        $('#hid_' + i).append(name);

        $('#id_' + i).append(stat_name);




        //console.log();
        globalos(id, i);
        goodMorningV(stat_name);
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


//https://status.fearnixx.de/api/v1/components?sort=status=desc



//https://fearnixx.de/status/public/api/v1/components?sort=status=asc



//       ____.               __   _________ __                _______                              .__
//      |    |__ __  _______/  |_/   _____//  |______  ___.__.\      \   ___________  _____ _____  |  |
//      |    |  |  \/  ___/\   __\_____  \\   __\__  \<   |  |/   |   \ /  _ \_  __ \/     \\__  \ |  |
//  /\__|    |  |  /\___ \  |  | /        \|  |  / __ \\___  /    |    (  <_> )  | \/  Y Y  \/ __ \|  |__
//  \________|____//____  > |__|/_______  /|__| (____  / ____\____|__  /\____/|__|  |__|_|  (____  /____/
//                      \/              \/           \/\/            \/                   \/     \/
