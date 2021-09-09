$(document).ready(function() {

    var notes = localStorage.getItem("n1");

    console.log(notes);

    if (notes) {
        $("#contents").html(notes);
    }

    var urlParams = new URLSearchParams(window.location.search);
    console.log(urlParams);
    console.log(urlParams.has("id"));
    console.log(urlParams.get("id"));

    var key = "package-" + urlParams.get("id");

    var package = localStorage.getItem(key);

    console.log(package);

    package_json = JSON.parse(package);
    console.log(package_json);
    console.log(package_json.view);
    console.log(package_json.price);

    var key = "packageo-" + urlParams.get("id");
    var package2 = localStorage.getItem(key2);
    console.log(typeof(package2));

    console.log(package2.view);
    console.log(package2["view"]);
    console.log(package2.price);

});