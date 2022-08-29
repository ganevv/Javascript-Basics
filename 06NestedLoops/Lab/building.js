function Building(input) {
    let floor = Number(input[0])
    let room = Number(input[1])

    for (let i = floor; i > 0; i--) {
        let res = ""
        for (let z = 0; z < room; z++) {
            if (i === floor) {
                res += "L" + i + z + " "
            } else if (i % 2 === 0) {
                res += "O" + i + z + " "
            } else {
                res += "A" + i + z + " "
            }
        }
        console.log(res);
    }

}

Building(["6", "4"])