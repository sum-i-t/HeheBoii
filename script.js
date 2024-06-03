// Show the menu when mouse is over the hamburger icon
document.querySelector(".hamburger").addEventListener("mouseover", () => {
    document.querySelector(".menu").classList.remove("menugo");
    document.querySelector(".ham").style.display = 'none';
});

// Hide the menu when mouse leaves the menu
document.querySelector(".menu").addEventListener("mouseleave", () => {
    document.querySelector(".menu").classList.add("menugo");
    document.querySelector(".ham").style.display = 'inline';
});

// Dropdown functionality for members
let dropdown = document.querySelector(".dropdown-boiss");
let dropdownContent = document.querySelector(".boiis");

// Show the dropdown content when mouse enters the button
dropdown.addEventListener("mouseenter", () => {
    dropdownContent.classList.add("show");
});

// Hide the dropdown content when mouse leaves the dropdown area
dropdown.addEventListener("mouseleave", () => {
    dropdownContent.classList.remove("show");
});

dropdownContent.addEventListener("mouseleave", () => {
    dropdownContent.classList.remove("show");
});

dropdownContent.addEventListener("mouseenter", () => {
    dropdownContent.classList.add("show");
});
