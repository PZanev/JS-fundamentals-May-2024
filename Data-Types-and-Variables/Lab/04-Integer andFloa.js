function intOrFloat(num1, num2, num3) {
    let sum = num1 + num2 + num3;
    let typeSum = '';
    if (sum % 1 === 0){
        typeSum = 'Integer';
    }else {
        typeSum = 'Float';
    }
    console.log(`${sum} - ${typeSum}`);
}
intOrFloat(9, 100, 1.1);