// save notes to localStorage //
$(document).ready(function() {
    $(".save-btn").on("click", function() {
        if (window.localStorage) {
            var notes = $(".notes").val();

            console.log(notes);

            localStorage.setItem("n1", notes);
            console.log(localStorage.getItem("n1"));

        }
    });

    var package = {
        "id": 1,
        "view": "view",
        "price": 12.50,
        "image": "../images/products_1.png",
    }

    localStorage.setItem("package-" + package.id, JSON.stringify(package));
    localStorage.setItem("packageo-" + package.id, package);

    var ul = $("<ul></ul>");
    var href = $("<a></a>").attr("href", "data.html?id=" + package.id).text(package.view);
    var li_package = $("<li></li>").append(href);

    ul.append(li_package);

    $("#packages").html("");
    $("#packages").append(ul);
});

Notification.requestPermission(function(status) {
    console.log('Notification permission status:', status);
});




var url = "database.json"
$.getJSON(url, function(data) {
    $.each(data, function(i, item) {
        let image = item.image;
        let name = item.name;
        let price = item.price;
        let link = item.link;

        $(".container").append(`<div class="card text-center">
                    <img class="card-img-top" src=${image} />
                    <div class="card-img-top mb-5">
                        <h4 class="card-title text-center mt-3">${name}</h4>
                        <p class="card-text text-center">${price}</p>
                        <a href="${link}" class="btn btn-primary">Buy now</a>
                    </div>
                    </div>`);
    });

})

// document.addEventListener("DOMContentLoaded", showlocalFood);