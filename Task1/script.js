// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.getElementById("navbar");

    // Listen for the scroll event
    window.addEventListener("scroll", function () {
        // Check if the page is scrolled down more than 50 pixels
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled"); // Appends the active styling class
        } else {
            navbar.classList.remove("scrolled"); // Reverts to transparent state
        }
    });
});