function tennisRanklist(input){

let tournamentsCount = Number(input[0]);
let startPoints = Number(input[1]);

let pointsFromTournaments = 0;
let winCounts = 0;

for (let i = 2; i <= input.length; i++){
    let ranking = input[i];
    switch(ranking){
        case "W": pointsFromTournaments += 2000; break;
        case "F": pointsFromTournaments += 1200; break;
        case "SF": pointsFromTournaments += 720; break;
    }
    if(ranking === "W"){
        winCounts += 1;
    }
}
let totalPoints = pointsFromTournaments + startPoints;
let averagePoints = pointsFromTournaments / tournamentsCount;
let percentOfWins = winCounts / tournamentsCount * 100;

console.log(`Final points: ${totalPoints}`);
console.log(`Average points: ${Math.floor(averagePoints)}`);
console.log(`${percentOfWins.toFixed(2)}%`);
}
tennisRanklist(["4",
"750",
"SF",
"W",
"SF",
"W"])

