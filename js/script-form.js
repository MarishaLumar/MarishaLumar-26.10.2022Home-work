const button = document.querySelector('.popupBtn')
const popup = document.querySelector('.popup-wrapper')
const close = document.querySelector('svg.close')


button.addEventListener('click', clickHandler )
popup.addEventListener('click', closeHandler)

function clickHandler() {
    popup.classList.add('active')
}

function closeHandler(event) {
    if(event.target === popup || event.target === close)
    popup.classList.remove('active')  
}