function logistic(input){

    let cargoCount = Number(input[0]);
    let index = 1;
    let cargoTone = Number(input[index]);
    index++;
    let pricePerToneBus = 200;
    let pricePerToneTruck = 175;
    let pricePerToneTrain = 120;
    let busTone = 0;
    let truckTone = 0
    let trainTone = 0;

    for(let i = 1; i <= cargoCount; i++){
        if(cargoTone <= 3){
            busTone += cargoTone;
        } else if(cargoTone <= 11){
            truckTone += cargoTone;
        } else{
            trainTone += cargoTone
        }
    cargoTone = Number(input[index]);
    index++;
    }
    //Вашата задача е да изчислите средната цена на тон превозен товар, както и процента на тоновете 
    //превозвани с всяко превозно средство, спрямо общото тегло(в тонове) на всички товари.
    let totalTone = busTone + truckTone + trainTone;
    let averagePrice = (busTone * pricePerToneBus + truckTone * pricePerToneTruck + trainTone * pricePerToneTrain) / totalTone;
    let busPercent = busTone / totalTone * 100;
    let truckPercent = truckTone / totalTone * 100;
    let trainPercent = trainTone / totalTone * 100;
    console.log(averagePrice.toFixed(2));
    console.log(`${busPercent.toFixed(2)}%`);
    console.log(`${truckPercent.toFixed(2)}%`);
    console.log(`${trainPercent.toFixed(2)}%`);


/*
5
2
10
20
1
7
 */

}
logistic([
    '5',    
    '2',
    '10',
    '20',
    '1',
    '7'
    ])