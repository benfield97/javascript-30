let keys = document.getElementsByClassName('key')

let keyArray = Array.from(keys);

let sounds = document.querySelectorAll('audio')

sounds = Array.from(sounds);


document.addEventListener('keypress', runEvent);
document.addEventListener('keydown', addClass);
document.addEventListener('keyup', removeClass);

/*
keyArray.forEach(function(key) {
    key.addEventListener('keypress', runEvent);
} )
*/



function playSound(key) {
    sounds.forEach(function(sound) {
        if (key.dataset.key == sound.dataset.key) {

            sound.currentTime = 0;
            sound.play();
            }
        });
}

function runEvent(e) {
    keyArray.forEach(function(key) {

        // find div that corresponds to key press
        if (e.key.toLowerCase() == key.id) {
            playSound(key)            
        }
    });
}

function addClass(e) {
        keyArray.forEach(function(key) {

        // find div that corresponds to key press
        if (e.key.toLowerCase() == key.id) {
            key.classList.add('playing');        
        }
    });
}

function removeClass(e) {
        keyArray.forEach(function(key) {

        // find div that corresponds to key press
        if (e.key.toLowerCase() == key.id) {
            key.classList.remove('playing');        
        }
    });
}


