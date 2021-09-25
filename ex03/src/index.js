// Only change code below this list
function rangeOfNumbers(startN, endN) {
    var nums = [];
    if (startN < endN) {
        var nums = rangeOfNumbers(startN, endN - 1);
        (nums.push(endN));
        return nums;  
    } else if ( startN == endN) {
        return [startN];
    } else {
        return "The starting number will always be less than or equal to the ending number";
    }
  }
// Only change code above this list

console.log(rangeOfNumbers(1,7));
console.log(rangeOfNumbers(3,10));
console.log(rangeOfNumbers(5,5));
console.log(rangeOfNumbers(7,5));
module.exports = rangeOfNumbers;