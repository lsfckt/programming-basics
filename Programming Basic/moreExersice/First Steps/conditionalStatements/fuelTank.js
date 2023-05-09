function fuelTank(input){

    let fuel = input[0];
    let curLiters = Number(input[1]);
    
    if(fuel != "Diesel" && fuel != "Gasoline" && fuel != "Gas"){
        console.log("Invalid fuel!");
        return;
    }

    if(curLiters >= 25){
        console.log(`You have enough ${fuel.toLowerCase()}.`);
    } else{
        console.log(`Fill your tank with ${fuel.toLowerCase()}!`);
    }

}
fuelTank([
    "Diesel",
    "10"
    ])