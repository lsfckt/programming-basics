function matchTickets(input){

    let budget = Number(input[0]);
    let category = input[1];
    let peopleCount = Number(input[2]);
    let categoryPrice = 0;

    switch(category){
        case "VIP": categoryPrice = 499.99; break;
        case "Normal": categoryPrice = 249.99; break;
    }

    if(peopleCount <= 4){
        budget *= 0.25;
    } else if(peopleCount <= 9){
        budget *= 0.40;
    } else if(peopleCount <= 24){
        budget *= 0.50;
    } else if(peopleCount <= 49){
        budget *= 0.60
    } else{
        budget *= 0.75;
    }

    categoryPrice *= peopleCount;
    if(budget <= categoryPrice){
        let moneyLeft = categoryPrice - budget;
        console.log(`Not enough money! You need ${moneyLeft.toFixed(2)} leva.`);
    } else{
        let moneyNeeded = budget - categoryPrice;
        console.log(`Yes! You have ${moneyNeeded.toFixed(2)} leva left.`);
    }
}
matchTickets([
    "1000",
    "Normal",
    "1"	
    ])