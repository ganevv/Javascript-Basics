function trekkingMania(input) {
    let index = 0;
    let groupsCount = Number(input[index]);
    index++

    let musala = 0;
    let monblan = 0;
    let kilimanjaro = 0;
    let k2 = 0;
    let everest = 0;

    for (let i = 0; i < groupsCount; i++) {
        let peopleCount = Number(input[index]);
        index++
        if (peopleCount <= 5) {
            musala += peopleCount;
        } else if (peopleCount >= 6 && peopleCount <= 12) {
            monblan += peopleCount;
        } else if (peopleCount >= 13 && peopleCount <= 25) {
            kilimanjaro += peopleCount;
        } else if (peopleCount >= 26 && peopleCount <= 40) {
            k2 += peopleCount;
        } else if (peopleCount > 40) {
            everest += peopleCount;
        }
    }
    let totalPeople = musala + monblan + kilimanjaro + k2 + everest;

    let precentMusala = (musala / totalPeople * 100).toFixed(2);
    let precentMonblan = (monblan / totalPeople * 100).toFixed(2);
    let precentKilimanjaro = (kilimanjaro / totalPeople * 100).toFixed(2);
    let precentK2 = (k2 / totalPeople * 100).toFixed(2);
    let precentEverest = (everest / totalPeople * 100).toFixed(2);

    console.log(`${precentMusala}%`);
    console.log(`${precentMonblan}%`);
    console.log(`${precentKilimanjaro}%`);
    console.log(`${precentK2}%`);
    console.log(`${precentEverest}%`);
}


trekkingMania(["10", "10", "5", "1", "100", "12", "26", "17", "37", "40", "78"])
