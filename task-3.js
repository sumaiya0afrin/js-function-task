/*
Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.
*/
let sum = 0;
function make_avg(array, arrSize){
    for(let arr of array){
        sum += arr;
    }
    const avg = sum / arrSize;
    return avg;
}
const array = [4, 7, 18, 2, 3, 17];
console.log(make_avg(array, 6));