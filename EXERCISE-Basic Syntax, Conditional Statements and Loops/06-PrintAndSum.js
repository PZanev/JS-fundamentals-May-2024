function printAndSum(startNum, endNum) {
    let sum = 0;
    let printNum = '';
    for (let i = startNum; i <= endNum; i++){
        sum += i;
        printNum += i + ' '
    }
    console.log(printNum);
    console.log(`Sum: ${sum}`);
}
printAndSum(5, 10)