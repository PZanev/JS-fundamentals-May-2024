function centuriesToMinute (centuries){
    const years = centuries * 100;
    const days = Math.trunc(years * 365.2422);
    const hours = days * 24;
    const Minutes = hours * 60;
    console.log(`${centuries} centuries = ${years} years = ${days} days = ${hours} hours = ${Minutes} minutes`);

}
centuriesToMinute(5)