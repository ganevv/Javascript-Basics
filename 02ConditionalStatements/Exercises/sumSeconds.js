function sumSeconds (input) {
    let player1 = Number(input[0])
    let player2 = Number(input[1])
    let player3 = Number(input[2])
    let sum = player1 + player2 + player3
    let minutes = Math.floor(sum/60)
    let seconds = sum % 60
    if (seconds < 10) {
        console.log(`${minutes}:0${seconds}`)
    } else {
        console.log(`${minutes}:${seconds}`)
    }
}

sumSeconds (["35","45","44"])