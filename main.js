const menu = document.getElementById('menu');
const close = document.getElementById('close');
const navMenu = document.getElementById('nav-menu');
const backDrop = document.querySelector('.backdrop');
const body = document.querySelector('body');
const links = document.querySelectorAll('.nav-link');
const control = document.querySelectorAll('.control span');
const cards = document.querySelectorAll('.card');
const form = document.querySelector('form');
const error = document.querySelector('.error');


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


// Email Validation
const pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

form.email.addEventListener('keyup',(e)=>{
    if(pattern.test(e.target.value)){
        error.classList.add('hidden');
        form.email.style.color = "var(--blue)";
        form.email.style.outline = "none";
        console.log(true);
    } else if (e.target.value === ""){
        form.email.style.outline = "none"
        error.classList.add('hidden');
    } else {
        form.email.style.outline = "1px solid var(--brightRed)";
        error.classList.remove('hidden');
        form.email.style.color = "var(--brightRed)";
    }
})