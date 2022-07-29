function sumZero(array){
    console.log(array)
    for(let i =0; i< array.length; i++){ // n
        for(let j=0; j< array.length; j++){ // n
            console.log(`array ${array[i]} + ${array[j]}`)
            if(array[i] + array[j] === 0) {
                return true;
            } 
              
            
        }
    }
    return false;
}
// run time complexity equals O(n^2)
// space complexity equals )(1)

function paragramSentence(string){
    hash = new Array(26).fill(false);
    let index;
    for (let i = 0; i < string.length; i++) { // n
        if ('A' <= string[i] && string[i] <= 'Z'){
        index = string.charCodeAt(i) - 'A'.charCodeAt(0);
    }
        else if ('a' <= string[i] && string[i] <= 'z'){
        index = string.charCodeAt(i) - 'a'.charCodeAt(0);
    }
        else {
            continue;
    }

        hash[index] = true;
     }
     for (let i = 0; i <= 25; i++) // O(1)
     if (hash[i] === false){ 
         return false;
        }
    return true;
}
// space complexity equals O(1)
// run time complexityy equals n = 1 === O(n)
function longestWord(string){
    const words = string.split(" "); // n
    let longestWord = '';
    for(let i=0; i<words.length; i++){ //  n
        if (words[i].length > longestWord.length){
            longestWord = words[i];
        }
    }
    return longestWord;
}

// time complexity equals n+n === O(n)
// space complexity = O(n)
//console.log(sumZero([5,-5,4]));
//console.log( paragramSentence(`Mr. and Mrs. Dursley, of number four, Privet Drive, were proud to say that they were perfectlynormal, thank you very much. `))
console.log(longestWord(`Mr. and Mrs. Dursley, of number four, Privet Drive, were proud to say that they were perfectly normal, thank you very much. `))