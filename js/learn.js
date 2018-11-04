console.info(0);

function sayWellcome() {
  console.info("Salut " + prenume + ", bine ai venit la noi!");
}

var nume = "Frandes";
var prenume = "Mircea";
var owner = "Mircea's";
var msg1 = 'ai is "Nick"?';
var msg2 = 'Nu, am is "Mircea"';
var template = `text cu ghilimele " dar si cu ghilimele simple'`;

console.debug("auzi...? dar cum te cheama? -" + prenume);
sayWellcome();

var skils = ["html", "css", "js"];

prenume = "Nick";

console.info("toate variabilele au fost initialiate");
console.log(nume);
console.debug("cum te cheama - " + prenume);
sayWellcome();

// schimb valutar

var cursEUR = 4.5;
var myEUR = 20;
var myRON = 0;
var friendEUR = 100;
var friendRON = 0;

// operatori: * / + -

myRON = myEUR * cursEUR;
console.info("Eu am " + myRON + " RON");

friendRON = friendEUR * cursEUR - friendEUR * cursEUR * 0.02;
console.info("Tu ai " + friendRON + " RON");

function extractFromATM(amount) {
  console.info("==== ==== ==== ====");
  console.info("suma extrasa este: " + amount);
  var comision = amount * 0.01;
  if (comision < 2.5) {
    comision = 2.5;
    console.warn("comision minim aplicat");
  }
  console.info("comision aplicat: " + comision);
  console.info("==== ==== ==== ====");
}

extractFromATM(1000);
extractFromATM(100);

//Extras Bancomat

var fonduri = 1000;

function extractFromATM(amount) {
  console.info("==== ==== ==== ====");
  console.info("Fonduri= " + fonduri + " RON");

  var comision = amount * 0.01;
  var total = amount + comision;

  if (total > fonduri) {
    console.error("Tranzactie Nereusita: Fonduri insuficiente");
    console.info("==== ==== ==== ====");
  }
  if (total < fonduri) {
    if (comision > 2.5) {
      console.info("Suma extrasa este: " + amount + " RON");
      console.info("Comision aplicat: " + comision + " RON");
      console.info("Total withdrow: " + total + " RON");
    }

    if (comision < 2.5) {
      total = amount + 2.5;
      console.info("Suma extrasa este: " + amount);
      comision = 2.5;
      console.info("Comision aplicat: " + comision);
      console.warn("comision minim aplicat");
      console.info("Total withdrow: " + total);
    }
    console.info("==== ==== ==== ====");
  }
}

extractFromATM(1000);
