function rounding(num, precision) {
    if (precision > 15) {
        precision = 15;
    }
    let roundNum = num.toFixed(precision);
    let finalNum = parseFloat(roundNum);
    console.log(finalNum);


}