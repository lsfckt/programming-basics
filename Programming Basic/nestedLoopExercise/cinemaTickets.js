function cinemaTicets(input){

    let index = 0;
    let command = input[index];
    index++

    let totalTickets = 0;
    let totalStudent = 0;
    let totalKids = 0;
    let totalStandard = 0;

    while(command !== "Finish"){
        let movieName = command;
        command = input[index];
        index++

        let freeSeats = Number(command);
        command = input[index];
        index++
            let spaceTaken = 0;
            let student = 0;
            let standard = 0;
            let kids = 0;
        while(command !== "End"){
            
           if(command === "student"){
            student++;
            spaceTaken++
           } else if(command === "standard"){
            standard++
            spaceTaken++
           } else if(command === "kid"){
            kids++
            spaceTaken++
           }
           if(spaceTaken >= freeSeats){
            break;
           }
  
            command = input[index];
            index++
        }
        
            let curSpacePercent = spaceTaken / freeSeats * 100;
            
            command = input[index];
            index++
        console.log(`${movieName} - ${curSpacePercent.toFixed(2)}% full.`);
        totalStandard += standard;
        totalStudent += student;
        totalKids += kids;
    }
    
    totalTickets = totalKids+totalStandard+totalStudent;
    let totalStudentTickets = totalStudent / totalTickets * 100;
    let totalStandardTickets = totalStandard / totalTickets * 100;
    let totalKidsTickets = totalKids / totalTickets * 100;
    console.log(`Total tickets: ${totalTickets}`);
    console.log(`${totalStudentTickets.toFixed(2)}% student tickets.`);
    console.log(`${totalStandardTickets.toFixed(2)}% standard tickets.`);
    console.log(`${totalKidsTickets.toFixed(2)}% kids tickets.`);
}

cinemaTicets(["The Matrix",
"20",
"student",
"standard",
"kid",
"kid",
"student",
"student",
"standard",
"student",
"End",
"The Green Mile",
"17",
"student",
"standard",
"standard",
"student",
"standard",
"student",
"End",
"Amadeus",
"3",
"standard",
"standard",
"standard",
"Finish"])

