const menu = document.querySelector(".menu-burger-container")

const active = () => menu.classList.toggle('active')

menu.addEventListener('click', active)