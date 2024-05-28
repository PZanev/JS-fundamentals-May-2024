function spceialNumbers (n){

    let sum = 0;
    for (let i = 1; i <= n; i++){
        let number = i + '';
        let sum1 = 0;
        for (let j = 0; j < number.length; j++){
            
            let num2 = Number(number[j]);
            sum1 += num2;
            
        }
        if (sum1 === 5 || sum1 === 7 || sum1 === 11){
            console.log(`${i} -> True`);
        }else {
            console.log(`${i} -> False`);
        }

    }
}
spceialNumbers(20);