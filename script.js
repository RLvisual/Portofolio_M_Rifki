document.addEventListener("DOMContentLoaded", () => {

console.log("Portfolio loaded successfully!");

});

document.addEventListener("DOMContentLoaded", () => {

    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }

    });

});