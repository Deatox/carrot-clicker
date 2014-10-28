var save {
    carrots = 0,
    save.tractors = 0,
    save.tractor_add = 0,
    save.factories = 0,
    save.factory_add = 0,
    save.tests = 0,
    save.test_add = 0,
    save.pickers = 0,
    save.picker_add = 0,
    save.towns = 0,
    save.town_add = 0,
    save.moons = 0,
    save.moon_add = 0,
    save.plans = 0,
    save.plan_add = 0,
    save.gals = 0,
    save.gal_add = 0,
    save.verses = 0,
    save.verse_add = 0,
    save.bets = 0,
    save.bet_add = 0;
}
function Farm(val) {
    save.carrots = save.save.carrots + val;
    if (save.carrots == 1) {
        document.getElementById("carrotcount").innerHTML = "1 carrot farmed";
        document.title = "1 carrot - CarrotClicker";
    }
    else {
        document.getElementById("carrotcount").innerHTML = save.carrots + " carrots farmed";
        document.title = save.carrots + " carrots - CarrotClicker";
    }
    CPS = save.tractor_add + save.factory_add + save.test_add + save.picker_add + save.town_add + save.moon_add + save.plan_add + save.gal_add + save.verse_add;
    if (CPS == 1) {
        document.getElementById("CPS").innerHTML = CPS + " carrot per second";
    }
    else {
        document.getElementById("CPS").innerHTML = CPS + " carrots per second";
    }
}

function buyPicker(){
    var picker_price = Math.floor(15 * Math.pow(1.1,save.pickers));
    if(save.carrots >= picker_price) {
        save.pickers = save.pickers + 1;
        save.picker_add = save.picker_add + 0.25;
        save.carrots = save.carrots - picker_price;
        Farm(0);
        document.getElementById('pickercount').innerHTML = save.pickers;
    }
    var Pnextprice = Math.floor(15 * Math.pow(1.1,save.pickers));
    document.getElementById('pickercost').innerHTML = "costs " + Pnextprice + " carrots";
};

function buyTractor(){
    var tractor_price = Math.floor(400 * Math.pow(1.1,save.tractors));
    if(save.carrots >= tractor_price) {
        save.tractors = save.tractors + 1;
        save.tractor_add = save.tractor_add + 0.5;
        save.carrots = save.carrots - tractor_price;
        Farm(0);
        document.getElementById('tractorcount').innerHTML = save.tractors;
    }
    var Tnextprice = Math.floor(400 * Math.pow(1.1,save.tractors));
    document.getElementById('tractorcost').innerHTML = "costs " + Tnextprice + " carrots";
};

function buyFactory(){
    var factory_price = Math.floor(2000 * Math.pow(1.1,save.tractors));
    if(save.carrots >= factory_price) {
        save.factories = save.factories + 1;
        save.factory_add = save.factory_add += 2;
        save.carrots = save.carrots - factory_price;
        Farm(0);
        document.getElementById('factorycount').innerHTML = save.factories;
    }
    var Fnextprice = Math.floor(2000 * Math.pow(1.1,save.factories));
    document.getElementById('factorycost').innerHTML = "costs " + Fnextprice + " carrots";
};

function buyTest(){
    var test_price = Math.floor(15000 * Math.pow(1.1,save.tests));
    if(save.carrots >= test_price) {
        save.tests = save.tests + 1;
        save.test_add = save.test_add += 10;
        save.carrots = save.carrots - test_price;
        Farm(0);
        document.getElementById('testcount').innerHTML = save.tests;
    }
    var Tenextprice = Math.floor(15000 * Math.pow(1.1,save.tests));
    document.getElementById('testcost').innerHTML = "costs " + Tenextprice + " carrots";
};

function buyTown(){
    var town_price = Math.floor(100000 * Math.pow(1.1,save.towns));
    if(save.carrots >= town_price) {
        save.towns = save.towns + 1;
        save.town_add = save.town_add += 50;
        save.carrots = save.carrots - town_price;
        Farm(0);
        document.getElementById('towncount').innerHTML = save.towns;
    }
    var TWnextprice = Math.floor(100000 * Math.pow(1.1,save.towns));
    document.getElementById('towncost').innerHTML = "costs " + TWnextprice + " carrots";
};

function buyMoon(){
    var moon_price = Math.floor(500000 * Math.pow(1.1,save.moons));
    if(save.carrots >= moon_price) {
        save.moons = save.moons + 1;
        save.moon_add = save.moon_add += 250;
        save.carrots = save.carrots - moon_price;
        Farm(0);
        document.getElementById('mooncount').innerHTML = save.moons;
    }
    var Mnextprice = Math.floor(50000 * Math.pow(1.1,save.moons));
    document.getElementById('mooncost').innerHTML = "costs " + Mnextprice + " carrots";
};

function buyPlan(){
    var plan_price = Math.floor(1000000 * Math.pow(1.1,save.plans));
    if(save.carrots >= plan_price) {
        save.plans = save.plans + 1;
        save.plan_add = save.plan_add += 1000;
        save.carrots = save.carrots - plan_price;
        Farm(0);
        document.getElementById('plancount').innerHTML = save.plans;
    }
    var Plnextprice = Math.floor(1000000 * Math.pow(1.1,save.plans));
    document.getElementById('plancost').innerHTML = "costs " + Plnextprice + " carrots";
};

function buyGal(){
    var gal_price = Math.floor(10000000 * Math.pow(1.1,save.gals));
    if(save.carrots >= gal_price) {
        save.gals = save.gals + 1;
        save.gal_add = save.gal_add += 10000;
        save.carrots = save.carrots - gal_price;
        Farm(0);
        document.getElementById('galcount').innerHTML = save.gals;
    }
    var Gnextprice = Math.floor(10000000 * Math.pow(1.1,save.gals));
    document.getElementById('galcost').innerHTML = "costs " + Gnextprice + " carrots";
};

function buyVerse(){
    var verse_price = Math.floor(100000000 * Math.pow(1.1,save.verses));
    if(save.carrots >= verse_price) {
        save.verses = save.verses + 1;
        save.verse_add = save.verse_add += 1000000;
        save.carrots = save.carrots - verse_price;
        Farm(0);
        document.getElementById('versecount').innerHTML = save.verses;
    }
    var Vnextprice = Math.floor(10000000 * Math.pow(1.1,save.verses));
    document.getElementById('versecost').innerHTML = "costs " + Vnextprice + " carrots";
};

function buyBet(){
    var bet_price = Math.floor(10000000000 * Math.pow(1.1,save.bets));
    if(save.carrots >= bet_price) {
        save.bets = save.bets + 1;
        save.bet_add = save.bet_add += 10000000;
        save.carrots = save.carrots - bet_price;
        Farm(0);
        document.getElementById('betcount').innerHTML = save.bets;
    }
    var Bnextprice = Math.floor(1000000000 * Math.pow(1.1,save.bets));
    document.getElementById('betcost').innerHTML = "costs " + Bnextprice + " carrots";
};

window.setInterval(function() {
    Farm(save.tractor_add);
    Farm(save.factory_add);
    Farm(save.test_add);
    Farm(save.picker_add);
    Farm(save.town_add);
    Farm(save.moon_add);
    Farm(save.plan_add);
    Farm(save.gal_add);
    Farm(save.verse_add);
    Farm(save.bet_add);
}, 1000);
