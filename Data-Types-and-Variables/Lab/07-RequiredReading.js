function reading (pagesOfBook, pagesPerHour, daysPerBook) {
   
    const hoursPerDay = (pagesOfBook / pagesPerHour) / daysPerBook;
    console.log(hoursPerDay);

}
reading(212, 20, 2);