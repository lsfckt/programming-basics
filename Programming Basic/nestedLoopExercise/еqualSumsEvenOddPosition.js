function equalSumsEvenOddPosition(input){

    let firstNum = Number(input[0]);
    let secondNum = Number(input[1]);
    let printNum = "";
    

    for(let nextNum = firstNum; nextNum <= secondNum; nextNum++){
        let curNum = nextNum + "";
        let oddSum = 0;
        let evenSum = 0;
        
        for(let index = 0; index < curNum.length; index++){
            let curDigit = Number(curNum[index])
            let position = index + 1;
            
            if(position % 2 === 0){
                evenSum += curDigit;               
            } else{
                oddSum += curDigit
            } 
        }
        if(evenSum === oddSum){
            printNum += curNum + " ";
        } 
    }
    console.log(printNum);
}
equalSumsEvenOddPosition(["123456", "124000"])

