function division(num) {
    let divisor = [10, 7, 6, 3, 2];
    for (let i = 0; i < divisor.length; i++)    
        
        if (num % divisor[i] === 0) {
            console.log(`The number is divisible by ${divisor[i]}`);
            return;
    } 
    console.log('Not divisible');
}