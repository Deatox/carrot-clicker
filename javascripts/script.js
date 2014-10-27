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
var tests = 0;
var test_add = 0;
var pickers = 0;
var picker_add = 0;
var towns = 0;
var town_add = 0;

function buyPicker(){
    var picker_price = Math.floor(2 * Math.pow(1.1,pickers));
    if(carrots >= picker_price) {
        pickers = pickers + 1;
        picker_add = picker_add + 0.5;
        carrots = carrots - picker_price;
        Farm(0);
        document.getElementById('pickercount').innerHTML = pickers;
    }
    var Pnextprice = Math.floor(2 * Math.pow(1.1,pickers));
    document.getElementById('pickercost').innerHTML = "costs " + Pnextprice + " carrots";
};

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

function buyTest(){
    var test_price = Math.floor(500 * Math.pow(1.1,tests));
    if(carrots >= test_price) {
        tests = tests + 1;
        test_add = test_add += 10;
        carrots = carrots - test_price;
        Farm(0);
        document.getElementById('testcount').innerHTML = tests;
    }
    var Tenextprice = Math.floor(500 * Math.pow(1.1,tests));
    document.getElementById('testcost').innerHTML = "costs " + Tenextprice + " carrots";
};

function buyTown(){
    var town_price = Math.floor(2500 * Math.pow(1.1,towns));
    if(carrots >= town_price) {
        towns = towns + 1;
        town_add = town_add += 100;
        carrots = carrots - town_price;
        Farm(0);
        document.getElementById('towncount').innerHTML = towns;
    }
    var TWnextprice = Math.floor(500 * Math.pow(1.1,towns));
    document.getElementById('towncost').innerHTML = "costs " + TWnextprice + " carrots";
};

window.setInterval(function() {
    Farm(tractor_add);
    Farm(factory_add);
    Farm(test_add);
    Farm(picker_add);
    Farm(town_add);
}, 1000);
