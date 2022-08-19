function vacationBooksList (input) {
    let obshtostr = Number(input[0])
    let strperhour = Number(input[1])
    let days = Number(input[2])
    console.log((obshtostr / strperhour) / days)


}

vacationBooksList (["212" , "20" , "2"])