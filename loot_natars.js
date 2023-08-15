// ==UserScript==
// @name         Natar Loot Bot Old 🚀
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://*/*
// @icon         https://i.pinimg.com/originals/0c/67/5a/0c675a8e1061478d2b7b21b330093444.gif
// @grant        none
// ==/UserScript==


// Fonction pour visiter les URL en séquence
function visitUrlsSequentially(urls, index) {
    if (index < urls.length) {
        const url = urls[index];

        // If you want to perform certain actions before loading an URL, you can do it here
        if (url.includes("specific_part_of_url")) {
            // Perform your actions here before loading the URL
            // For example, click on a specific element or wait for something to load
            // Then proceed to load the URL after the delay
            setTimeout(function () {
                window.location.assign(url);
            }, delai);
        } else {
            setTimeout(function () {
                window.location.assign(url);
            }, delai);

        }

        if (window.location.href.match(/^https:\/\/[^\/]+\/build\.php\?newdid=.*$/) ||
            window.location.href.match(/^https:\/\/[^\/]+\/build\.php\?id=39&tt=2&z=.*$/) ||
            window.location.href.match(/^https:\/\/[^\/]+\/build\.php\?id=39&tt=2$/)) {
            // Attendre que des actions se fassent
            setTimeout(function () {
                visitNextUrl(urls, index);
            }, delai);
        } else {
            setTimeout(function () {
                visitNextUrl(urls, index);
            }, delai);

        }
    }
}

// Fonction pour générer les URLs pour une ville
function generateUrlsForVille(newdid, oasis) {
    const currentCoordinates = getCurrentCoordinates(newdid);

    let filteredOasis = oasis
        .filter(o => {
            const oasisId = parseInt(o);
            // Ajoutez des conditions de filtre pour la population si nécessaire
            return true; // Par défaut, ne filtre pas par population
        })
        .map(o => {
            const oasisId = parseInt(o);
            const oasisX = convertZToX(oasisId);
            const oasisY = convertZToY(oasisId);
            const distance = calculateDistance(currentCoordinates.x, currentCoordinates.y, oasisX, oasisY);
            return { oasis: o, distance: distance };
        });

    // Trier les oasis par distance croissante
    filteredOasis.sort((a, b) => a.distance - b.distance);

    // Prendre les 25 oasis les plus proches
    let nearestOasis = filteredOasis.slice(0, max_oasis).map(o => o.oasis);

    // Utiliser ces oasis pour construire les URL
    return nearestOasis.map(o => "https://" + extractedPart + "/build.php?newdid=" + newdid + "&id=39&gid=16&tt=2&z=" + o);
}
//FIN GENERATEURLSFORVILLES

// Convert z-coordinate to x and y coordinates
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
    return y;
}

// Fonction pour obtenir les coordonnées actuelles
function getCurrentCoordinates(newdid) {
    const links = document.querySelectorAll('a');
    let x = 0;
    let y = 0;

    links.forEach(function (link) {
        if (link.href.includes('newdid=' + newdid)) {
            const match = link.href.match(/d=(\d+)&c=(\d+)/);
            if (match && match[1] && match[2]) {
                x = parseInt(match[1]);
                y = parseInt(match[2]);
            }
        }
    });

    return { x, y };
}


function extractNatarNewdidValues(htmlContent) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlContent, 'text/html');
    const rows = doc.querySelectorAll('tbody > tr'); // Sélectionnez toutes les lignes du tableau
    const newdidValues = [];

    rows.forEach(row => {
        const populationElement = row.querySelector('td.inhabitants');
        if (populationElement) {
            const population = parseInt(populationElement.textContent.trim());
            if (population > 400 && population < 750) { // Filtrez par population
                const linkElement = row.querySelector('td.name > a[href*="karte.php?d="]');
                if (linkElement) {
                    const match = linkElement.getAttribute('href').match(/d=(\d+)/);
                    if (match && match[1]) {
                        newdidValues.push(parseInt(match[1]));
                    }
                }
            }
        }
    });

    return newdidValues;
}


// Calculate distance between two coordinates (x1, y1) and (x2, y2)
function calculateDistance(x1, y1, x2, y2) {
    const dx = Math.abs(x1 - x2);
    const dy = Math.abs(y1 - y2);
    return Math.sqrt(dx * dx + dy * dy);
}
// Click on an element
function clickElement(element) {
    if (element) {
        element.click();
    }
}



function timeOut(milliseconds) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, milliseconds);
    });
}


async function main() {
    // SETTINGS
    let troops_infantry = "10000000";
    let delai = 5000;
    let max_delai = 15000;
    let max_oasis = 25; // per city
    let i = 0;
    // END OF SETTINGS

    // URL
    var myurl = window.location.href;

    // Use a regular expression to extract the desired part
    var regex = /^https:\/\/([^\/]+)\/.*$/;
    var match = myurl.match(regex);

    // Check if a match was found
    if (match && match.length >= 2) {
        var extractedPart = match[1];
    }
    // END URL


    let isPlaying = false;
    let currentIndex = 0; // Keep track of the current city index

    const playPauseButton = document.createElement('button');
    playPauseButton.textContent = 'Play';
    playPauseButton.style.margin = '10px';
    const lootButton = document.createElement('button');
    lootButton.textContent = 'Loot Natar';
    lootButton.style.margin = '10px';

    const resetButton = document.createElement('button');
    resetButton.textContent = 'Reset';
    resetButton.style.margin = '10px';

    const buttonContainer = document.createElement('div');
    buttonContainer.appendChild(lootButton);
    buttonContainer.appendChild(resetButton);
    document.body.prepend(buttonContainer);

    lootButton.addEventListener('click', function () {
        // Implement the functionality you want when the "Loot Natar" button is clicked
        // This can include loading URLs or performing actions
        // You can use the visitUrlsSequentially function or other logic here
        console.log('Loot Natar button clicked');
    });

    resetButton.addEventListener('click', () => {
        localStorage.clear();
        console.log('Local storage wiped clean.');
    });






    // 1ST Part
    if (window.location.href.match(/^https:\/\/[^\/]+\/build\.php\?newdid=.*$/) ||
        window.location.href.match(/^https:\/\/[^\/]+\/build\.php\?id=39&tt=2&z=.*$/) ||
        window.location.href.match(/^https:\/\/[^\/]+\/build\.php\?id=39&tt=2$/)) {


        alert("on est en 1");
        var inputElement1 = document.querySelector('input[name="troops[0][t1]"]');
        var inputElement2 = document.querySelector('input[name="troops[0][t2]"]');
        var inputElement3 = document.querySelector('input[name="troops[0][t3]"]');
        var inputElement4 = document.querySelector('input[name="troops[0][t4]"]');
        var inputElement5 = document.querySelector('input[name="troops[0][t5]"]');
        var inputElement6 = document.querySelector('input[name="troops[0][t6]"]');

        // Check if elements have "disabled" class
        if ((inputElement1 && inputElement1.classList.contains("disabled")) &&
            (inputElement2 && inputElement2.classList.contains("disabled")) &&
            (inputElement3 && inputElement3.classList.contains("disabled")) &&
            (inputElement4 && inputElement4.classList.contains("disabled")) &&
            (inputElement5 && inputElement5.classList.contains("disabled")) &&
            (inputElement6 && inputElement6.classList.contains("disabled"))) {
            console.log("L'élément est désactivé (classe 'disabled')");
            // visitUrlsSequentially(generateUrlsForVille(villes[i+1],0));



        } else {
            console.log("L'élément n'est pas désactivé (pas de classe 'disabled')");
            await timeOut(100);
            clickElement(document.querySelector('input[name="troops[0][t1]"]'));
            const buttons = document.querySelectorAll('input[name="troops[0][t1]"]');
            buttons.forEach((button) => {
                button.value = troops_infantry;
            });
            await timeOut(100);
            clickElement(document.querySelector("#troops > tbody > tr:nth-child(2) > td:nth-child(2) > a"));
            await timeOut(100)
            clickElement(document.querySelector("#troops > tbody > tr:nth-child(2) > td:nth-child(2) > a"));
            await timeOut(100)
            clickElement(document.querySelector("#troops > tbody > tr:nth-child(3) > td.line-last.column-first.large > a"));
            await timeOut(100)
            clickElement(document.querySelector("#troops > tbody > tr:nth-child(1) > td:nth-child(2) > a"));
            await timeOut(100)
            clickElement(document.querySelector("#troops > tbody > tr:nth-child(2) > td.column-first.large > a"));
            await timeOut(100)
            clickElement(document.querySelector("#troops > tbody > tr:nth-child(3) > td:nth-child(2) > a"));
            await timeOut(100)
            clickElement(document.querySelector("#btn_ok"));



        }


    }



    // 2ND Part
    else if (window.location.href.match(/^https:\/\/[^\/]+\/build\.php\?id=39&tt=2$/)) {
        alert("on est en 2");

        await timeOut(100)
        clickElement(document.querySelector("#btn_ok"));
    }

    else {
        console.log("L'URL ne correspond pas au modèle.");
    }




    // Fetch Natar data and continue execution
    let url_to_fetch = "https://" + extractedPart + "/profile/1";
    fetch(url_to_fetch)
        .then(response => response.text())
        .then(htmlContent => {
            const natarNewdidValues = extractNatarNewdidValues(htmlContent);
            let oasis = natarNewdidValues;

            //VILLES
            var links = document.querySelectorAll('a');

            var uniqueNewdidValues = new Set();

            links.forEach(function (link) {
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
            //FIN VILLES





            // Générer les URLs pour chaque ville
            // Générer les URLs pour chaque ville
            let allUrls = [];

            const villeUrls = generateUrlsForVille(villes[i]);
            allUrls = allUrls.concat(villeUrls);


            // Call the function to visit URLs
            visitUrlsSequentially(allUrls, 0);

            console.log(allUrls);

            // Fonction pour visiter les URL en séquence
            function visitUrlsSequentially(urls, index) {
                if (index < urls.length) {
                    const url = urls[index];

                    // If you want to perform certain actions before loading an URL, you can do it here
                    if (url.includes("specific_part_of_url")) {
                        // Perform your actions here before loading the URL
                        // For example, click on a specific element or wait for something to load
                        // Then proceed to load the URL after the delay
                        setTimeout(function () {
                            window.location.assign(url);
                        }, delai);
                    } else {
                        setTimeout(function () {
                            window.location.assign(url);
                        }, delai);

                    }

                    if (window.location.href.match(/^https:\/\/[^\/]+\/build\.php\?newdid=.*$/) ||
                        window.location.href.match(/^https:\/\/[^\/]+\/build\.php\?id=39&tt=2&z=.*$/) ||
                        window.location.href.match(/^https:\/\/[^\/]+\/build\.php\?id=39&tt=2$/)) {
                        // Attendre que des actions se fassent
                        setTimeout(function () {
                            visitNextUrl(urls, index);
                        }, delai);
                    } else {
                        setTimeout(function () {
                            visitNextUrl(urls, index);
                        }, delai);

                    }
                }
            }

            // Fonction pour visiter l'URL suivante
            function visitNextUrl(urls, index) {
                visitUrlsSequentially(urls, index + 1);
            }

            // Start button
            let playButton = document.createElement("button");
            playButton.textContent = "Play";
            playButton.style.margin = "5px";

            // Pause button
            let pauseButton = document.createElement("button");
            pauseButton.textContent = "Pause";
            pauseButton.style.margin = "5px";

            // Reset button
            let resetButton = document.createElement("button");
            resetButton.textContent = "Reset";
            resetButton.style.margin = "5px";

            // Delete cookies button
            let deleteCookiesButton = document.createElement("button");
            deleteCookiesButton.textContent = "Delete Cookies";
            deleteCookiesButton.style.margin = "5px";

            // Create a submenu
            let submenu = document.createElement("div");
            submenu.style.backgroundColor = "white";
            submenu.style.color = "black";
            submenu.style.margin = "20px";
            submenu.style.padding = "10px";
            submenu.style.border = "1px solid black";
            submenu.textContent = "Loot Natars";
            submenu.appendChild(playButton);
            submenu.appendChild(pauseButton);
            submenu.appendChild(resetButton);
            submenu.appendChild(deleteCookiesButton);

            // Append submenu to the body
            document.body.appendChild(submenu);

            let isPlaying = false;
            let currentIndex = 0;
            let interval;

            playButton.addEventListener("click", function () {
                if (!isPlaying) {
                    isPlaying = true;
                    interval = setInterval(function () {
                        visitUrlsSequentially(allUrls, currentIndex);
                    }, max_delai);
                }
            });

            pauseButton.addEventListener("click", function () {
                isPlaying = false;
                clearInterval(interval);
            });

            resetButton.addEventListener("click", function () {
                currentIndex = 0;
                isPlaying = false;
                clearInterval(interval);
            });

            deleteCookiesButton.addEventListener("click", function () {
                currentIndex = 0;
                isPlaying = false;
                clearInterval(interval);
                localStorage.removeItem("visitedUrlsIndex");
            });

            let storedIndex = localStorage.getItem("visitedUrlsIndex");
            if (storedIndex !== null) {
                currentIndex = parseInt(storedIndex);
            }
        })
        .catch(error => {
            console.error('Erreur lors de la récupération de la page :', error);
        });




};

main();