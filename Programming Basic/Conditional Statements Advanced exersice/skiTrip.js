function skiTrip(input){
let daysCount = Number(input[0]);
let roomType = input[1];
let grade = input[2];
let pricePerNight = 0;

switch(roomType){
    case "room for one person": pricePerNight = 18;
    if (grade === "positive"){
        pricePerNight *= 1.25;
    } else{
        pricePerNight *= 0.90;
    } break;
    case "apartment": pricePerNight = 25;
    if (daysCount < 10){
        pricePerNight *= 0.70;
    } else if(daysCount <= 15){
        pricePerNight *= 0.65;
    } else {
        pricePerNight *= 0.50;
    }
    if(grade === "positive"){
        pricePerNight *= 1.25;
    } else{
        pricePerNight *= 0.90;
    } break;
    case "president apartment": pricePerNight = 35;
    if (daysCount < 10){
        pricePerNight *= 0.90;
    } else if(daysCount <= 15){
        pricePerNight *= 0.85;
    } else {
        pricePerNight *= 0.80;
    }
    if(grade === "positive"){
        pricePerNight *= 1.25;
    } else{
        pricePerNight *= 0.90;
    } break;
}

let price = (daysCount -1) * pricePerNight;

console.log(price.toFixed(2));

}

skiTrip(["2",
"apartment",
"positive"])



