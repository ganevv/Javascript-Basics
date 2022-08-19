function petShop(input) {
    let catFood = 4
    let dogFood = 2.5
    let orderedDogFood = input[0]
    let orderedCatFood = input[1]
    console.log(`${(orderedDogFood * dogFood) + (orderedCatFood * catFood)} lv.`)

}

petShop([5 , 4])