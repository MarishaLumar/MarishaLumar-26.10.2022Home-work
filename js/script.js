

const burgerMenu = document.querySelector('.check'); 
const body = document.querySelector('.body'); 
 
burgerMenu.addEventListener('change', function(event) { 
    if (event.target.checked) { 
        body.classList.add('lock') 
    } 
    else { 
        body.classList.remove('lock') 
    } 
})







