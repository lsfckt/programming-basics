function walking(input){

let index = 0;
let stepsGoal = 10000;
let totalSteps = 0;
let stepDiff = 0;
let command = input[index];
index++

while(command !== "Going home"){
    totalSteps += Number(command)
    stepDiff = totalSteps - stepsGoal;
    if(totalSteps >= stepsGoal){
        console.log(`Goal reached! Good job!`);
        console.log(`${stepDiff} steps over the goal!`);
        return;
    }
    
    command = input[index];
    index++
}
    if(command === "Going home"){
        command = input[index];
        totalSteps += Number(command);
    }
    if(totalSteps < stepsGoal){
        stepDiff = stepsGoal - totalSteps
        console.log(`${stepDiff} more steps to reach goal.`);
    } else {
        overGoal = totalSteps - stepsGoal
        console.log(`Goal reached! Good job!`);
        console.log(`${overGoal} steps over the goal!`);
    }
}

walking(["125",
"250",
"4000",
"30",
"2678",
"4682"])




