function izpit6(input) {
    let number = input[0]
    let x1 = Number(number[0])
    let x2 = Number(number[1])
    let x3 = Number(number[2])
    let maxNum = Math.max(x1, x2, x3)
    let sum = 0

    for (let a = 1; a <= maxNum && a <= x3; a++) {
        for (let b = 1; b <= maxNum && b <= x2; b++) {
            for (let c = 1; c <= maxNum && c <= x1; c++) {
                sum = a * b * c
                console.log(`${a} * ${b} * ${c} = ${sum};`);
            }
        }
    }

}
izpit6(["324"])