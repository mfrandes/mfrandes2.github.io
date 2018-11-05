console.info(1);

function sayWelcome() {
  console.info("Salut " + prenume + ", bine ai venit la noi!");
}

var nume = "Matei";
var prenume = "Nicolae";
var owner = "Matei's";
var msg1 = 'ai zis "Nick"?';
var msg2 = 'Nu, am zis "Nicolae"';
var template = `Text cu ghilimele " sau simple '`;

console.debug("auzi...? dar cum te cheama? -" + prenume);
sayWelcome();

var skills = ["html", "css", "js"];

prenume = "Nick";

console.info("toate variabilele au fost initializate");
console.log(nume);
console.debug("cum te cheama? -" + prenume);
sayWelcome();

// schimb valutar

var cursEUR = 4.5;
var myEUR = 20;
var myRON = 0;
var friendEUR = 100;
var friendRON = 0;
// operatori * / + -

myRON = myEUR * cursEUR;
console.info("eu am " + myRON + " RON");

friendRON = friendEUR * cursEUR - (friendEUR * cursEUR * 1) / 100;
console.info("tu ai " + friendRON + " RON");

var ATMFunds = 50000;
var funds = 5000;

function getExtractFee(ammount) {
  var comision = ammount * 0.01;
  if (comision < 2.5) {
    console.warn("comision minim aplicat");
    comision = 2.5;
  }
  return comision;
}

function extractFromATM(ammount) {
  console.info("==== ==== ==== ==== ====");
  console.info("suma extrasa este: " + ammount);
  var comision = getExtractFee(ammount);

  var totalExtract = ammount + comision;

  if (totalExtract > funds) {
    console.error("Insuficient Funds");
    return 0;
  }

  if (totalExtract > ATMFunds) {
    console.error("ATM insuficient funds");
    return;
  }
  funds = funds - totalExtract;
  console.info("comision aplicat:" + comision);
  console.info("Sold curent: " + funds);
  console.info("==== ==== ==== ==== ====");
}

extractFromATM(1005); // nu w multiplu de 10
extractFromATM(100000); // solduri insuficiente
extractFromATM(3000);
extractFromATM(3000);
extractFromATM(100);
