function trekkingMania(input){

let groupsCount = Number(input[0]);
let totalPeople = 0;
let musalla = 0;
let montBlanc = 0;
let kilimanjaro = 0;
let k2 = 0;
let everest = 0

for(let i = 1; i <= groupsCount; i++){
  let groupsOfPeople = Number(input[i]);
  totalPeople += Number(input[i])
   if(groupsOfPeople <= 5){
    musalla += Number(input[i]);
   } else if(groupsOfPeople <= 12){
    montBlanc += Number(input[i]);
   } else if(groupsOfPeople <= 25) {
    kilimanjaro += Number(input[i]);
   } else if(groupsOfPeople <= 40 ){
    k2 += Number(input[i]);
   } else{
    everest += Number(input[i]);
   }
   
}
let musallaPercent = musalla / totalPeople * 100;
let montBlancPercent = montBlanc / totalPeople * 100;
let kilimanjaroPercent = kilimanjaro / totalPeople * 100;
let k2Percent = k2 / totalPeople * 100;
let everestPercent = everest / totalPeople * 100;

console.log(`${musallaPercent.toFixed(2)}%`);
console.log(`${montBlancPercent.toFixed(2)}%`);
console.log(`${kilimanjaroPercent.toFixed(2)}%`);
console.log(`${k2Percent.toFixed(2)}%`);
console.log(`${everestPercent.toFixed(2)}%`);

}



trekkingMania(["5",
"25",
"41",
"31",
"250",
"6"])

