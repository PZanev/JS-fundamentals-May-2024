function amaizingNum(num) {
    num = num.toString();
    let sum = 0;
    let itsTrue = false;
    for(let i = 0; i < num.length; i++){
        sum += Number(num[i]);
    }
    sum = sum.toString();
    for (let index = 0; index < sum.length; index++) {
        if (sum[index] == 9){
            itsTrue = true;            
        }              
    }
    // console.log(sum)
    if (itsTrue){
        console.log(`${num} Amazing? True`);
    } else{
        console.log(`${num} Amazing? False`);
    }
}
amaizingNum(155233)