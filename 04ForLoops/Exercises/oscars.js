function oscars(input) {
    let actorName = input[0]
    let academyPoints = Number(input[1])
    let numberOfJudges = Number(input[2])

    let j = numberOfJudges * 2 + 3

    for (let i = 3; i < j; i += 2) {
        let judgeName = input[i]
        let givenPoints = Number(input[i + 1])
        academyPoints += (judgeName.length * givenPoints) / 2
        if (academyPoints > 1250.5) {
            break;
        }
    }
    if (academyPoints >= 1250.5) {
        console.log(`Congratulations, ${actorName} got a nominee for leading role with ${academyPoints.toFixed(1)}!`);
    } else {
        let diff = (1250.5 - academyPoints).toFixed(1);
        console.log(`Sorry, ${actorName} you need ${diff} more!`);
    }

}

oscars(["Zahari Baharov", "205", "4", "Johnny Depp", "45", "Will Smith", "29", "Jet Lee", "10", "Matthew Mcconaughey", "39"])
