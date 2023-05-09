
function shopping(input){

let budget = Number(input[0]);
let videoCards = Number(input[1]);
let processors = Number(input[2]);
let ram = Number(input[3]);

let videoCardsPrice = videoCards * 250;
let processorsPrice = (0.35 * videoCardsPrice) * processors;
let ramPrice = (0.10 * videoCardsPrice) * ram
let totalPrice = videoCardsPrice+processorsPrice+ramPrice;
let discount = 0;

if (videoCards > processors){
    discount = (0.15 * totalPrice);
}
let finalPrice = totalPrice-discount;

if (budget >= finalPrice){
    let residual = budget - finalPrice
    console.log(`You have ${residual.toFixed(2)} leva left!`)
} else {
    let sumNeeded = finalPrice - budget;
    console.log(`Not enough money! You need ${sumNeeded.toFixed(2)} leva more!`);
}

}
shopping(["920.45",
"3",
"1",
"1"])



