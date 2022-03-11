const menu = document.getElementById('menu');
const close = document.getElementById('close');
const navMenu = document.getElementById('nav-menu');
const backDrop = document.querySelector('.backdrop');
const body = document.querySelector('body');
const links = document.querySelectorAll('.nav-link');
const control = document.querySelectorAll('.control span');
const cards = document.querySelectorAll('.card');

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

control.forEach((controlBtn,index) =>{
    controlBtn.addEventListener('click', () => {
        control.forEach(controlBtn => {controlBtn.classList.remove('activeBtn');});
        controlBtn.classList.add('activeBtn');

        cards.forEach(card => card.classList.remove('active'));
        cards[index].classList.add("active");
    });
});