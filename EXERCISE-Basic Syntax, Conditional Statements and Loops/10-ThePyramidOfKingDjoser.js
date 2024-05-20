function thePiramid(base, increment) {
   
    let stoneRequired = 0;
    let marbleRequired = 0;
    let lapisLazulRequired = 0;
    let goldRequired = 0;
    let countIncr = 1;

   while (base >= 1) {
        if (base === 2 || base === 1) {
            goldRequired = base * base;
            
        }else if (countIncr % 5 === 0){
            stoneRequired += (base - 2) * (base - 2);
            lapisLazulRequired += 2 * base + 2 * (base - 2);
        } else {
    stoneRequired += (base - 2) * (base - 2);
    marbleRequired += 2 * base + 2 * (base - 2);
        }

    
   
    countIncr ++;
    base = base - 2;
   }
   let totalStone = stoneRequired * increment;
   let totalLapisLazuri = lapisLazulRequired * increment;
   let totalMarble = marbleRequired * increment;
   let totalGold = goldRequired * increment;
   let totalHeight = (countIncr - 1) * increment;
    console.log(`Stone required: ${Math.ceil(totalStone)}`);
    console.log(`Marble required: ${Math.ceil(totalMarble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(totalLapisLazuri)}`);
    console.log(`Gold required: ${Math.ceil(totalGold)}`);
    console.log(`Final pyramid height: ${Math.floor(totalHeight)}`);
}
thePiramid(11,0.75);