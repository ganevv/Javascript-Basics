function worldRecord (input) {
    let record = Number(input[0])
    let distance = Number(input[1])
    let timeForMeter = Number(input[2])
    let totalSecs = distance * timeForMeter
    let delay = Math.floor(distance / 15 )* 12.5
    let finalSecs = totalSecs + delay
    
    if (record>finalSecs){
        console.log (`Yes, he succeeded! The new world record is ${(finalSecs).toFixed(2)} seconds.`)
    }else
        console.log (`No, he failed! He was ${(finalSecs-record).toFixed(2)} seconds slower.`)
}

worldRecord (["10464","1500","20"])
