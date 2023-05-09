function fruitShop(input) {
    let frut = input[0];
    let day = input[1];
    let qty = Number(input[2]);
  
if (day === "Sunday" || day === "Saturday") {
    switch (frut) {
        case "banana" :     
            console.log((qty*2.7).toFixed(2));
                break;
        case "apple" :
            console.log((qty*1.25).toFixed(2));
            break;
        case "orange" :
            console.log((qty*0.9).toFixed(2));
            break;
        case "grapefruit" :
            console.log((qty*1.6).toFixed(2));
            break;
        case "kiwi" :
            console.log((qty*3).toFixed(2));
            break;
        case "pineapple" :
            console.log((qty*5.6).toFixed(2));
            break;
        case "grapes" :
            console.log((qty*4.2).toFixed(2));
            break;
            default : 
            console.log("error"); 
                break;
 
    }
} else if (day=== "Monday" || day === "Tuesday" || day === "Wednesday" || day === "Thursday" || day ==="Friday"){
    switch (frut) {
        case "banana" :     
            console.log((qty*2.5).toFixed(2));
                break;
        case "apple" :
            console.log((qty*1.2).toFixed(2));
            break;
        case "orange" :
            console.log((qty*0.85).toFixed(2));
            break;
        case "grapefruit" :
            console.log((qty*1.45).toFixed(2));
            break;
        case "kiwi" :
            console.log((qty*2.7).toFixed(2));
            break;
        case "pineapple" :
            console.log((qty*5.5).toFixed(2));
            break;
        case "grapes" :
            console.log((qty*3.85).toFixed(2));
            break;
            default : 
                console.log("error"); 
                    break;
    }
} else {
    console.log ("error");
}
}
fruitShop(["apple", "Workday", "2"])