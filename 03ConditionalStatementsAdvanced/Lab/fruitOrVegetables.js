function fruitOrVegetables  (input) {
    let type = input[0]
    switch (type){
        case "banana" :
        case "apple" :
        case "cherry" :
        case "lemon" :
        case "grapes" :
        case "kiwi" : console.log("fruit") ; break;
        case "tomato" :
        case "cucumber" :
        case "pepper" :
        case "carrot" : console.log("vegetable") ; break;
        default : console.log("unknown") ; break;
    }
}

fruitOrVegetables (["cucumber"])