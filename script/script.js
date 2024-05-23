document.addEventListener("DOMContentLoaded", function() {
    // Fonction pour inclure un fichier HTML et exécuter une callback après l'inclusion
    function includeHTML(elementId, filePath, callback) {
        fetch(filePath)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.text();
            })
            .then(data => {
                document.getElementById(elementId).innerHTML = data;
                if (callback) callback(); // Exécuter la callback après l'inclusion
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
            });
    }

    // Charger la barre de navigation et attacher l'événement au hamburger après le chargement
    includeHTML('navbar', 'include/navbar.html', function() {
        const hamburger = document.querySelector(".hamburger");
        if (hamburger) {
            hamburger.onclick = function() {
                const navBar = document.querySelector(".nav-bar");
                if (navBar) {
                    navBar.classList.toggle("active");
                }
            };
        }
    });

    // Charger le pied de page
    includeHTML('footer', 'include/footer.html');
});