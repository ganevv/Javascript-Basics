function sumOfTwoNumbers(input) {
    let startN = Number(input[0])
    let endN = Number(input[1])
    let magicN = Number(input[2])

    let isFound = false
    let counter = 0

    for (let x = startN; x <= endN; x++) {
        for (let y = startN; y <= endN; y++) {
            let sum = x + y
            counter++
            if (sum === magicN) {
                isFound = true
                console.log(`Combination N:${counter} (${x} + ${y} = ${magicN}) `);
                break;
            }
        }
        if (isFound) {
            break;
        }
    }
    if (!isFound) {
        console.log(`${counter} combinations - neither equals ${magicN}`);
    }
}

sumOfTwoNumbers(["1", "10", "5"])
