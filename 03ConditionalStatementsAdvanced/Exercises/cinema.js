function cinema (input) {
    let typeProject = input[0]
    let row = Number(input[1])
    let column = Number(input[2])
    let price = 0
    if(typeProject === 'Premiere'){
        price = 12 * row * column
    }else if (typeProject === 'Normal'){
        price = 7.5 * row * column
    }else if (typeProject === 'Discount'){
        price = 5 * row * column
    }
    console.log(`${price} leva`)
}

cinema(["Premiere","10","12"])
