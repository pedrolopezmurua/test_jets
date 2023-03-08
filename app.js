let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}



//one euro is:
function fromEuroToDollar(euro){
    let dollar = euro*oneEuroIs.USD
    return dollar
}

//one dollar is:
function fromDollarToYen(dollar){
    let yen = dollar*oneEuroIs.JPY
    return yen

}

//one dollar is:
function fromYenToPound(yen){
    let pound = yen*oneEuroIs.GBP
    return pound

}

module.exports ={fromEuroToDollar,fromDollarToYen, fromYenToPound };