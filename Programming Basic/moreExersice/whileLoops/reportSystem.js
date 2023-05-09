function reportSystem(input){

    let index = 0;
    let sumNeeded = Number(input[index]);
    index++;

    let command = input[index];
    index++;

    let cashPay = 0;
    let cardPay = 0;
    let sumEarn = 0;
    let sumCash = 0;
    let sumCard = 0;
    let count = 0;

    while(command != 'End'){
        count++
        let curPrice = Number(command)

        if (count % 2 != 0) {
            if (curPrice > 100) {
                console.log("Error in transaction!");
            } else {
                cashPay++;
                sumCash += curPrice;
                sumEarn += curPrice;
                console.log("Product sold!");
            }
        } else {
            if (curPrice < 10){
                console.log("Error in transaction!");
            } else {
                cardPay++;
                sumCard += curPrice;
                sumEarn += curPrice;
                console.log("Product sold!");
            }
        }

        command = input[index];
        index++;

        if (sumEarn >= sumNeeded) {
            let avrCash = sumCash/cashPay;
            let avrCard = sumCard/cardPay;
            console.log(`Average CS: ${avrCash.toFixed(2)}`);
            console.log(`Average CC: ${avrCard.toFixed(2)}`);
            return;
        }
    }

    if(command === 'End'){
        console.log("Failed to collect required money for charity.");
    }

}
reportSystem([
    '600',
    '86',
    '150',
    '98',
    '227',
    'End'

])