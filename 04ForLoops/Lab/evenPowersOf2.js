function evenPowersOf2(input) {
    let a = Number(input[0])
    for (let i = 0; i <= a; i += 2) {
        let res = Math.pow(2,i)
        console.log(res)
    }
}


evenPowersOf2(["7"])