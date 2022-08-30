function cinemaTickets(input) {
    let index = 0
    command = input[index]
    let studentCounter = 0
    let standardCounter = 0
    let kidCounter = 0
    let sumTickets = 0

    while (command !== 'Finish') {
        let name = command
        index++
        let freeSpaces = Number(input[index])
        index++
        let ticketType = input[index]
        let ticketCoounter = 0
        while (ticketType !== "End") {
            ticketCoounter++
            switch (ticketType) {
                case 'standard': standardCounter++; break
                case 'student': studentCounter++; break
                case 'kid': kidCounter++; break
            }
            if (ticketCoounter >= freeSpaces) {
                break
            }
            index++
            ticketType = input[index]
        }
        sumTickets += ticketCoounter
        let res = ticketCoounter / freeSpaces * 100
        console.log(`${name} - ${res.toFixed(2)}% full.`);
        index++
        command = input[index]
    }
    console.log(`Total tickets: ${sumTickets}`);
    console.log(`${(studentCounter / sumTickets * 100).toFixed(2)}% student tickets.`);
    console.log(`${(standardCounter / sumTickets * 100).toFixed(2)}% standard tickets.`);
    console.log(`${(kidCounter / sumTickets * 100).toFixed(2)}% kids tickets.`);
}

cinemaTickets(["Taxi", "10", "standard", "kid", "student", "student", "standard", "standard", "End", "Scary Movie", "6", "student", "student", "student", "student", "student", "student", "Finish"])
