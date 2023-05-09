function trip(input) {
    
    let budget = Number(input[0]);
    let season = input[1];
    let holidayType = ""
    let destination = ""
    let price = 0;
    
   if(budget <= 100){
    destination = "Bulgaria"
   } else if(budget <= 1000){
    destination = "Balkans";
   } else {
    destination = "Europe"
   }

   if(season == "summer"){
    holidayType = "Camp";
   }else {
    holidayType = "Hotel";
   }

if(destination == "Bulgaria"){
    if(season == "summer"){
        price = budget * 0.30;
    }else{
        price = budget * 0.70;
    }
}else if(destination == "Balkans"){
    if(season == "summer"){
        price = budget * 0.40;
    }else{
        price = budget * 0.80;
    }
} else{
    price = budget * 0.90;
    holidayType = "Hotel";
}
 
console.log(`Somewhere in ${destination}`);
console.log(`${holidayType} - ${price.toFixed(2)}`);

}
trip(["50", "summer"])