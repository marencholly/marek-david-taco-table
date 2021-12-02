// first we find the elements we need on the page
const toggleButton = document.querySelector(`.toggle-button`);
const nav = document.querySelector(`nav`);

nav.classList.remove(`visible`);

function toggleMenu() {
    nav.classList.toggle(`visible`);

    // if(nav.classList.contains(`visible`)){
    //     nav.classList.remove(`visible`);
    // } else {
    //     nav.classList.add(`visible`);
    // }
}

toggleButton.addEventListener(`click`, toggleMenu);