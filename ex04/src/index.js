// Only change code below this list
function sumFibonacci(num){
    var fibSeq = [1, 1];
    var sumOfOddFibNum = 2;
    var counter = fibSeq[fibSeq.length - 2] + fibSeq[fibSeq.length - 1];

    while (counter <= num) {
        fibSeq.push(counter);

        if(counter%2 != 0 ) { sumOfOddFibNum += counter;}


        counter = fibSeq[fibSeq.length - 2] + fibSeq[fibSeq.length - 1];
    }
    return sumOfOddFibNum;
}
// Only change code above this list


console.log(sumFibonacci(1));
console.log(sumFibonacci(10));
console.log(sumFibonacci(20));
console.log(sumFibonacci(4));
console.log(sumFibonacci(-5));
module.exports = sumFibonacci;