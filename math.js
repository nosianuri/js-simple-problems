// const myNumber = -5;
// const output = Math.abs(myNumber);

 // const myNumber = 21.0001;
// const output = Math.ceil(myNumber);
// const output = Math.floor(myNumber);
// const output = Math.round(myNumber);

// const output = Math.random() * 10;
// const rounded = Math.round(output);
// console.log(rounded);


/* for (let i = 0; i <= 20; i++) {
    const output = Math.random() * 6;
    const rounded = Math.round(output);
    console.log(rounded);
} */

/* const number = -78;
const answer = Math.abs(number);
console.log(answer); */

var sentence = "I am hardworking. I am determined. I will be a web developer.";
var count = 0;
for(var i = 0; i < sentence.length; i++){
    var letter = sentence[i];
    if(letter == 'a'){
        count++;
    }
}
console.log(count);