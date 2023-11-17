/*
*   Author: Travolgi
*   Author URI: https://travolgi.it
*   Date: 01/2020
*/

// preload
(() => {
    if (window.addEventListener) {
        window.addEventListener('load', () => document.querySelector('#preload').style.display = 'none', false);
    } else {
        window.attachEvent('onload', () => document.querySelector('#preload').style.display = 'none');
    }
})();

// navbar
if (screen.width <= 780) {
    let myNavbar = document.querySelector('#navbar').getElementsByTagName('a');
    for(let i = 0; i < myNavbar.length; i++) {
        myNavbar[i].addEventListener('click', () => {
            var collapseElementList = [].slice.call(document.querySelectorAll('.collapse.navbar-collapse'));
            var collapseList = collapseElementList.map(collapseEl => new bootstrap.Collapse(collapseEl));
        });
    }
}

// goTop & scroolDisplay
const toTop = document.querySelector('#toTop');
const waChat = document.querySelector('#wachat');
toTop.addEventListener('click', () => {
    document.body.scrollTop = 0; // for Safari
    document.documentElement.scrollTop = 0;
});
window.onscroll = () => {    
    (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) ? toTop.style.display = 'block' : toTop.style.display = 'none';
    if(waChat){
        (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) ? waChat.style.display = 'block' : waChat.style.display = 'none';
    }
}