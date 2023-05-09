function vacation(input) {
    let i = 0;
    let vacationPrice = Number(input[i]); // 2000
    i++; // 1
    let tempMoney = Number(input[i]); // 1000
    i++; // 2
    let action = input[i]; // spend
    i++; // 3
    let sum = Number(input[i]); // 1200
    i++; // 4
    // prepare logic
    let totalDays = 0;
    let counterSpendDays = 0;
    let fail = false;

    while (tempMoney < vacationPrice) {
        switch (action) {
            case "spend":
                counterSpendDays++;
                totalDays++;
                if (counterSpendDays == 5) {
                    fail = true;
                    break;
                }
                tempMoney -= sum;
                if (tempMoney < 0) tempMoney = 0;
                break;

            case "save":
                counterSpendDays = 0;
                totalDays++;
                tempMoney += sum;
                break;
        }
        if (fail) break;
        action = input[i];
        i++;
        sum = Number(input[i]);
        i++;
    }

    if (fail) {
        console.log(`You can't save the money.`);
        console.log(totalDays);
    } else {
        console.log(`You saved the money for ${totalDays} days.`);
    }
}
vacation(["2000",
"1000",
"spend",
"1200",
"save",
"2000"])