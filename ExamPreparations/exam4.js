function izpit4(input) {
    let n = Number(input[0])
    let index = 1
    let totalLiters = 0
    let totalDegrees = 0
    let totatlDegreesPerLitres = 0
    let sum = 0
    let degreesCount = 0
    let sredniGradusi = 0


    for (i = 1; i <= n; i++) {
        let rakiaLiters = Number(input[index])
        index++
        let degrees = Number(input[index])
        index++
        totatlDegreesPerLitres = rakiaLiters * degrees
        sum += totatlDegreesPerLitres
        degreesCount += rakiaLiters
        sredniGradusi = sum / degreesCount
    }

    console.log(`Liter: ${degreesCount.toFixed(2)}`);
    console.log(`Degrees: ${sredniGradusi.toFixed(2)}`);

    if (sredniGradusi < 38) {
        console.log(`Not good, you should baking!`);
    } else if (sredniGradusi >= 38 && sredniGradusi <= 42) {
        console.log(`Super!`);
    } else {
        console.log(`Dilution with distilled water!`);
    }
}

izpit4(["3", "100", "45", "50", "55", "150", "36"])
