var carrots = 0;
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
var moons = 0;
var moon_add = 0;
var plans = 0;
var plan_add = 0;
var gals = 0;
var gal_add = 0;
var verses = 0;
var verse_add = 0;
var bets = 0;
var bet_add = 0;

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
    CPS = tractor_add + factory_add + test_add + picker_add + town_add + moon_add + plan_add + gal_add + verse_add;
    if (CPS == 1) {
        document.getElementById("CPS").innerHTML = CPS + " carrot per second";
    }
    else {
        document.getElementById("CPS").innerHTML = CPS + " carrots per second";
    }
}

function buyPicker(){
    var picker_price = Math.floor(15 * Math.pow(1.1,pickers));
    if(carrots >= picker_price) {
        pickers = pickers + 1;
        picker_add = picker_add + 0.25;
        carrots = carrots - picker_price;
        Farm(0);
        document.getElementById('pickercount').innerHTML = pickers;
    }
    var Pnextprice = Math.floor(15 * Math.pow(1.1,pickers));
    document.getElementById('pickercost').innerHTML = "costs " + Pnextprice + " carrots";
};

function buyTractor(){
    var tractor_price = Math.floor(400 * Math.pow(1.1,tractors));
    if(carrots >= tractor_price) {
        tractors = tractors + 1;
        tractor_add = tractor_add + 0.5;
        carrots = carrots - tractor_price;
        Farm(0);
        document.getElementById('tractorcount').innerHTML = tractors;
    }
    var Tnextprice = Math.floor(400 * Math.pow(1.1,tractors));
    document.getElementById('tractorcost').innerHTML = "costs " + Tnextprice + " carrots";
};

function buyFactory(){
    var factory_price = Math.floor(2000 * Math.pow(1.1,tractors));
    if(carrots >= factory_price) {
        factories = factories + 1;
        factory_add = factory_add += 2;
        carrots = carrots - factory_price;
        Farm(0);
        document.getElementById('factorycount').innerHTML = factories;
    }
    var Fnextprice = Math.floor(2000 * Math.pow(1.1,factories));
    document.getElementById('factorycost').innerHTML = "costs " + Fnextprice + " carrots";
};

function buyTest(){
    var test_price = Math.floor(15000 * Math.pow(1.1,tests));
    if(carrots >= test_price) {
        tests = tests + 1;
        test_add = test_add += 10;
        carrots = carrots - test_price;
        Farm(0);
        document.getElementById('testcount').innerHTML = tests;
    }
    var Tenextprice = Math.floor(15000 * Math.pow(1.1,tests));
    document.getElementById('testcost').innerHTML = "costs " + Tenextprice + " carrots";
};

function buyTown(){
    var town_price = Math.floor(100000 * Math.pow(1.1,towns));
    if(carrots >= town_price) {
        towns = towns + 1;
        town_add = town_add += 50;
        carrots = carrots - town_price;
        Farm(0);
        document.getElementById('towncount').innerHTML = towns;
    }
    var TWnextprice = Math.floor(100000 * Math.pow(1.1,towns));
    document.getElementById('towncost').innerHTML = "costs " + TWnextprice + " carrots";
};

function buyMoon(){
    var moon_price = Math.floor(500000 * Math.pow(1.1,moons));
    if(carrots >= moon_price) {
        moons = moons + 1;
        moon_add = moon_add += 250;
        carrots = carrots - moon_price;
        Farm(0);
        document.getElementById('mooncount').innerHTML = moons;
    }
    var Mnextprice = Math.floor(50000 * Math.pow(1.1,moons));
    document.getElementById('mooncost').innerHTML = "costs " + Mnextprice + " carrots";
};

function buyPlan(){
    var plan_price = Math.floor(1000000 * Math.pow(1.1,plans));
    if(carrots >= plan_price) {
        plans = plans + 1;
        plan_add = plan_add += 1000;
        carrots = carrots - plan_price;
        Farm(0);
        document.getElementById('plancount').innerHTML = plans;
    }
    var Plnextprice = Math.floor(1000000 * Math.pow(1.1,plans));
    document.getElementById('plancost').innerHTML = "costs " + Plnextprice + " carrots";
};

function buyGal(){
    var gal_price = Math.floor(10000000 * Math.pow(1.1,gals));
    if(carrots >= gal_price) {
        gals = gals + 1;
        gal_add = gal_add += 10000;
        carrots = carrots - gal_price;
        Farm(0);
        document.getElementById('galcount').innerHTML = gals;
    }
    var Gnextprice = Math.floor(10000000 * Math.pow(1.1,gals));
    document.getElementById('galcost').innerHTML = "costs " + Gnextprice + " carrots";
};

function buyVerse(){
    var verse_price = Math.floor(100000000 * Math.pow(1.1,verses));
    if(carrots >= verse_price) {
        verses = verses + 1;
        verse_add = verse_add += 1000000;
        carrots = carrots - verse_price;
        Farm(0);
        document.getElementById('versecount').innerHTML = verses;
    }
    var Vnextprice = Math.floor(10000000 * Math.pow(1.1,verses));
    document.getElementById('versecost').innerHTML = "costs " + Vnextprice + " carrots";
};

function buyBet(){
    var bet_price = Math.floor(10000000000 * Math.pow(1.1,bets));
    if(carrots >= bet_price) {
        bets = bets + 1;
        bet_add = bet_add += 10000000;
        carrots = carrots - bet_price;
        Farm(0);
        document.getElementById('betcount').innerHTML = bets;
    }
    var Bnextprice = Math.floor(1000000000 * Math.pow(1.1,bets));
    document.getElementById('betcost').innerHTML = "costs " + Bnextprice + " carrots";
};

window.setInterval(function() {
    Farm(tractor_add);
    Farm(factory_add);
    Farm(test_add);
    Farm(picker_add);
    Farm(town_add);
    Farm(moon_add);
    Farm(plan_add);
    Farm(gal_add);
    Farm(verse_add);
    Farm(bet_add);
}, 1000);
