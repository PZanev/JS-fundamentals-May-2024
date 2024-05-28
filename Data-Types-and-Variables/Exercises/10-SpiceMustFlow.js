function amauntOfSpices(startingYield){
 let totalSpices = 0;
 let countDays = 0;
 while (startingYield >= 100) {
    totalSpices += startingYield;
    countDays ++;


    if(totalSpices > 26){
        totalSpices -= 26;
    }
     else {
        break;
     //totalSpices = 0;
    }
    startingYield -=10;
 }
 totalSpices -= 26;
 console.log(`${countDays}`);
 console.log(`${totalSpices}`);
}
amauntOfSpices(1);