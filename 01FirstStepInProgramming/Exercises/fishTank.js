function fishTank (input) {
    let dyljina = Number(input[0])
    let shirochina = Number(input[1])
    let visochina = Number(input[2])
    let procent = Number(input[3])
    let obem = dyljina * shirochina * visochina
    let obemDCM = obem / 1000
    let zaetoProstranstvo = obemDCM * 0.17
    nujniLitri = obemDCM - zaetoProstranstvo
    console.log(nujniLitri)
}

fishTank (["85" , "75" , "47" , "17"])