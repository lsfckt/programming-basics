function specialNumbers(input){

    let n = Number(input[0]);
    let specialNumbersToPrint = "";

    for (let i = 1111; i <= 9999; i++){
        let curNum = "" + i;
        let isValid = true;

        for(let j = 0; j < 4; j++){
            let curDigit = Number(curNum.charAt(j));
            if(n % curDigit !== 0){
                isValid = false;
                break;
            }
        }
        if(isValid){
            specialNumbersToPrint += curNum + " ";
        }
    }
    console.log(specialNumbersToPrint);
}

specialNumbers(["3"]);