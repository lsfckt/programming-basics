function greening(input){
    let m2 = Number(input[0]);
    let realPrice = m2 * 7.61;
    let discount = 0.18 * realPrice;
    let finalPrice = realPrice - discount;
console.log(`The final price is: ${finalPrice} lv.`);
console.log(`The discount is: ${discount} lv.`);
}
greening(["550"])