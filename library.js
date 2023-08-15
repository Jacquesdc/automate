(function() {
    window.myLibrary = {
        extractedPart: function() {
            const currentUrl = window.location.href;

            var myurl = window.location.href;
            var regex = /^https:\/\/([^\/]+)\/.*$/;
            var match = myurl.match(regex);
            if (match && match.length >= 2) {
                var extractedPart = match[1];
            }

            return extractedPart;
        },
        // ... d'autres fonctions que vous voulez ajouter
    };
})();