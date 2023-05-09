function grades(input){

    let studentsCount = Number(input[0])

    let failStudents = 0;
    let avrStudents1 = 0;
    let avrStudents2 = 0;
    let topStudents = 0;

    let grades = 0;

    for(let i = 1; i <= studentsCount; i++){
        let grade = Number(input[i]);
        grades += grade;
        if(grade <= 2.99){
            failStudents++;
        } else if(grade <= 3.99){
            avrStudents1++;
        } else if(grade <= 4.99){
            avrStudents2++;
        } else{
            topStudents++;
        }

    }
    let avrGrade = grades / studentsCount;
    let topPercent = topStudents/studentsCount*100;
    let stud1Percent = avrStudents1/studentsCount*100;
    let stud2Percent = avrStudents2/studentsCount*100;
    let failPercent = failStudents/studentsCount*100;
    console.log(`Top students: ${topPercent.toFixed(2)}%`);
    console.log(`Between 4.00 and 4.99: ${stud2Percent.toFixed(2)}%`);
    console.log(`Between 3.00 and 3.99: ${stud1Percent.toFixed(2)}%`);
    console.log(`Fail: ${failPercent.toFixed(2)}%`);
    console.log(`Average: ${avrGrade.toFixed(2)}`);
}
grades([
    '10',
    '3.00',
    '2.99',
    '5.68',
    '3.01',
    '4',
    '4',
    '6.00',
    '4.50',
    '2.44',
    '5'
    ])