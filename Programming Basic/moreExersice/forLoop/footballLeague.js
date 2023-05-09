function footballLeague(input){

    let stadiumCapacity = Number(input[0]);
    let fansCount = Number(input[1]);
    let a = 0;
    let b = 0;
    let v = 0;
    let g = 0; 

    for(let i = 2; i <= fansCount+1; i++){
        let curSect = input[i];

        switch(curSect){
            case "A": a++; break;
            case "B": b++; break;
            case "V": v++; break;
            case "G": g++; break;
        }
    }
    let totalFans = a+b+v+g;
    console.log(`${((a/fansCount)*100).toFixed(2)}%`);
    console.log(`${((b/fansCount)*100).toFixed(2)}%`);
    console.log(`${((v/fansCount)*100).toFixed(2)}%`);
    console.log(`${((g/fansCount)*100).toFixed(2)}%`);
    console.log(`${((totalFans/stadiumCapacity)*100).toFixed(2)}%`);
}
footballLeague([
    '76',
    '10',
    'A',
    'V',
    'V',
    'V',
    'G',
    'B',
    'A',
    'V',
    'B',
    'B'
    ])