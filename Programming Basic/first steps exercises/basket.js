// • Баскетболни кецове – цената им е 40% по-малка от таксата за една година
// • Баскетболен екип – цената му е 20% по-евтина от тази на кецовете
// • Баскетболна топка – цената ѝ е 1 / 4 от цената на баскетболния екип
// • Баскетболни аксесоари – цената им е 1 / 5 от цената на баскетболната топка

function basketEquipment(input){

let annualTax = Number(input[0]);

let basketSneakers = annualTax * 0.6;
let basketOutfit = basketSneakers * 0.8;
let basketBall = basketOutfit / 4;
let basketAcsesoaries = basketBall / 5;
let totalTax = basketSneakers + basketOutfit + basketBall + basketAcsesoaries + annualTax;

console.log(totalTax)

}
basketEquipment(["365"])