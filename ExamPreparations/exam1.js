function izpit1(input) {
    let fat = 9
    let protein = 4
    let carbohydrates = 4
    let fatProcent = Number(input[0])
    let proteinProcent = Number(input[1])
    let carbohydratesProcent = Number(input[2])
    let totalCalories = Number(input[3])
    let waterProcent = Number(input[4])

    let totalFat = (totalCalories*fatProcent/100)/fat
    let totalProtein = (totalCalories*proteinProcent/100)/protein
    let totalCarbohydrates = (totalCalories*carbohydratesProcent/100)/carbohydrates
    let totalFood = totalCarbohydrates + totalFat + totalProtein
    let caloriesPerGram = totalCalories/totalFood
    let finalCount = caloriesPerGram - (waterProcent * caloriesPerGram / 100)
    console.log(finalCount.toFixed(4))
}

izpit1([60, 25, 15, 2500, 60])