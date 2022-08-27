function Graduation (input) {
    let index = 0
    let name = input[index]
    index++
    i = 1
    let counter = 0
    let sum = 0
    let excluded = false
    while (i<=12){
        let grade = Number(input[index])
        index++
        if (grade <4){
            counter++
            if (counter>=2){
            excluded = true
            console.log(`${name} has been excluded at ${i} grade`)
            break;
            }
            continue
        }

        sum += grade
        i++
    }
    if (!excluded){
        let avg = sum/12
        console.log(`${name} graduated. Average grade: ${(avg).toFixed(2)}`)
    }
}

Graduation(["Mimi", 
"5",
"6",
"5",
"6",
"5",
"6",
"6",
"2",
"3"])


