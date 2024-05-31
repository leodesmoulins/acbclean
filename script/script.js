document.addEventListener("DOMContentLoaded", function() {
    
    function includeHTML(elementId, filePath, callback) {
        fetch(filePath)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch file: ' + filePath);
                }
                return response.text();
            })
            .then(data => {
                const targetElement = document.getElementById(elementId);
                if (targetElement) {
                    targetElement.innerHTML = data;
                    if (callback) callback();
                } else {
                    throw new Error('Target element not found: ' + elementId);
                }
            })
            .catch(error => {
                console.error('Error loading HTML file:', error.message);
            });
    }

    
    includeHTML('navbar', '../include/navbar.html', function() {
        const hamburger = document.querySelector(".hamburger");
        if (hamburger) {
            hamburger.onclick = function() {
                const navBar = document.querySelector(".nav-bar");
                if (navBar) {
                    navBar.classList.toggle("active");
                }
            };
        }
        const links = document.querySelectorAll('.nav-link');
        const currentPath = window.location.pathname;

        links.forEach(link => {
            if (link.href.includes(currentPath)) {
                link.classList.add('active');
            }
        });
    });

    
    includeHTML('footer', '../include/footer.html');
});
