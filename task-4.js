/*
Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.
*/
let count = 0;
function count_zero(binaryString){
    for(let str of binaryString){
        if(str === '0'){
            count++;
        }
    }
    return count;
}

console.log(count_zero('010011010'));