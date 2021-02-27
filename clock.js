const secondHand = document.querySelector(".second-hand")
const minuteHand = document.querySelector('.min-hand')
const hourHand = document.querySelector('.hour-hand')


function setDate() {
    let now = new Date();
    let seconds = now.getSeconds();
    let minutes = now.getMinutes();
    let hours = now.getHours();
    let secondsDegrees = ((seconds / 60) * 360) + 90;
    let minuteDegree = ((minutes / 60) * 360 ) + 90;
    let hourDegree = ((hours / 12) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    minuteHand.style.transform = `rotate(${minuteDegree}deg)`;
    hourHand.style.transform = `rotate(${hourDegree}deg)`;


}

setInterval(setDate, 1000 );