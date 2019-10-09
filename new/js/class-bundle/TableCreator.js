class TableCreator {
    setMarker(id, nr) {
        let temp = obj.data[nr].status;
        let get_it = $('ida_' + id);

        if (temp === 1) {
            get_it.classList.add("greenThumb");
            get_it.classList.remove("redRocket");
            get_it.classList.remove("yellowBall");
        }
        if (temp === 3) {
            get_it.classList.remove("greenThumb");
            get_it.classList.remove("redRocket");
            get_it.classList.add("yellowBall");
        }
        if (temp === 4) {
            get_it.classList.remove("greenThumb");
            get_it.classList.remove("yellowBall");
            get_it.classList.add("redRocket");
        }
    }

    newTable(obj, htmlClass) {
        $(htmlClass).html().append(
            "<table class=\"table table-dark\" id=\"myTable\"" +
            "<thead id=\"myHead\">"+
            "</thead>"+
            "<tbody id=\"myBody\">"+
            "</tbody>"
        );
        for (let i = 0; i < obj.data.length; i++) {
            var component = obj.data[i];
            var id = obj.data[i];
            var name = obj.data[i].name;
            var stat_name = obj.data[i].status_name;
            var link = obj.data[i].link;
            var linkTarget;

            if (obj.data[i].link.length >= 2) {
                linkTarget = "_blank";
            } else {
                linkTarget = "_";
            }

            let thead = $('<th/>', {
                id: "hid_" + i,
                class: "status_head"
            });

            let tbody = $('<td/>', {
                id: "id_" + i,
                class: "status_body"
            });

            let tableLink = $('<a/>', {
                id: "ida_" + i,
                href: link,
                target: linkTarget
            });

            let trow = $('<tr>', {
                id: "root_" + i
            });

            $('#myHead').append($(trow));

            $('#myBody').append($(trow));

            $('#root_' + i).append($(thead + tbody));

            $('#hid_' + i).append(name);

            $('#id_' + i).append(tableLink);

            $('#ida_' + i).append(stat_name);

            this.setMarker(id, i);
        }


    }

    deleteTable(htmlClass) {
        $(htmlClass).innerHTML = "";
    }
}

export {TableCreator}