function cleverLily(input){

let lilyAge = Number(input[0]);
let washingMachinePrice = Number(input[1]);
let pricePerToy = Number(input[2]);

let totalMoneySaved = 0;
let moneySaved = 10;

for(let i = 1; i <= lilyAge; i++){
    if(i % 2 === 0){
        totalMoneySaved += moneySaved;
        totalMoneySaved -= 1;
        moneySaved += 10;
    } else{
        totalMoneySaved += pricePerToy
    }
}

if(totalMoneySaved >= washingMachinePrice){
    let moneyLeft = totalMoneySaved - washingMachinePrice;
    console.log(`Yes! ${moneyLeft.toFixed(2)}`);
} else{
    let moneyNeeded = washingMachinePrice - totalMoneySaved;
    console.log(`No! ${moneyNeeded}`);
}
}

cleverLily(["10",
            "170.00",
            "6"])
