const perf = require('execution-time')();


function doublerAppend(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){ // n
        let num = nums[i] * 2;
        new_nums.push(num); //1
    }

}
// run time = O(n)

function doublerInsert(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){ // n
        let num = nums[i] * 2;
        new_nums.unshift(num); // n
    }

}
// O(n^2)

function getSizedArray(size){
    let array = [];
    let start = new Date().getTime()
    for (let i=0; i<size; i++){ // n
        array.push(i);
    }
    let end = new Date().getTime();
    let time = end - start
    console.log (`${size}: ${time}`)
    return array
}
// run time n

const tinyArray = getSizedArray(10);
const smallArray = getSizedArray(100);
const mediumArray = getSizedArray(1000);
const largeArray = getSizedArray(10000);
const extraLargeArray = getSizedArray(100000);



// How long does it take to double every number in a given 
// array? 

// Try it with first function
perf.start();                     // Starts timer
doublerAppend(extraLargeArray);
let resultsAppend = perf.stop();  // Stops timer and save time results


// Try it with second function
perf.start();
doublerInsert(extraLargeArray);
let resultsInsert = perf.stop();


console.log('Results for the extraLargeArray');
console.log("insert", resultsInsert.preciseWords);
console.log("append", resultsAppend.preciseWords);
/*the before 10000 runs faster than a single milisecond . after that it runs for 1 milisecond for 10000 followed by 6 for 100000. this is a linear increase in time complexity with a bit of extra time due to constant operators  */
// insert is faster because it allocates the needed memeory at the start. Append allocates memory every time it adds another value thus increasing the time needed. 