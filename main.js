const menu = document.getElementById('menu');
const close = document.getElementById('close');
const navMenu = document.getElementById('nav-menu');
const backDrop = document.querySelector('.backdrop');
const body = document.querySelector('body');
const links = document.querySelectorAll('.nav-link');
const form = document.querySelector('form');
const error = document.querySelector('.error');


menu.addEventListener('click',() => {
    close.style.display = "block";
    navMenu.style.display = "block";
    backDrop.style.display = "block";
    body.style.position = "fixed";
    menu.style.display = "none";
});

close.addEventListener('click',() => {
    menu.style.display = "block";
    navMenu.style.display = "none";
    backDrop.style.display = "none";
    body.style.position = "relative";
    close.style.display = "none";
});

links.forEach(link => {
    link.addEventListener('click', () => {
        menu.style.display = "block";
        navMenu.style.display = "none";
        backDrop.style.display = "none";
        body.style.position = "relative";
        close.style.display = "none";
    });
});


// Email Validation
const pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

form.email.addEventListener('keyup',(e)=>{
    if(pattern.test(e.target.value)){
        error.style.display = "none";
        form.email.style.color = "var(--blue)";
        form.email.style.outline = "none";
        console.log(true);
    } else if (e.target.value === ""){
        form.email.style.outline = "none"
        error.style.display = "none";
    } else {
        form.email.style.outline = "1px solid var(--brightRed)";
        error.style.display = "block";
        form.email.style.color = "var(--brightRed)";
    }
})