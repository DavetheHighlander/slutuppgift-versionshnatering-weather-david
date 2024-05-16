function openSidebar() {
    document.getElementById("sidebar").style.width = "250px";
}

function closeSidebar() {
    document.getElementById("sidebar").style.width = "0";
}

document.addEventListener("DOMContentLoaded", function() {
    loadPage("home.html", "page-container");
    loadScript("weather.js");

    // Attach event listeners after DOM content is fully loaded
    document.getElementById("contactLink").addEventListener("click", function(event) {
        event.preventDefault();
        loadPage("contact.html", "page-container");
    });

    document.getElementById("homeLink").addEventListener("click", function(event) {
        event.preventDefault();
        loadPage("home.html", "page-container");
        loadScript("weather.js");
    });

    document.getElementById("contactLinkMobile").addEventListener("click", function(event) {
        event.preventDefault();
        loadPage("contact.html", "page-container");
        closeSidebar();
    });

    document.getElementById("homeLinkMobile").addEventListener("click", function(event) {
        event.preventDefault();
        loadPage("home.html", "page-container");
        loadScript("weather.js");
        closeSidebar();
    });
});

function loadPage(page, container) {
    // Use AJAX or fetch to load the content of the specified page
    // Example using fetch:
    fetch(page)
        .then(response => response.text())
        .then(html => {
            // Replace the content of the container with the loaded page content
            document.getElementById(container).innerHTML = html;
        })
        .catch(error => console.error("Error loading page:", error));
}

function loadScript(scriptUrl) {
    const script = document.createElement('script');
    script.src = scriptUrl;
    document.head.appendChild(script);
}
