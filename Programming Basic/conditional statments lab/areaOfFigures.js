function area(input){

let shape = input[0];
let area = 0

if (shape === "square"){
    let side = Number(input[1]);    
    area = side * side;
}   else if(shape === "rectangle"){
    let sideA = Number(input[1]);
    let sideB = Number(input[2]);
    area = sideA * sideB;
} else if(shape === "circle"){
    let r = Number(input[1]);
    area = r * r * Math.PI;
} else if (shape === "triangle"){
    let a = Number(input[1]);
    let h = Number(input[2]);
    area = (a * h) / 2; 
}
console.log(area.toFixed(3));
}
area(["rectangle",
"7",
"2.5"])
