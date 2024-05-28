function rightPlase(word1, char, word2) {
    let word = '';
    for (let index = 0; index < word1.length; index++){
        if(word1[index] === '_') {
            word += char;
        }else {
            word += word1[index];
        }
    }
   // console.log(word);
   if (word === word2) {
    console.log('Matched');
   }else {
    console.log('Not Matched');
   }
}
rightPlase('Str_ng', 'I', 'Strong')