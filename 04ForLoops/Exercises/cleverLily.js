function cleverLily(input) {
    let age = Number(input[0])
    let washingMachinePrice = Number(input[1])
    let toyPrice = Number(input[2])
    let toysCounter = 0
    let allMoney = 0
    let stolenMoney = 0
    let addedMoney = 10

    for (i = 1; i <= age; i++) {
        if (i % 2 === 0) {
            allMoney += addedMoney
            addedMoney += 10
            stolenMoney += 1
        } else {
            toysCounter += 1
        }
    }
    let totalMoney = toyPrice * toysCounter
    let totalSavedMoney = allMoney + totalMoney - stolenMoney
    if (totalSavedMoney >= washingMachinePrice) {
        console.log(`Yes! ${(totalSavedMoney - washingMachinePrice).toFixed(2)}`)
    } else {
        console.log(`No! ${(washingMachinePrice - totalSavedMoney).toFixed(2)}`)
    }
}

cleverLily(["10", "170.00", "6"])
