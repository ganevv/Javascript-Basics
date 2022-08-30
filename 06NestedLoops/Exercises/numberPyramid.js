function numberPyramid(input) {
    let n = Number(input[0])
    let current = 1
    let isBigger = false
    let res = ""

    for (i = 1; i <= n; i++) {
        for (k = 1; k <= i; k++) {
            if (current > n) {
                isBigger = true
                break;
            }
            res += current + " "
            current++
        }
        console.log(res)
        res = ""
        if (isBigger) {
            break;
        }
    }
}

numberPyramid(["7"])