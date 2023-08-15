// ==UserScript==
// @name         oasis unlimited v2
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://*/*
// @icon         data:image/jpeg;base64,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9RwPQjIjkVzmOLHA8F7+rgbV0zmNP7hcHdxB75r08obejajaalmmJzDTg/jOTPnb0uobZHaHRSxhz5BE8DxMdiNjxwkDMfPoq83/AN7zWuEcYc2JhuL6vdmMThwyuAOp52V2SZoZkV46i2TPLUBkjCGg/Ncew4k6C3G+i46xc7mSfdW3TUn/AA/Z7YdKio8T+bRbNvoMvNzlGblbsspmCvrBYNzhjOpdq1xadDyHqbWWDaO0XzyulfqdBwa0aNHl/uVZ2VRlz/FcMh33/ax+q9tNc34WE34kd7s89500uZfZO1IXRGlqmY4ToeMZ/wAts7XzBGY6jTRm7OqN5xR17Ws5Ow3Hmcbfoo4L7aurUbNhmdiORXl9n7eq6JuCJ2Xl9wR7XU5s/d/ZdGQ5z/2mQZgZFgPOw8PuT5LPX7WfO67sgPutGg/3PVQUZW1E5bwUUUH7Rmq1btSprXXmdfvvlyUpC5SVI65UNC9SVPJYLaUKCIi6mO/zAWR0twomCbNbDXXGqqGOxV1st1tPlX4ZcQWg56+e+ss+GtfFX1ObLTwF7gxuZcbBZZ5bhTm7uzcI7148Th4RyHPzKkc/wm4jru6qNsZmfhGm/p3kpWiphGxrBo0W8+Z9TmtlEXJuTmV2gABYIiIiyiIiIiIiIiIiIiIiIoDefdiCtYGyCzm/de22JvTqOh+Sq/afZfWxn7LBMOBDgDbq15bb0Ku9FFJC1+e9dGj2rUUowsN28Dp5aEeRVE0PZptBxs9rYxzdILezS4/Jd5u92fQUo7xwE8zRdodkzEMxbXO/xHzsF3SLVtOxpvr1UtVtqqqG4SQ0cGi3ubm3L1VLbwbVqJpnd+C1zSQI9AzoBz68fKy0mPVr7ybtRVbbnwSgeGQDPycOI/QVYbX2RPSuwytsPhcM2O/hP5HNeipqhkgwjI8Px3fivGVNM9hxHMcfz3bgvlr1kBWkyRZmyK3dUiFttK2I3rQbIs7JEWqlIHLb71RUcqytmWhbdZDrCylopdVmbVWUSydfRnUZjutxNZSD57rE+ZasbnPIa0FzjoALldXsbd3DZ81i7g3UD+I8T8vNRyvZELu9N/fNSwtknNmeZ3DvgsOwNkl1pZB4dWtPxdT0+v16tEXIllMjrld6GFsTcI/3v2RERRqVERERERERERERERERERERERERERERFhqadkjSx7Q5p1DgCD5grMiIuH2v2fRuu6nf3Z/A67meh+8PmuSr92quG+KFxA+JvjH+nMeoCuVFcjrZW5HPr+VTkoYn6ZdPwqFEmduKyskV2VFDFJ+8jY/+JoP1C0H7s0Z/9PH6C30VkbRbvae/RVHbNducPQ/2qnE6yCoVp/8AK9H/AO3Z8/8AdbUGyoGfcijb1DG397LY7RYNGn2Uf/ynnVw79FWVDSTS/u43O6gZf1HJdJs3c+R1jM8NH4W5n30HzXcIq0lfI79oA79PZWItlRNN3ku9h35rS2fs2KEWjaBzOpPmTmt1EVIkk3K6LWhos0WCIiLC2REREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREX//2Q==

// @grant        none
// ==/UserScript==

(function() {

let oasis = []; // Initialize the oasis array
let storedOasis = [];
let troops_infantry = "1000000000";

// Fonction pour activer/désactiver le script
var isRunning = false;

let isLooping = localStorage.getItem("isLooping") === "true"; // Initialize isLooping from local storage

async function executeScript() {
    const DISTANCE_THRESHOLD_MIN = 0;
    const DISTANCE_THRESHOLD_MAX = 30;

    var cityLinkElement = document.querySelector('a.active');

    if (cityLinkElement) {
        var hrefValue = cityLinkElement.getAttribute('href');

        var match0 = hrefValue.match(/newdid=(\d+)/);

        if (match0 && match0[1]) {
            var dValue = match0[1];
            console.log('Valeur de d :', dValue);
        } else {
            console.log('Valeur de d non trouvÃ©e.');
        }
    }

    function convertZToX(z) {
        const modifiedZ = z - 1;
        const y = 400 - Math.floor(modifiedZ / 801);
        const x = modifiedZ % 801 - 400;
        return x;
    }

    function convertZToY(z) {
        const modifiedZ = z - 1;
        const y = 400 - Math.floor(modifiedZ / 801);
        const x = modifiedZ % 801 - 400;
        return y ;
    }

    let storedOasis = []; // Initialize the storedOasis array here
    let stepSize = 31;
    const MAX_CONCURRENT_REQUESTS = 20;

    const originX = convertZToX(dValue);
    const originY = convertZToY(dValue);
    const MapSize = 400;

    console.log(originX, originY);

    function fetchTiles(x, y) {
        return new Promise((resolve, reject) => {
            let data = {
                data: {
                    x: x,
                    y: y,
                    zoomLevel: 3,
                    ignorePositions: []
                }
            };

            fetch("/api/v1/ajax/mapPositionData", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=UTF-8',
                    'authorization': "Bearer "
                },
                body: JSON.stringify(data)
            })
                .then(response => response.json())
                .then(data => {
                if (!data.tiles) {
                    console.warn(`No tiles data received for (${x}, ${y}). Possibly an empty area.`);
                    resolve([]);
                    return;
                }
                console.log(`Fetched tile for (${x}, ${y})`);

                // Filter tiles based on title of interest and distance, and store their kid
                let relevantTiles = data.tiles.filter(tile => tile.title && tile.title.includes("{k.bt}"));
                if (relevantTiles.length > 0) {
                    relevantTiles.forEach(tile => {
                        let distance = computeDistance(originX, originY, parseInt(tile.position.x), parseInt(tile.position.y));
                        if (distance >= DISTANCE_THRESHOLD_MIN && distance <= DISTANCE_THRESHOLD_MAX) {
                            let kid = computeKID(parseInt(tile.position.x), parseInt(tile.position.y));
                            storedOasis.push(kid);
                        }
                    });
                }

                resolve();
            })
                .catch(error => {
                console.error(`Error fetching tiles for (${x}, ${y}):`, error);
                reject(error);
            });
        });
    }

    function computeDistance(x1, y1, x2, y2) {
        return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
    }

    function computeKID(x, y) {
        return 1 + ((MapSize - y) * (MapSize * 2 + 1)) + MapSize + x;
    }

    async function fetchClosestOasis() {
        let minX = Math.max(-MapSize, originX - DISTANCE_THRESHOLD_MAX);
        let maxX = Math.min(MapSize, originX + DISTANCE_THRESHOLD_MAX);
        let minY = Math.max(-MapSize, originY - DISTANCE_THRESHOLD_MAX);
        let maxY = Math.min(MapSize, originY + DISTANCE_THRESHOLD_MAX);

        let tasks = [];

        for (let i = minX; i <= maxX; i += stepSize) {
            for (let j = minY; j <= maxY; j += stepSize) {
                tasks.push({ promise: fetchTiles(i, j), x: i, y: j });
            }
        }

        // Fetch tiles in chunks
        for (let i = 0; i < tasks.length; i += MAX_CONCURRENT_REQUESTS) {
            let chunk = tasks.slice(i, i + MAX_CONCURRENT_REQUESTS);
            await Promise.all(chunk.map(task => task.promise));

            console.log(`Completed ${i + MAX_CONCURRENT_REQUESTS} tasks out of ${tasks.length}`);
            await new Promise(r => setTimeout(r, 10));
        }

        // Update oasis and store data in localStorage
        oasis = storedOasis;
        console.log("la variable oasis vaut :", oasis);

        // Store the data in the localStorage
        localStorage.setItem('oasisData', JSON.stringify(oasis));
    }

    // Vérifier si les données oasis existent dans le localStorage
    const oasisData = localStorage.getItem('oasisData');

    if (oasisData) {
        // Si les données existent dans le localStorage, les charger dans la variable oasis
        try {
            oasis = JSON.parse(oasisData);
            console.log("Les données oasis ont été chargées depuis le localStorage.");
        } catch (error) {
            console.error("Error parsing oasisData from localStorage:", error);
        }
    } else {
        // Si les données n'existent pas dans le localStorage, exécuter le script pour les obtenir
        await fetchClosestOasis();
    }

    console.log("la variable oasis vaut :", oasis);
}// end of async function

// Rest of your code...



    // Vérifier si les données oasis existent dans le localStorage
const oasisData = localStorage.getItem('oasisData');

if (oasisData) {
    try {
        // Attempt to parse the oasisData
        oasis = JSON.parse(oasisData);
        console.log("Les données oasis ont été chargées depuis le localStorage.");
    } catch (error) {
        // Handle any JSON parsing errors here
        console.error("Error parsing oasisData from localStorage:", error);
    }
} else {
    // If the data doesn't exist in localStorage, execute the script to obtain it
     executeScript();

    try {
        // Store the obtained data in localStorage
        localStorage.setItem('oasisData', JSON.stringify(oasis));
        console.log("Les données oasis ont été stockées dans le localStorage.");
    } catch (error) {
        console.error("Error storing oasis data in localStorage:", error);
    }
}


// Mettre en place la mise à jour des données oasis dans le localStorage
function updateOasisData() {
    // Stocker les données dans le localStorage
    localStorage.setItem('oasisData', JSON.stringify(oasis));

    console.log("Les données oasis ont été stockées dans le localStorage.");
}




    let villes = [];


    var cityLinkElement = document.querySelector('a.active');

    if (cityLinkElement) {
            var hrefValue = cityLinkElement.getAttribute('href');
            var match0 = hrefValue.match(/newdid=(\d+)/);
            if (match0 && match0[1]) {
                var dValue = match0[1];
            }
        }


        var links = document.querySelectorAll('a');
        var uniqueNewdidValues = new Set();

        links.forEach(function(link) {
            if (link.href.includes('newdid=')) {
                var match = link.href.match(/newdid=(\d+)/);
                if (match && match[1]) {
                    var newdidValue = parseInt(match[1]); // Convertit en nombre
                    uniqueNewdidValues.add(newdidValue); // Ajoute la valeur de newdid à l'ensemble
                }
            }
        });

        var newdidValues = Array.from(uniqueNewdidValues);









        villes = dValue;






     // Multiples cities ==>    villes = newdidValues;


          localStorage.setItem('villes', JSON.stringify(villes));



    // Si le choix est déjà stocké, récupérer les données du localStorage
    var savedVilles = localStorage.getItem('villes');
    var villages = JSON.parse(savedVilles);










    let delai = 5000; // en millisecondes
    let max_delai = 5000; // en millisecondes




    //END OF SETTINGS



    // Fonction pour effacer les cookies et le localStorage
function deleteCookies() {
    localStorage.removeItem('villes');
    // Vous pouvez également ajouter d'autres éléments à supprimer si nécessaire

    // Recharger la page pour refléter les changements
    location.reload();
}



    function extractNatarNewdidValues(htmlContent) {
        const parser = new DOMParser();
        const doc = parser.parseFromString(htmlContent, 'text/html');
        const capitalElements = doc.querySelectorAll('span.mainVillage');
        const newdidValues = [];

        capitalElements.forEach(capitalElement => {
            const rowElement = capitalElement.closest('tr');
            if (rowElement) {
                const linkElement = rowElement.querySelector('td.name > a[href*="karte.php?d="]');
                if (linkElement) {
                    const match = linkElement.getAttribute('href').match(/d=(\d+)/);
                    if (match && match[1]) {
                        newdidValues.push(parseInt(match[1]));
                    }
                }
            }
        });

        return newdidValues;
    }


    var myurl = window.location.href;

    // Utilisation d'une expression régulière pour extraire la partie souhaitée
    var regex = /^https:\/\/([^\/]+)\/.*$/;
    var match = myurl.match(regex);

    // Vérifier si un match a été trouvé
    if (match && match.length >= 2) {
        var extractedPart = match[1];
        console.log("Partie extraite :", extractedPart);
    } else {
        console.log("Aucune partie extraite.");
    }



    // Utiliser fetch pour obtenir le contenu de la page
    let url_to_fetch = "https://" + extractedPart + "/profile/1";
    fetch(url_to_fetch)
        .then(response => response.text())
        .then(htmlContent => {
            const natarNewdidValues = extractNatarNewdidValues(htmlContent);

            console.log(natarNewdidValues);




    function clickElement(element) {
        if (element) {
            element.click();
        }
    }


        let url = "https://" + extractedPart + "/build.php?newdid="+ villes[Math.floor(Math.random()*villes.length)] + "&id=39&gid=16&tt=2&z=" + oasis[Math.floor(Math.random()*oasis.length)];

              console.log(villes, oasis,url);



//1ST

if (isRunning && (window.location.href.match(/^https:\/\/[^\/]+\/build\.php\?newdid=.*$/) || window.location.href.match(/^https:\/\/[^\/]+\/build\.php\?id=39&tt=2&z=.*$/) || window.location.href.match(/^https:\/\/[^\/]+\/build\.php\?id=39&tt=2$/))) {


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
    console.log(url);

         setTimeout(function() {window.location.assign(url);
                           }, max_delai);
} else {
    console.log("L'élément n'est pas désactivé (pas de classe 'disabled')");
}


    setTimeout(function() {
        clickElement(document.querySelector('input[name="troops[0][t1]"]'));
                    const buttons = document.querySelectorAll('input[name="troops[0][t1]"]');
                    buttons.forEach((button) => {
                        button.value = troops_infantery;
                    });//troops[0][t1] first type of troops (for example slaves or clubs)

          setTimeout(function() {
              clickElement(document.querySelector("#troops > tbody > tr:nth-child(2) > td:nth-child(2) > a"));
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
                                                          }, 100);

}


//2ND
else if (isRunning && (window.location.href.match(/^https:\/\/[^\/]+\/build\.php\?id=39&tt=2$/))) {


    setTimeout(function() {document.querySelector("#btn_ok").click();
                                                              }, 3200);
}

//3RD
else if (isRunning && (window.location.href.match(/^https:\/\/[^\/]+\/build\.php\?newdid=.*$/)) ||
    window.location.href.match(/^https:\/\/[^\/]+\/build\.php\?id=39&tt=1$/) ||
            window.location.href.match(/^https:\/\/[^\/]+\/build\.php\?id=39&tt=2$/)) {





     setTimeout(function() {window.location.assign(url);
                           }, delai);

}


else if (isRunning) {
    console.log("L'URL ne correspond pas au modèle.");




     setTimeout(function() {window.location.assign(url);
                           }, max_delai);
}

 })
        .catch(error => {
            console.error('Erreur lors de la récupération de la page :', error);
        });



    // Exécuter la mise à jour des données oasis dans le localStorage si nécessaire
if (storedOasis.length > 0) {
    updateOasisData();
}

// Créer le conteneur de contrôle
const controlContainer = document.createElement('div');
controlContainer.style.position = 'fixed';
controlContainer.style.top = '35px';
controlContainer.style.right = '10px';
controlContainer.style.zIndex = '9999';
controlContainer.innerHTML = `
    <div style="background-color: white; padding: 5px 10px; border: 1px solid black; margin-bottom: 5px;">Looting Oasis</div>
    <button id="deleteCookiesButton" style="padding: 5px 10px; font-size: 14px; background-color: white; border: 1px solid black;">Delete Cookies</button>
    <button id="playPauseButton" style="padding: 5px 10px; font-size: 14px; background-color: white; border: 1px solid black;">${isRunning ? 'Pause' : 'Play'}</button>
    <button id="ville" style="padding: 5px 10px; font-size: 14px; background-color: white; border: 1px solid black;">Ville</button>
    <button id="villes" style="padding: 5px 10px; font-size: 14px; background-color: white; border: 1px solid black;">Villes</button>

`;

// Ajouter le conteneur de contrôle à la page
document.body.appendChild(controlContainer);



    // Écouteur d'événement pour le bouton "Ville"
document.getElementById('ville').addEventListener('click', function () {
    villes = [dValue];
    console.log("Bouton Ville cliqué : " + villes);
});

// Écouteur d'événement pour le bouton "Villes"
document.getElementById('villes').addEventListener('click', function () {
    villes = newdidValues;
    console.log("Bouton Villes cliqué, villes = " + villes);
});


// Bouton Delete Cookies
const deleteCookiesButton = document.getElementById('deleteCookiesButton');
deleteCookiesButton.addEventListener('click', deleteCookies);

// Bouton Play/Pause
const playPauseButton = document.getElementById('playPauseButton');
playPauseButton.addEventListener('click', toggleScript);

// Fonction pour activer/désactiver le script
function toggleScript() {
    isRunning = !isRunning;
    playPauseButton.textContent = isRunning ? 'Pause' : 'Play';

    // Sauvegarder le choix de play/pause dans le localStorage
    localStorage.setItem('isRunning', isRunning);
}

// Initialiser isRunning à partir du localStorage
isRunning = localStorage.getItem('isRunning') === 'true';
playPauseButton.textContent = isRunning ? 'Pause' : 'Play';









})();