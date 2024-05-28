function sumOfDigits(number){
    const stringNum = number + '';
    let sum = 0;
    for (let index = 0; index < stringNum.length; index++) {
        sum += Number(stringNum[index]);
   }
   console.log(sum);
}
   sumOfDigits(245678);