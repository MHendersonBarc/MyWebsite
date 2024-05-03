const navBar = document.querySelector('#navBar');
const headAndNav = document.querySelector('#headAndNav');
let missCounter = 0;

function randomMessage(){
    let randomNum = Math.floor(Math.random() * 6);
    if (randomNum == 0){
        return 'Try Harder!';
    }
    else if (randomNum == 1){
        return 'Ooooo so close...';
    }
    else if (randomNum == 2){
        return 'Now that one was terrible.';
    }
    else if (randomNum == 3){
        return 'Are you even trying?';
    }
    else if (randomNum == 4){
        return 'I BELIEVE IN YOU';
    }
    else if (randomNum == 5){
        return 'HOW?!';
    }
}

headAndNav.addEventListener('click', function(){
    missCounter ++;
    document.getElementById('missCounter').innerHTML = 'You have missed the buttons: ' + missCounter + ' times';
    document.getElementById('randomMessage').innerHTML = randomMessage();
})