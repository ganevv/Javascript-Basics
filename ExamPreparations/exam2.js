function izpit2(input) {
    let savedMoney = Number(input[0])
    let earnedMoneyPerDay = Number(input[1])
    let cost = Number(input[2])
    let giftPrice = Number(input[3])
    let days = 5

    let totalSavedMoney = savedMoney * days
    let totalEarnedMoney = earnedMoneyPerDay * days
    let totalMoney = totalSavedMoney + totalEarnedMoney
    let moneyWithCosts = totalMoney - cost


    if (moneyWithCosts > giftPrice) {
        console.log(`Profit: ${moneyWithCosts.toFixed(2)} BGN, the gift has been purchased.`);
    } else {
        console.log(`Insufficient money: ${(giftPrice - moneyWithCosts).toFixed(2)} BGN.`);
    }
    
}

izpit2([5.12, 32.05, 15, 150])