const menu = document.getElementById('menu');
const close = document.getElementById('close');
const navMenu = document.getElementById('nav-menu');
const backDrop = document.querySelector('.backdrop');
const body = document.querySelector('body');
const links = document.querySelectorAll('.nav-link')

menu.addEventListener('click',() => {
    close.classList.remove('hidden');
    navMenu.classList.remove('hidden');
    backDrop.classList.remove('hidden');
    body.style.position = "fixed";
    menu.classList.add('hidden');
});

close.addEventListener('click',() => {
    menu.classList.remove('hidden');
    navMenu.classList.add('hidden');
    backDrop.classList.add('hidden');
    body.style.position = "relative";
    close.classList.add('hidden');
});

links.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('hidden');
        navMenu.classList.add('hidden');
        backDrop.classList.add('hidden');
        body.style.position = "relative";
        close.classList.add('hidden');
    });
});