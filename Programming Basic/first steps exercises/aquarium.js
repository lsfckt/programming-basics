// обем на аквариумa: 85 * 75 * 47 = 299625 
// см3 обем в литри: 299625 * 0.001 или 299625 / 1000 => 299.625 
// литра заето пространство: 17% = 0.17 
// нужни литри: 299.625 * (1 - 0.17) = 248.68875 литра

function aquarium(input){

let lenghtCm = Number(input[0]);
let widthCm = Number(input[1]);
let heightCm = Number(input[2]);
let percent = Number(input[3]);

let volume = lenghtCm * widthCm * heightCm;
let volumeToLiters = volume * 0.001
let litersVolume = 0.17
let litersNeeded = volumeToLiters * (1 - 0.17);

console.log(litersNeeded)

}
aquarium(["85", "75", "47", "17"])