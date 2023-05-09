function relocation(input){

let index = 0;
let width = Number(input[index]);
index++
let length = Number(input[index]);
index++
let height = Number(input[index]);
index++
let freeSpace = width*length*height;
let command = input[index];
index++

while(command !== "Done"){
    freeSpace -= Number(command)
    if(freeSpace <= 0){
        console.log(`No more free space! You need ${Math.abs(freeSpace)} Cubic meters more.`); break;
    }
    command = input[index];
    index++
}
    if(command === "Done"){
        console.log(`${freeSpace} Cubic meters left.`);
    }
}
relocation(["10", 
"1",
"2",
"4", 
"6",
"Done"])
