// Only change code below this list
function sumFibonacci(num){
    var pre = 0;
    var cur = 1;
    var sum = 0;
    while(cur <= num){
        if (num === 1) {
            sum = 1;
        }
        else if (cur % 2 !== 0) {
            sum += cur;
        }
        cur += pre;
        pre = cur - pre;
    }
    return sum;
}
// Only change code above this list


console.log(sumFibonacci(1));
console.log(sumFibonacci(10));
console.log(sumFibonacci(20));
console.log(sumFibonacci(4));
console.log(sumFibonacci(-5));
module.exports = sumFibonacci;