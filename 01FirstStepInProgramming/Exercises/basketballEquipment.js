function basketballEquipment (input) {
    let taksaGodina = Number(input[0])
    let kecove = (taksaGodina - (taksaGodina * 0.4))
    let ekip = kecove - (kecove * 0.2)
    let topka = ekip / 4
    let aksesoari = topka / 5
    let sumaObshto = taksaGodina + kecove + ekip + topka + aksesoari
    console.log(sumaObshto)
}

basketballEquipment (["365"])