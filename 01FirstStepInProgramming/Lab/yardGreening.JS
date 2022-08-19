function yardGreening(input) {
    let firmprice = 7.61
    let yard = Number(input[0])
    console.log(`The final price is: ${firmprice * yard - (firmprice * yard*0.18)} lv.`)
    console.log(`The discount is: ${firmprice * yard*0.18} lv.`)

}

yardGreening([550])