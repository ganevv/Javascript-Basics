function projectsCreation(input) {
    let name = input[0]
    let project = Number(input[1])
    console.log(`The architect ${name} will need ${3*project} hours to complete ${project} project/s.`)
}

projectsCreation(["George" , "4"])