function fuelTank2(input){

    let fuelType = input[0];
    let fuelQuantity = Number(input[1]);
    let card = input[2];

    let gasolinePerLiter = 2.22;
    let dieselPerLiter = 2.33;
    let gasPerLiter = 0.93; 
    let totalPrice = 0;

    switch(fuelType){
        case "Gas":
            switch(card){
                case "Yes": 
                gasPerLiter -= 0.08;
                totalPrice = gasPerLiter * fuelQuantity; break;
                case "No":
                totalPrice = gasPerLiter * fuelQuantity; break;
            } break;
        case "Diesel":
            switch(card){
                case "Yes": 
                dieselPerLiter -= 0.12;
                totalPrice = dieselPerLiter * fuelQuantity; break;
                case "No":
                    totalPrice = dieselPerLiter * fuelQuantity; break;
            } break;
        case "Gasoline":
            switch(card){
                case "Yes": 
                gasolinePerLiter -= 0.18;
                totalPrice = gasolinePerLiter * fuelQuantity; break;
                case "No":
                    totalPrice = gasolinePerLiter * fuelQuantity; break;
            } break;
    }

    if(fuelQuantity > 20 && fuelQuantity <= 25){
        totalPrice *= 0.92;
    } else if(fuelQuantity > 25){
        totalPrice *= 0.90;
    }
    console.log(`${totalPrice.toFixed(2)} lv.`);
}
fuelTank2([
    "Diesel",
    "19",
    "No"
    ])