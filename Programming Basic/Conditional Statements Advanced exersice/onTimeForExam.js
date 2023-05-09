function onTimeForExam(input){
    let examHour = Number(input[0]);
    let examMinute = Number(input[1]);
    let hourOfArrival = Number(input[2]);
    let minuteOfArrival = Number(input[3]);
    
    let totalExamTime = examHour * 60 + examMinute;
    let totalArrivalTime = hourOfArrival * 60 + minuteOfArrival;

    let totalDiffTime = Math.abs(totalExamTime - totalArrivalTime);
    let diffHour = Math.floor(totalDiffTime/60);
    let diffMinute = totalDiffTime % 60;

    if(totalExamTime === totalArrivalTime){
        console.log("On Time");
    } else if(totalExamTime < totalArrivalTime){
        console.log("Late");
        if(totalDiffTime < 60){
        console.log(`${totalDiffTime} minutes after the start`);
        }else {
        if(diffMinute < 10){
            console.log(`${diffHour}:0${diffMinute} hours after the start`);
        } else{
            console.log(`${diffHour}:${diffMinute} hours after the start`);
        }
    } 
} else {
    if (totalDiffTime <= 30){
        console.log("On Time");
        console.log(`${totalDiffTime} minutes after the start`);
    } else{
        console.log("Early");

        if(diffMinute < 10){
            console.log(`${diffHour}:0${diffMinute} hours before the start`);
        } else{
            console.log(`${diffHour}:${diffMinute} hours before the start`);
    }
}
}
}

onTimeForExam(["9", "30", "9", "50"])
