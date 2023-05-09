function coins(input){
    let resto = Number(input[0]);
    resto = Math.floor(resto*100);
    let coins = 0;

    while(resto){
        if(resto >= 200){
            resto -= 200
        } else if(resto >= 100){
            resto -= 100
        } else if(resto >= 50){
            resto -= 50
        } else if(resto >= 20){
            resto -= 20
        } else if(resto >= 10){
            resto -= 10
        } else if(resto >= 5){
            resto -= 5
        } else if(resto >= 2){
            resto -= 2
        } else if(resto >= 1){
            resto -= 1
        }
        coins++
    }
console.log(coins);
    }

coins(["2.73"])