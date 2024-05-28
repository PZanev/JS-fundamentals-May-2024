function echo(data) {
 const dataType = typeof data;
 if (dataType == 'string' || dataType == 'number'){
    console.log(dataType);
    console.log(data);
 } else {
    console.log(dataType);
    console.log('Parameter is not suitable for printing');
    
 }
}

echo(18);