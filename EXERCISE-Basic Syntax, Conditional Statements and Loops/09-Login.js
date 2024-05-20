function login(arr) {
    let username = arr[0];
    let countPrint = 0;
    
    for (let i = 1; i < arr.length; i++) {
       let word = arr[i];
       let password = ''; 
      
       for (let j = word.length; j > 0; j--){
        let key = word[j-1]
        password += key;
       }
       
       if (username === password) {
        console.log(`User ${username} logged in.`);
       } else {           
             if (countPrint >= 3) {
                console.log(`User ${username} blocked!`);
                 return;
            }
          countPrint ++;
          console.log('Incorrect password. Try again.');
          
        }           
    }
}
//login(['Acer','login','go','let me in','recA']);
//login(['momo','omom']);
login(['sunny','rainy','cloudy','sunny','not sunny'])