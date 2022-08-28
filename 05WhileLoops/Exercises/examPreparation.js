function examPreparation(input) {
    let sumBadGrades = Number(input[0])
    let index = 1
    let command = input[index]
    let numberOfProblems = 0
    let sumGrades = 0
    let badGrades = 0

    while (command !== "Enough") {
        numberOfProblems++
        index++
        let currentGrade = Number(input[index])
        sumGrades += currentGrade
        if (currentGrade <= 4) {
            badGrades++
        }
        if (badGrades >= sumBadGrades) {
            console.log(`You need a break, ${badGrades} poor grades.`);
            break;
        }
        index++
        command = input[index]

    }
    if (command === 'Enough') {
        console.log(`Average score: ${(sumGrades / numberOfProblems).toFixed(2)}`);
        console.log(`Number of problems: ${numberOfProblems}`);
        index -= 2
        command = input[index]
        console.log(`Last problem: ${command}`);
    }
}

examPreparation(["3", "Money", "6", "Story", "4", "Spring Time", "5", "Bus", "6", "Enough"])
