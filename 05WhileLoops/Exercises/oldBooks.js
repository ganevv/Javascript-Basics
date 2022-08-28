function oldBooks(input) {
    let favBook = input[0]
    let index = 1
    let command = input[index]
    let bookIsFound = false

    while (command !== `No More Books`) {
        if (command === favBook) {
            bookIsFound = true
            break;
        }
        index++
        command = input[index]
    }if (bookIsFound === false){
    console.log(`The book you search is not here!`);
    console.log(`You checked ${index - 1} books.`);
    }else {
        console.log(`You checked ${index - 1} books and found it.`);
    }
}

oldBooks(["Troy", "Stronger", "Life Style", "Troy"])