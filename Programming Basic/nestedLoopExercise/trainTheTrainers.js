function trainTheTrainers(input){

    index = 0;
    let juryCount = Number(input[index]);
    index++
    let command = input[index];
    index++
    let totalGradeSum = 0;
    let presentationCount = 0;  

    while(command != "Finish"){
        let presentationName = command;
        let gradeSum = 0;

        for(let curGradeCount = 1; curGradeCount <= juryCount; curGradeCount++){
            let curGrade = Number(input[index]);
            index++
            gradeSum += curGrade;
        }
        let averageGrade = gradeSum / juryCount;
        console.log(`${presentationName} - ${averageGrade.toFixed(2)}.`);
        totalGradeSum += averageGrade;
        presentationCount++;

        command = input[index];
        index++;
    }
    let gradesAll = totalGradeSum / presentationCount;
    console.log(`Student's final assessment is ${gradesAll.toFixed(2)}.`);

}

trainTheTrainers([
    "2",
    "While-Loop",
    "6.00",
    "5.50",
    "For-Loop",
    "5.84",
    "5.66",
    "Finish"
])
