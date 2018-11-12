// function getById() {
//   document.getElementById();
//   return document.getElementById();
//}

document.getElementById("skills").onclick = showSkillsPage;
function showSkillsPage() {
  document.getElementById("home-page").style.display = "none";
  document.getElementById("skills-page").style.display = "block";
  document.getElementById("languages-page").style.display = "none";
  console.info("Click on skils");
}
document.getElementById("home").onclick = showHomePage;
function showHomePage() {
  document.getElementById("home-page").style.display = "block";
  document.getElementById("skills-page").style.display = "none";
  document.getElementById("languages-page").style.display = "none";
  console.info("Click on home");
}
document.getElementById("languages").onclick = showLanguagesPage;
function showLanguagesPage() {
  document.getElementById("home-page").style.display = "none";
  document.getElementById("skills-page").style.display = "none";
  document.getElementById("languages-page").style.display = "block";
  console.info("Click on languages");
}

/*numaratoare*/

function learnToAdd(n, m) {
  var sum = n + m;
  console.info("sa adunam pana la " + sum);
  var i = n;
  var e = m;

  for (; e >= 0; ) {
    console.info(i + "+" + e + "=" + sum);
    i++;
    e--;
  }
}

learnToAdd(2, 7);
