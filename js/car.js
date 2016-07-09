$("#start").click(function() {
    $('html, body').animate({
        scrollTop: $("#config").offset().top
    }, 1000);
});

function calculateTotal() {
    var config = document.getElementById("config");

    for (var i = 0; i < config.length; i++) {
        if (config[i].checked) {
            config = config[i].value;
        }
    }

    var factoryOpt = document.getElementById("factory-options");

    for (var i = 0; i < factoryOpt.length; i++) {
        if (factoryOpt[i].checked) {
            factoryOpt = factoryOpt[i].value;
        }
    }

    var dealer = document.getElementById("dealer-options");
    var temp = 0;
    for (var i = 0; i < dealer.length; i++) {
        if (dealer[i].checked) {
            temp = temp + Number(dealer[i].value);
        }
    }
    dealer = temp;

    var total = Number(config) + Number(factoryOpt) + Number(dealer);

    total = '$' + String(total) + ".00"
    document.getElementById("total-price").innerHTML = total;
}

function viewCar() {
    console.log("hi");
    var colors = document.getElementById('carColors').value;

    var link = "./img/" + colors + ".jpg";

    console.log("link"+link);
    console.log(colors);
    document.getElementById("car-img").src = link;
}