function walking(input) {
    let targer = 10000
    let sum = 0
    let index = 0
    let command = input[index]

    while (command !== "Going home") {
        let steps = Number(command)
        sum += steps
        if (sum >= targer) {
            console.log(`Goal reached! Good job!`);
            let diff = sum - targer
            console.log(`${diff} steps over the goal!`);
            break;
        }
        index++
        command = input[index]
    } if (command === "Going home") {
        let stepsHome = Number(input[index + 1])
        sum += stepsHome
        if (sum >= targer) {
            console.log(`Goal reached! Good job!`);
            let diff = sum - targer
            console.log(`${diff} steps over the goal!`);
        } else {
            console.log(`${targer - sum} more steps to reach goal.`);
        }

    }
}


walking(["1500",
    "300",
    "2500",
    "3000",
    "Going home",
    "200"])

