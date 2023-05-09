function examPreparation(input){
    let index = 0;
    let poorGgrades = Number(input[index]);
    index++

    let command = input[index];
    index++
    let score = Number(input[index]);
    index++
    let poorGgradesCount = 0;
    let problemCount = 0;
    let lastProblem = command;
    let problemSum = 0;

    while(command !== "Enough"){
        lastProblem = command;
        problemCount++
        problemSum += score;
        if(score <= 4){
            poorGgradesCount += 1;
        }
        if(poorGgradesCount === poorGgrades){
            console.log(`You need a break, ${poorGgrades} poor grades.`);
            break;
        }
        command = input[index];
        index++
        score = Number(input[index]);
        index++
    }
    let averageScore = problemSum/problemCount
    if(command === "Enough"){
        console.log(`Average score: ${averageScore.toFixed(2)}`);
        console.log(`Number of problems: ${problemCount}`);
        console.log(`Last problem: ${lastProblem}`);
    }
}

examPreparation(["3",
"Money",
"6",
"Story",
"4",
"Spring Time",
"5",
"Bus",
"6",
"Enough"])


