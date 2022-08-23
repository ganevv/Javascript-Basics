function tradeCommissions(input) {
    let city = input[0]
    let sells = Number(input[1])
    let procent = 0

    if (city === "Sofia") {
        if (sells > 0 && sells <= 500) {
            procent = 5
        } else if (sells > 500 && sells <= 1000) {
            procent = 7
        } else if (sells > 1000 && sells <= 10000) {
            procent = 8
        } else if (sells > 10000) {
            procent = 12
        }
    } else if (city === "Varna") {
        if (sells > 0 && sells <= 500) {
            procent = 4.5
        } else if (sells > 500 && sells <= 1000) {
            procent = 7.5
        } else if (sells > 1000 && sells <= 10000) {
            procent = 10
        } else if (sells > 10000) {
            procent = 13
        }
    } else if (city === "Plovdiv") {
        if (sells > 0 && sells <= 500) {
            procent = 5.5
        } else if (sells > 500 && sells <= 1000) {
            procent = 8
        } else if (sells > 1000 && sells <= 10000) {
            procent = 12
        } else if (sells > 10000) {
            procent = 14.5
        }
    } if (city !== "Sofia" && city !== "Varna" && city !== "Plovdiv") {
        console.log('error');
    } else if (sells < 0) {
        console.log('error');
    } else {
        let finalCount = procent * sells / 100
        console.log((finalCount).toFixed(2));
    }
}

tradeCommissions (["Varna",
"3874.50"])


