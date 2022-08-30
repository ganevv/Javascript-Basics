function equalSumsEvenOddPosition(input) {
    let a = Number(input[0])
    let b = Number(input[1])
    let currentN = 0
    let print = ""
    for (let i = a; i <= b; i++) {
        currentN = "" + i
        let oddSum = 0
        let evenSum = 0
        for (let j = 0; j < currentN.length; j++) {
            let currentDigit = Number(currentN.charAt(j))
            if (j % 2 === 0) {
                oddSum += currentDigit
            } else {
                evenSum += currentDigit
            }
        }if(evenSum === oddSum){
            print += `${i} `
        }
    }console.log(print);

}

equalSumsEvenOddPosition(["100000", "100050"])
