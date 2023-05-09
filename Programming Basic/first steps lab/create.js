function project(input){
    //"The architect {името на архитекта} will need {необходими часове} hours to complete {брой на проектите} project/s."
    let name = input[0];
    let projectNumb = Number(input[1]);
    let hours = projectNumb * 3;
    console.log(`The architect ${name} will need ${hours} hours to complete ${projectNumb} project/s.`);
}
project(["Aleksandar", "7"])