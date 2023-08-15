window.fetchOasisData = function(dValue) {
    const DISTANCE_THRESHOLD_MIN = 0;
    const DISTANCE_THRESHOLD_MAX = 30;
    const MapSize = 400;
    const stepSize = 31;
    const MAX_CONCURRENT_REQUESTS = 20;

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

    function fetchTiles(x, y) {
        return new Promise((resolve, reject) => {
            const data = {
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

                const relevantTiles = data.tiles.filter(tile => tile.title && tile.title.includes("{k.bt}"));
                const relevantOasis = [];

                relevantTiles.forEach(tile => {
                    const distance = computeDistance(originX, originY, parseInt(tile.position.x), parseInt(tile.position.y));
                    if (distance >= DISTANCE_THRESHOLD_MIN && distance <= DISTANCE_THRESHOLD_MAX) {
                        const kid = computeKID(parseInt(tile.position.x), parseInt(tile.position.y));
                        relevantOasis.push(kid);
                    }
                });

                resolve(relevantOasis);
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

    async function fetchClosestOasis(originX, originY) {
        const minX = Math.max(-MapSize, originX - DISTANCE_THRESHOLD_MAX);
        const maxX = Math.min(MapSize, originX + DISTANCE_THRESHOLD_MAX);
        const minY = Math.max(-MapSize, originY - DISTANCE_THRESHOLD_MAX);
        const maxY = Math.min(MapSize, originY + DISTANCE_THRESHOLD_MAX);

        const tasks = [];

        for (let i = minX; i <= maxX; i += stepSize) {
            for (let j = minY; j <= maxY; j += stepSize) {
                tasks.push({ promise: fetchTiles(i, j), x: i, y: j });
            }
        }

        const oasisPromises = [];
        const oasisResults = [];

        for (let i = 0; i < tasks.length; i += MAX_CONCURRENT_REQUESTS) {
            const chunk = tasks.slice(i, i + MAX_CONCURRENT_REQUESTS);
            const chunkPromises = chunk.map(task => task.promise);

            await Promise.all(chunkPromises.map(promise => promise.then(oasisArray => oasisResults.push(...oasisArray))));

            await new Promise(r => setTimeout(r, 10));
        }

        return oasisResults;
    }

    const originX = convertZToX(dValue);
    const originY = convertZToY(dValue);

    return fetchClosestOasis(originX, originY);
};
