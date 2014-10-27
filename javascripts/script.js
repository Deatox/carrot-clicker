var carrots = 0;

function Farm(val) {
    carrots = carrots + val;
    if (carrots == 1) {
        document.getElementById("carrotcount").innerHTML = "1 carrot farmed";
        document.title = "1 carrot - CarrotClicker";
    }
    else {
        document.getElementById("carrotcount").innerHTML = carrots + " carrots farmed";
        document.title = carrots + " carrots - CarrotClicker";
    }
}
var tractors = 0;
var tractor_add = 0;
var factories = 0;
var factory_add = 0;

function buyTractor(){
    var tractor_price = Math.floor(25 * Math.pow(1.1,tractors));
    if(carrots >= tractor_price) {
        tractors = tractors + 1;
        tractor_add = tractor_add + 1;
        carrots = carrots - tractor_price;
        Farm(0);
        document.getElementById('tractorcount').innerHTML = tractors;
    }
    var Tnextprice = Math.floor(25 * Math.pow(1.1,tractors));
    document.getElementById('tractorcost').innerHTML = "costs " + Tnextprice + " carrots";
};

function buyFactory(){
    var factory_price = Math.floor(100 * Math.pow(1.1,tractors));
    if(carrots >= factory_price) {
        factories = factories + 1;
        factory_add = factory_add += 5;
        carrots = carrots - factory_price;
        Farm(0);
        document.getElementById('factorycount').innerHTML = factories;
    }
    var Fnextprice = Math.floor(100 * Math.pow(1.1,factories));
    document.getElementById('factorycost').innerHTML = "costs " + Fnextprice + " carrots";
};
window.setInterval(function() {
    Farm(tractor_add);
    Farm(factory_add);
}, 1000);
