function tennisRanklist(input) {
    let tournametsCount = Number(input[0])
    let startPoints = Number(input[1])
    let points = startPoints
    let wins = 0
    let inputL = input.length

    for (let index = 2; index < inputL; index++) {
        let stage = input[index]
        switch (stage) {
            case `W`: points += 2000; wins++; break;
            case `F`: points += 1200; break;
            case 'SF': points += 720; break;
        }
    }
    let avgPoints = (points - startPoints) / tournametsCount
    let percent = (wins / tournametsCount) * 100
    console.log(`Final points: ${points}`);
    console.log(`Average points: ${Math.floor(avgPoints)}`);
    console.log(`${(percent).toFixed(2)}%`);
}

tennisRanklist(["5", "1400", "F", "SF", "W", "W", "SF"])