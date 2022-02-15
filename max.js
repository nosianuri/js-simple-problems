const business = 450;
const minister = 550;
const army = 600;
// if(business > minister){
//     console.log('Business person er pola is bigger');
// }
// else {
//     console.log('minister er pola is bigger');
// }

/* function findLargest(first, second){
    if(first> second){
        return first;
    }
    else{
        return second;
    }
}

const largest = findLargest(354, 124);
console.log('largest is', largest); */
// compear 3
/*if(business > minister && business > army) {
      console.log('business isbigger');
}
else if(minister > business && minister > army){
    console.log('minister is bigger');
}
else{
    console.log('army is bigger');
} */


// Task 1: create a function that takes three numbers as input parameter and returns you the largest number of the three

var max = Math.max(business, minister, army);
// console.log('largest is', max);

// task 2: write a function to find the smallestt of three numbers.

/* var a = 2;
var b = 3;
if (a < b){
    console.log("Hello");
} */

function add(a, b){
    return a + b;
}
console.log(add("adam" + "eve"))