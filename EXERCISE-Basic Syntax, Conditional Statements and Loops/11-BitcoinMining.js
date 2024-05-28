function amauntBitcoin(array) {
    let sumGold = 0;
    let firstBitcoin = 0;
    let totalBitcoin = 0;

    for (let i = 0; i < array.length; i++) {
       
       if ((i + 1) % 3 === 0) {
        array[i] *= 0.70
       }
       sumGold += array[i] * 67.51;
       if (sumGold >= 11949.16 && firstBitcoin === 0) {
            firstBitcoin = i+1;
       }       
    }
    totalBitcoin = Math.floor(sumGold / 11949.16)
    sumGold -= totalBitcoin * 11949.16
    
    console.log(`Bought bitcoins: ${totalBitcoin}`);
    if (firstBitcoin > 0){
        console.log(`Day of the first purchased bitcoin: ${firstBitcoin}`);
    }    
    console.log(`Left money: ${sumGold.toFixed(2)} lv.`);
    
}

amauntBitcoin([100, 200, 300]);
//amauntBitcoin([3124.15, 504.212, 2511.124]);