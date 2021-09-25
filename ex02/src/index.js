// Only change code below this list
function myFunction(n) {
    if ( n < 1 ){ 
        return [];
    } else {
        var countArray = [];
        countArray = myFunction(n -1);
        countArray.unshift(n);
        return countArray;
    }
    
}

// Only change code above this list

console.log(myFunction(-1));
console.log(myFunction(10));
console.log(myFunction(5));
module.exports = myFunction;