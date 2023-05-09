function godzillaVsKong(input){

    let movieBudget = Number(input[0]);
    let extrasCount = Number(input[1]);
    let clothesPrice = Number(input[2]);
    
    let decor = movieBudget/10;
    let totalClothesPrice = extrasCount * clothesPrice;
    let discount = 0;
    if(extrasCount >= 150){
        discount = totalClothesPrice / 10;
    }
    let finalClothes = totalClothesPrice - discount;
    let totalSum = decor + finalClothes;
    if (totalSum > movieBudget){
        let moneyLeft = (totalSum - movieBudget).toFixed(2);
        console.log("Not enough money!");
        console.log(`Wingard needs ${moneyLeft} leva more.`)
    } else if (totalSum<=movieBudget){
        let moneyLeft = (movieBudget-totalSum).toFixed(2);
        console.log("Action!");
        console.log(`Wingard starts filming with ${moneyLeft} leva left.`);
    }
    
    
    }
    godzillaVsKong(["15437.62",

    "186",
    
    "57.99"])