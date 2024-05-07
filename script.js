// Nav

let openHam = document.getElementById('openHam');
let closeHam = document.getElementById('closeHam');
let navigationItems = document.getElementById('navigation-items');

const hamburgerEvent = (navigation, close, open) => {
    navigationItems.style.display = navigation;
    closeHam.style.display = close;
    openHam.style.display = open;
};

openHam.addEventListener('click', () => hamburgerEvent("flex", "block", "none"));
closeHam.addEventListener('click', () => hamburgerEvent("none", "none", "block"));






