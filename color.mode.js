document.addEventListener('DOMContentLoaded', function () {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;

    darkModeToggle.addEventListener('change', function () {
        body.classList.toggle('dark-mode', darkModeToggle.checked);
        document.getElementById("sidebar").classList.toggle("dark-mode");
        document.getElementById("desktopNav").classList.toggle("dark-mode");

    });
});
