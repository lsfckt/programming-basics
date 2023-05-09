    function oscars(input){

    let actorName = input[0];
    let academyPoints = Number(input[1]);
    let juryCount = Number(input[2]);

    let points = academyPoints;
    let isNomination = false;

    for (let i = 3; i < input.length; i += 2){
        let name = input[i].length;
        let juryPoints = Number(input[i+1]);

        points += ((name * juryPoints) / 2);
        if (points > 1250.5){
            isNomination = true;
            break;
        }
    
    }
    if(isNomination){
        console.log(`Congratulations, ${actorName} got a nominee for leading role with ${points.toFixed(1)}!`);
    }  else{
        let pointsNeeded = 1250.5 - points;
        console.log(`Sorry, ${actorName} you need ${pointsNeeded.toFixed(1)} more!`);
    }
        }




oscars(["Sandra Bullock",
"340",
"5",
"Robert De Niro",
"50",
"Julia Roberts",
"40.5",
"Daniel Day-Lewis",
"39.4",
"Nicolas Cage",
"29.9",
"Stoyanka Mutafova",
"33"])

