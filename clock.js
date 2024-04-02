const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.minute-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate(){
    const now = new Date();
    const seconds =  now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360)+90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    
    const minute = now.getMinutes();
    const minuteDegress = ((minute / 60) * 360)+90;
    minuteHand.style.transform = `rotate(${minuteDegress}deg)`;
    
    const hour = now.getHours();
    const hourDegress = ((hour / 24) * 360)+90;
    hourHand.style.transform = `rotate(${hourDegress}deg)`;

}
setInterval(setDate, 1000);