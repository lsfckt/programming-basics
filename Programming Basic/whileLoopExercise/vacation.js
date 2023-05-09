function vacation(input){

    let index = 0;
    let vacationPrice = Number(input[index]);
    index++
    let moneyOnHand = Number(input[index]);
    index++

    let command = input[index]
    index++
    let commandMoney = Number(input[index])
    index++ 
    let daysFive = 0;
    let totalDay = 0;

    while(moneyOnHand < vacationPrice){
        totalDay++
        if(command === "spend"){
            moneyOnHand -= commandMoney;
            daysFive++
            if(moneyOnHand < 0){
            moneyOnHand = 0;
            }
            if(daysFive === 5){
                console.log(`You can't save the money.`);
                console.log(`${daysFive}`);
                break;
            }
        } else{
            daysFive = 0;
            moneyOnHand += commandMoney;
        }
        
        command = input[index];
        index++
        commandMoney = Number(input[index]);
        index++

    }
    if(moneyOnHand >= vacationPrice){
        console.log(`You saved the money for ${totalDay} days.`);
    }
}

vacation(["2000",
"1000",
"spend",
"1200",
"save",
"2000"])










