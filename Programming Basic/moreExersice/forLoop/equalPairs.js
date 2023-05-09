function checkPairs(input) {
    let n = Number(input[0]);
    let numbers = 0;
    let sum1 = numbers[0] + numbers[1]; // Сумата на първата двойка
    let maxDiff = 0; // Максималната разлика между двойките
  
    for (let i = 2; i < 2 * n; i += 2) {
      let sum2 = Number(numbers[i]) + Number(numbers[i+1]); // Сумата на текущата двойка
  
      if (sum1 !== sum2) { // Ако текущата двойка има различна стойност от първата
        maxDiff = Math.max(maxDiff, Math.abs(sum1 - sum2)); // Обновяваме максималната разлика
      }
    }
  
    if (maxDiff === 0) {
      console.log(`Yes, value=${sum1}`);
    } else {
      console.log(`No, maxdiff=${maxDiff}`);
    }
  }
  checkPairs(['1',
    '5',
    '5'
    ])