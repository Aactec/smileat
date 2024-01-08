const Menu = document.getElementById("menu");
function openNav() {
    Menu.style.display = 'block';
}
function closeNav() {
    Menu.style.display = 'none';
}

const Contact = document.getElementById("contact");
function openPopup() {
    Contact.classList.add("open-popup");
    document.body.style.overflowY = 'hidden';
}
function closePopup() {
    Contact.classList.remove("open-popup");
    document.body.style.overflowY = 'scroll';
}