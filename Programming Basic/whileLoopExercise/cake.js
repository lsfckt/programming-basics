function cake(input){

    let index = 0;
    let width = Number(input[index]);
    index++
    let length = Number(input[index]);
    index++
    let cakeCount = width * length;
    let command = input[index];
    index++
    while(command != "STOP"){
        cakeCount -= Number(command);
        if(cakeCount <= 0){
            console.log(`No more cake left! You need ${Math.abs(cakeCount)} pieces more.`);
            break;
        }
        
        command = input[index];
        index++
    }
    if(command === "STOP"){
        console.log(`${cakeCount} pieces are left.`);
    }   
}

cake(["10",
"2",
"2",
"4",
"6",
"STOP"])
