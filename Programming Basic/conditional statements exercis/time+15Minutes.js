function time15(input){

let hours = Number(input[0]);
let minutes = Number(input[1]);
let totalMinutes = hours * 60 + minutes + 15;
let finalHours = Math.floor(totalMinutes / 60);
let finalMinutes = totalMinutes % 60; 

if (finalHours === 24){
        finalHours = 0;
}

if (finalMinutes < 10){
    time = (`${finalHours}:0${finalMinutes}`)
} else{
    time =(`${finalHours}:${finalMinutes}`)
}
console.log(time);
}
time15(["0", "01"])