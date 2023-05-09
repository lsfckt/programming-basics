function graduation(input){
    
let index = 0
let name = input[index]
index++

let grade = Number(input[index]);
index++
let i = 1;
let sumGrade = 0;
let badGradeConter = 0;
let hasBeenExcluded = false;
while(i <= 12){
    if(grade < 4.00){
        badGradeConter++;
        if(badGradeConter === 2){
            hasBeenExcluded = true;
            break;
        }
        grade = Number(input[index]);
        index++
        continue;
    }
    i++;
    sumGrade += grade;
    grade = Number(input[index]);
    index++

}
if(hasBeenExcluded){
    console.log(`${name} has been excluded at ${i} grade`); 
} else{
    console.log(`${name} graduated. Average grade: ${(sumGrade / 12).toFixed(2)}`);
}

}


graduation(["Mimi", 
"5",
"6",
"5",
"6",
"5",
"6",
"6",
"2",
"3"])

