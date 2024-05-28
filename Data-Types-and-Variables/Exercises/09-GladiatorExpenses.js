function expenses(lostFight, helmetPrice, swordPrice, shieldPrice, armorPrice){
    let countHelmet = 0;
    let swordCount = 0;
    let shieldCount = 0;
    let armorCount = 0;
    for (let index = 1; index <= lostFight; index++) {
       if(index % 2 === 0){
        countHelmet ++;
       }
       if(index % 3 === 0){
        swordCount ++;
       }
       if(index % 2 === 0 && index % 3 === 0){
        shieldCount ++;
        if(shieldCount % 2 === 0){
            armorCount ++
           }
       }
       
        
    }
    const totalCoast = countHelmet * helmetPrice + swordCount * swordPrice 
    + shieldCount * shieldPrice + armorCount * armorPrice;
    console.log(`Gladiator expenses: ${totalCoast.toFixed(2)} aureus`);
}
expenses(7, 2, 3, 4, 5);