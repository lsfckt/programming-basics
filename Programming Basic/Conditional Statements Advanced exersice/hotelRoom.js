function hotelRoom(input){

let month = input[0];
let numbersOfNights = Number(input[1]);
let studioPerNight = 0;
let apartmentPerNight = 0;

switch(month){
    case "May":
    case "October": 
    studioPerNight = 50;
    apartmentPerNight = 65;
    if(numbersOfNights > 7 && numbersOfNights <= 14){
        studioPerNight *= 0.95;
    }
    if(numbersOfNights > 14){
        studioPerNight *= 0.70;
        apartmentPerNight *= 0.90;
    } break;

    case "June":
    case "September":
    studioPerNight = 75.20;
    apartmentPerNight = 68.70;
    if(numbersOfNights > 14){
        studioPerNight *= 0.80;
        apartmentPerNight *= 0.90;
    } break;
    case "July":
    case "August":
    studioPerNight = 76;
    apartmentPerNight = 77;
    if(numbersOfNights > 14){
        apartmentPerNight *= 0.90;
    } break;
}

let apartmentPrice = apartmentPerNight * numbersOfNights;
let studioPrice = studioPerNight * numbersOfNights;

console.log(`Apartment: ${apartmentPrice.toFixed(2)} lv.`);
console.log(`Studio: ${studioPrice.toFixed(2)} lv.`);

}

hotelRoom(["June",
"14"])




