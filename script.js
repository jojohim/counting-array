"use strict";

let array =[];
let counter = 0;


function addNumbers () {
//Make a program that counts (with a timed delay)
        counter++;
        setTimeout(addNumbers, 1000);

//Modify the program to insert the counter-value in the beginning of the array
        array.unshift(counter);
        console.log(array);

//Modify the program again, to make sure the array doesn’t get longer than nine items.
       if (array.length > 8) {
           array.pop();
       }
}

addNumbers();