// ==UserScript==
// @name         AutoFarming_Natars_Travian
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Fyris
// @match        https://*/*
// @icon         https://cdn-icons-png.flaticon.com/512/353/353812.png
// @grant        none
// ==/UserScript==

// --------------------------------------------------------------------------------------VARIABLES----------------------------------------------------------------------------------------------------------//
let troops_infantery = "1111111";
let delai = 1000;
let max_delai = 5000;

// extractedPart
var regex = /^https:\/\/([^\/]+)\/.*$/;
var match = window.location.href.match(regex);

// Vérifier si un match a été trouvé
if (match && match.length >= 2) {
    var extractedPart = match[1];
}


//villes
var links = document.querySelectorAll('a');
var uniqueNewdidValues = new Set();
links.forEach(function(link) {
    // Vérifie si le lien contient "newdid="
    if (link.href.includes('newdid=')) {
        var match = link.href.match(/newdid=(\d+)/);
        if (match && match[1]) {
            var newdidValue = parseInt(match[1]); // Convertit en nombre
            uniqueNewdidValues.add(newdidValue); // Ajoute la valeur de newdid à l'ensemble
        }
    }
});
var newdidValues = Array.from(uniqueNewdidValues);
let villes = newdidValues;
// --------------------------------------------------------------------------------------END OF VARIABLES----------------------------------------------------------------------------------------------------------//




// --------------------------------------------------------------------------------------FUNCTIONS----------------------------------------------------------------------------------------------------------//

function extractNatarsFromPage(htmlContent) {
const doc = new DOMParser().parseFromString(htmlContent, 'text/html');
const natars = [];

const natarElements = doc.evaluate('/html/body/div[2]/div[4]/div[1]/div[2]/div[3]/div[1]/table[2]/tbody/tr', doc, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);

for (let i = 0; i < natarElements.snapshotLength; i++) {
    const natarElement = natarElements.snapshotItem(i);
    const populationElement = natarElement.querySelector('td.inhabitants');
    if (populationElement) {
        const population = parseInt(populationElement.textContent);
        if (population > 400 && population < 700) {
            const nameElement = natarElement.querySelector('td.name > a');
            const match = nameElement.getAttribute('href').match(/d=(\d+)/);
            if (match && match[1]) {
                const natarId = parseInt(match[1]);
                const natarName = nameElement.textContent.trim();
                natars.push({
                    id: natarId,
                    name: natarName,
                    population: population
                });
            }
        }
    }
}

return natars;
}

function timeOut(milliseconds) {
return new Promise((resolve) => {
    setTimeout(() => {
        resolve();
    }, milliseconds);
});
}

function clickElement(element) {
    if (element) {
        element.click();
    }
}

// --------------------------------------------------------------------------------------END OF FUNCTIONS----------------------------------------------------------------------------------------------------------//





// --------------------------------------------------------------------------------------UI----------------------------------------------------------------------------------------------------------//
// Création des éléments du menu
const playButton = document.createElement("button");
playButton.textContent = "Play";
playButton.style.margin = "5px";

const pauseButton = document.createElement("button");
pauseButton.textContent = "Pause";
pauseButton.style.margin = "5px";

const deleteCookiesButton = document.createElement("button");
deleteCookiesButton.textContent = "Delete Cookies";
deleteCookiesButton.style.margin = "5px";

const submenu = document.createElement("div");
submenu.style.backgroundColor = "white";
submenu.style.color = "black";
submenu.style.margin = "20px";
submenu.style.padding = "10px";
submenu.style.border = "1px solid black";
submenu.textContent = "Loot Natars";
submenu.appendChild(playButton);
submenu.appendChild(pauseButton);
submenu.appendChild(deleteCookiesButton);

const scriptStatus = document.createElement("span");
scriptStatus.textContent = "État : Pause";
scriptStatus.style.marginLeft = "10px";
submenu.appendChild(scriptStatus);
// Ajout du menu au début du body
document.body.insertBefore(submenu, document.body.firstChild);


// --------------------------------------------------------------------------------------END OF UI----------------------------------------------------------------------------------------------------------//







// --------------------------------------------------------------------------------------MAIN----------------------------------------------------------------------------------------------------------//

async function main() {

let natarPageUrl = "https://" + extractedPart + "/profile/1";
fetch(natarPageUrl)
    .then(response => response.text())
    .then(htmlContent => {
        const natars = extractNatarsFromPage(htmlContent);

        localStorage.setItem("natars", JSON.stringify(natars));
        console.log(natars);
        console.log(natars[0].id);



//1ST

if (window.location.href.match(/^https:\/\/[^\/]+\/build\.php\?newdid=.*$/) || window.location.href.match(/^https:\/\/[^\/]+\/build\.php\?id=39&tt=2&z=.*$/) || window.location.href.match(/^https:\/\/[^\/]+\/build\.php\?id=39&tt=2$/)) {


var inputElement1 = document.querySelector('input[name="troops[0][t1]"]');
var inputElement2 = document.querySelector('input[name="troops[0][t2]"]');
var inputElement3 = document.querySelector('input[name="troops[0][t3]"]');
var inputElement4 = document.querySelector('input[name="troops[0][t4]"]');
var inputElement5 = document.querySelector('input[name="troops[0][t5]"]');
var inputElement6 = document.querySelector('input[name="troops[0][t6]"]');

// Vérifier si l'élément a la classe "disabled"
if ( (inputElement1 && inputElement1.classList.contains("disabled")) && (inputElement2 && inputElement2.classList.contains("disabled")) && (inputElement3 && inputElement3.classList.contains("disabled")) &&
(inputElement4 && inputElement4.classList.contains("disabled")) && (inputElement5 && inputElement5.classList.contains("disabled")) && (inputElement6 && inputElement6.classList.contains("disabled")) ){
console.log("L'élément est désactivé (classe 'disabled')");
console.log("https://" + extractedPart + "/build.php?newdid="+ villes[Math.floor(Math.random()*villes.length)] + "&id=39&gid=16&tt=2&z=" + natars[Math.floor(Math.random()*natars.length)].id);

     setTimeout(function() {window.location.assign("https://" + extractedPart + "/build.php?newdid="+ villes[Math.floor(Math.random()*villes.length)] + "&id=39&gid=16&tt=2&z=" + natars[Math.floor(Math.random()*natars.length)].id);
                       }, max_delai);
} else {
console.log("L'élément n'est pas désactivé (pas de classe 'disabled')");
}


setTimeout(function() {
    clickElement(
        document.querySelector('input[name="troops[0][t1]"]'));
                const buttons = document.querySelectorAll('input[name="troops[0][t1]"]');
                buttons.forEach((button) => {
                    button.value = troops_infantery;
                });//troops[0][t1] first type of troops (for example slaves or clubs)

      setTimeout(function() {
          clickElement(document.querySelector("#troops > tbody > tr:nth-child(2) > td:nth-child(2) > a"));
          setTimeout(function() {
              clickElement(document.querySelector("#troops > tbody > tr:nth-child(3) > td.line-last.column-first.large > a"));
              setTimeout(function() {
                  clickElement(document.querySelector("#troops > tbody > tr:nth-child(1) > td:nth-child(2) > a"));
               setTimeout(function() {
                   clickElement(document.querySelector("#troops > tbody > tr:nth-child(2) > td.column-first.large > a"));
                   setTimeout(function() {
                    clickElement(document.querySelector("#troops > tbody > tr:nth-child(3) > td:nth-child(2) > a"));
                      setTimeout(function() {clickElement(document.querySelector("#btn_ok"));
                                                            }, 100);
                                                           }, 100);
                                                          }, 100);
                                                         }, 100);
                                                        }, 100);
                                                       }, 100);
                                                      }, 100);

}


//2ND
else if (window.location.href.match(/^https:\/\/[^\/]+\/build\.php\?id=39&tt=2$/)) {


setTimeout(function() {document.querySelector("#btn_ok").click();
                                                          }, delai);
}

//3RD
else if (window.location.href.match(/^https:\/\/[^\/]+\/build\.php\?newdid=.*$/) ||
window.location.href.match(/^https:\/\/[^\/]+\/build\.php\?id=39&tt=1$/) ||
        window.location.href.match(/^https:\/\/[^\/]+\/build\.php\?id=39&tt=2$/)) {





 setTimeout(function() {window.location.assign("https://" + extractedPart + "/build.php?newdid="+ villes[Math.floor(Math.random()*villes.length)] + "&id=39&gid=16&tt=2&z=" + natars[Math.floor(Math.random()*natars.length)].id);
                       }, delai);

}

else {
    setTimeout(function() {window.location.assign("https://" + extractedPart + "/build.php?newdid="+ villes[Math.floor(Math.random()*villes.length)] + "&id=39&gid=16&tt=2&z=" + natars[Math.floor(Math.random()*natars.length)].id);
}, delai);
}






    })
    .catch(error => {
        console.error('Erreur lors de la récupération de la page des natars :', error);
    });


};
// --------------------------------------------------------------------------------------END OF MAIN----------------------------------------------------------------------------------------------------------//


main();