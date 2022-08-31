function izpit5(input) {
    let index = 0
    let command = input[index]
    let startingPoint = 5364
    let targetPoint = 8848
    let totalDays = 1
    let flag = false
    while (command != "END") {


        if (command === "Yes") {
            totalDays++
        }
        if (totalDays > 5) {
            break;
        }
        command = Number(input[++index])
        startingPoint += command
        if (startingPoint >= targetPoint) {
            flag = true
            console.log(`Goal reached for ${totalDays} days!`)
            break;
        }
        command = input[++index]


    }
    if (!flag) {
        console.log("Failed!")
        console.log(`${startingPoint}`)
    }
}
izpit5(["Yes", "1254", "Yes", "1402", "No", "250", "Yes", "635"])