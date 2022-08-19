function suppliesForSchool (input) {
    let himikali = 5.8
    let markeri = 7.2
    let preparatliter = 1.2
    let broihimikali = input[0]
    let broimarkeri = input[1]
    let broipreparati = input[2]
    let procent = input[3] / 100
    let obshtobezprocent = ((himikali*broihimikali) + (markeri * broimarkeri) + (preparatliter * broipreparati))
    console.log(obshtobezprocent - (obshtobezprocent*procent))

}

suppliesForSchool (["2" , "3" , "4" , "25"])