function dishwasher(input){

    let index = 0;
    let detergentCount = Number(input[index]);
    index++;

    let command = input[index];
    index++;

    let detergentAvailable = detergentCount * 750;
    let plateCount = 0;
    let potCount = 0;
    let detergentUsed = 0;
    let count = 0;

    while(command != "End"){
        count++;
        let curDishes = Number(command)

        if(detergentAvailable < detergentUsed){
            let detergentNeeded = detergentUsed - detergentAvailable;
            console.log(`Not enough detergent, ${detergentNeeded} ml. more necessary!`);
            break; 
           }

        if(count % 3 === 0){
           detergentUsed += curDishes * 15;
           potCount += curDishes
        } else{
            detergentUsed += curDishes * 5;
            plateCount += curDishes;
        }
        
        command = input[index];
        index++;
       }

       if(command === "End"){
        console.log("Detergent was enough!");
        console.log(`${plateCount} dishes and ${potCount} pots were washed.`);
        let detergentLeft = detergentAvailable - detergentUsed
        console.log(`Leftover detergent ${detergentLeft} ml.`);
       }

    }
dishwasher([
    '1',
    '10',
    '15',
    '10',
    '12',
    '13',
    '30'
    
    ])