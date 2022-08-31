function izpit3(input) {
    let numberOfDancers = Number(input[0])
    let numberOfPoints = Number(input[1])
    let season = input[2]
    let location = input[3]
    let procent = 0

    switch (season) {
        case 'summer':
            switch (location) {
                case 'Bulgaria': procent = 5; break
                case 'Abroad': procent = 10; break
            }
            break;
        case 'winter':
            switch (location) {
                case 'Bulgaria': procent = 8; break
                case 'Abroad': procent = 15; break
            }
            break
    }
    if (location === "Bulgaria") {
        wonSum = numberOfDancers * numberOfPoints
    } else if (location === "Abroad") {
        wonSum = numberOfDancers * numberOfPoints + (numberOfDancers * numberOfPoints / 2)
    }
    let moneyWithProcent = wonSum - (wonSum * procent / 100)
    let moneyForCharity = moneyWithProcent - (moneyWithProcent * 0.25)
    let leftMoney = moneyWithProcent - moneyForCharity
    let moneyPerDancer = leftMoney / numberOfDancers

    console.log(`Charity - ${moneyForCharity.toFixed(2)}`);
    console.log(`Money per dancer - ${moneyPerDancer.toFixed(2)}`);
}

izpit3(["1",
    "89.5",
    "summer",
    "Abroad"])
