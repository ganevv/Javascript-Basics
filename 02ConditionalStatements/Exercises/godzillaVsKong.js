function godzillaVsKong (input){
    let budget = Number(input[0])
    let extras = Number(input[1])
    let clothingPrice = Number(input[2])

    let decor = budget * 0.10
    let moneyForExtrasClothing = extras*clothingPrice
    if(extras>150){
        moneyForExtrasClothing *= 0.90
    }

    let totalSum = decor + moneyForExtrasClothing

    if (budget>=totalSum){
        console.log(`Action!`)
        console.log(`Wingard starts filming with ${(budget-totalSum).toFixed(2)} leva left.`)
    }else{
        console.log(`Not enough money!`)
        console.log(`Wingard needs ${(totalSum-budget).toFixed(2)} leva more.`)
    }
}

godzillaVsKong (["20000","120","55.5"])
