function averageNumber(input){

    
    let numbersCount = Number(input[0]);
    let sum = 0;

    for(let i = 1; i <= numbersCount; i++){
        let curNumber = Number(input[i]);
        sum += curNumber;
    }

    let avr = sum / numbersCount;   
    console.log(avr.toFixed(2));

}
averageNumber([
    '4',
    '3',
    '2',
    '4',
    '2'
    ])