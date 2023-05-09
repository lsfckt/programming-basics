function circleAreaAndPerimeter(input){

    let r = Number(input[0]);
    let s = Math.PI * Math.pow(r, 2);
    let d = 2 * r;
    let p = (Math.PI * d);
    
    console.log(s.toFixed(2));
    console.log(p.toFixed(2));

}
circleAreaAndPerimeter(["3"])