function totalPriceVacantion(groupTotal, typeGroup, day) {
    let singlePrice = 0;
    let price = 0;
    switch (typeGroup) { 
        case 'Students':
            if (day === 'Friday') {
                singlePrice = 8.45;
            } else if (day === 'Saturday') {
                singlePrice = 9.80;
            } else if (day === 'Sunday') {
                singlePrice = 10.46;
            }
            price = singlePrice * groupTotal;

            if (groupTotal >= 30) {
                price *= 0.85;
           }
            break;
        case 'Business':
            if (day === 'Friday') {
                singlePrice = 10.90;
            } else if (day === 'Saturday') {
                singlePrice = 15.60;
            } else if (day === 'Sunday') {
                singlePrice = 16;
            }
            if(groupTotal >= 100) {
                groupTotal -=10
            }
            price = singlePrice * groupTotal;
     
            break;
        case 'Regular':
            if (day === 'Friday'){
                singlePrice = 15;
            } else if (day === 'Saturday') {
                singlePrice = 20;
            } else if (day === 'Sunday') {
                singlePrice = 22.5;
            }
            price = singlePrice * groupTotal;
            if (groupTotal >= 10 && groupTotal <= 20) {
                price *= 0.95;
            }
            break;
    }
    //   price = singlePrice * groupTotal;
    //   if (typeGroup === 'Students' && groupTotal >= 30) {
    //    price *= 0.85;
    //   }else if (typeGroup === 'Business' && groupTotal >= 100) {
    //    price -= singlePrice * 10;
     //  } else if (typeGroup === 'Regular' && (groupTotal >= 10 && groupTotal <= 20)) {
     //   price *= 0.95;
    //   }
        console.log(`Total price: ${price.toFixed(2)}`);
}