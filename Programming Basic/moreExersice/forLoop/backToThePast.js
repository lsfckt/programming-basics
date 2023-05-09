function backToThePast(input){

    let inheritedMoney = Number(input[0]);
    let yearToLive = Number(input[1]);
    let ivanchoAges = 18;
    let moneySpend = 0;
    
    for(let i = 1800; i <= yearToLive; i++){
        if(i % 2 === 0){
            moneySpend += 12000;
        } else{
            moneySpend += 12000 + 50 * ivanchoAges;
        }
        ivanchoAges++
    }
    if(moneySpend <= inheritedMoney){
        let moneyLeft = inheritedMoney - moneySpend;
        console.log(`Yes! He will live a carefree life and will have ${moneyLeft.toFixed(2)} dollars left.`);
    } else{
        let moneyNeeded = moneySpend - inheritedMoney;
        console.log(`He will need ${moneyNeeded.toFixed(2)} dollars to survive.`);
    }
}
backToThePast(["100000.15", "1808"])