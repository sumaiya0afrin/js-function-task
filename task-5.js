/*
Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return Even. If odd return Odd
*/

function odd_even(val){
    if(val % 2 == 0){
        const even = "Even";
        return even;
    }else{
        const odd = "Odd";
        return odd;
    }
}

console.log(odd_even(4));
console.log(odd_even(7));