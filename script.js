document.querySelector(".cross").style.display = 'none';

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
const dropdownToggle = document.querySelector('.dropdown-toggle');

// Toggle dropdown content when clicking on the dropdown toggle
dropdownToggle.addEventListener('click', () => {
    const dropdownContent = document.querySelector('.dropdown-content');
    if (dropdownContent.style.visibility === 'visible') {
        dropdownContent.style.visibility = 'hidden';
        dropdownContent.style.opacity = 0;
    } else {
        dropdownContent.style.visibility = 'visible';
        dropdownContent.style.opacity = 1;
    }
});
