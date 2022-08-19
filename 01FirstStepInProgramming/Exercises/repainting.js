function repainting (input) {
    let nailon = 1.5
    let boq = 14.5
    let razreditel = 5
    let torbichki = 0.4
    let extranailon = 2
    let nujennailon = Number(input[0])
    let nujnaboq = Number(input[1])
    let nujenrazreditel = Number(input[2])
    let chasove = Number(input[3])
    let sumanailon = (nujennailon + extranailon) * nailon
    let sumaboq = ((nujnaboq + (nujnaboq*0.1)) * boq)
    let sumarazreditel =  (nujenrazreditel * razreditel)
    let obshtasuma = sumaboq + sumarazreditel + sumanailon + torbichki
    let maistori = ((obshtasuma * 0.3) * chasove)
    let total = (obshtasuma + maistori)
    console.log(total)


}

repainting (["10" , "11" , "4" , "8"])