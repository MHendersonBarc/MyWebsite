const navBar = document.querySelector('#navBar');
const headAndNav = document.querySelector('#headAndNav');
let missCounter = 0;

headAndNav.addEventListener('click', function(){
    missCounter ++;
    document.getElementById('missCounter').innerHTML = 'You have missed the buttons: ' + missCounter + ' times';
})