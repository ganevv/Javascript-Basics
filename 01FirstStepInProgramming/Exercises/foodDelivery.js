function foodDelivery (input) {
    let pileMenu = 10.35
    let ribaMenu = 12.4
    let veganMenu = 8.15
    let dostavka = 2.5
    let broiPile = Number(input[0])
    let broiRiba = Number(input[1])
    let broiVegan = Number(input[2])
    let allOrders = ((pileMenu * broiPile) + (ribaMenu * broiRiba) + (veganMenu * broiVegan))
    let desert = allOrders * 0.2
    let smetka = allOrders + desert + dostavka
    console.log(smetka)


}

foodDelivery (["2" , "4" , "3"])