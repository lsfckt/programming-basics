function sequence2K1(input){

let n = Number(input[0]);
let k = 1;

while(k <= n){
    console.log(k);
    k = 2 * k + 1;
}
}
sequence2K1(["3"])