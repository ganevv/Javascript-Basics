function depositCalculator (input) {
    let suma = Number(input[0])
    let meseci = Number(input[1])
    let procent = Number(input[2])
    let mesec = 12
    pyrvasmetka = (suma * procent * 0.01)
    vtorasmetka = pyrvasmetka / mesec
    tretasmetka = suma + meseci * vtorasmetka
    console.log(tretasmetka)

}

depositCalculator (["200" , "3" , "5.7" ])