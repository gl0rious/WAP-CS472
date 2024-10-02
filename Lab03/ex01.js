'use strict';

//  a) computeSumOfSquares using Arrow Function
const computeSumOfSquares = (numbers) => {
    return numbers.map((num) => num ** 2).reduce((acc, curr) => acc + curr, 0);
};

console.log(computeSumOfSquares([1, 2, 3])); // Output: 14

//  b) printOddNumbersOnly using Function Expression
const printOddNumbersOnly = function (numbers) {
    numbers.filter((num) => num % 2 !== 0).forEach((odd) => console.log(odd));
};

printOddNumbersOnly([1, 2, 3, 4, 5]); // Output: 1 3 5 (printed on new lines)

//  c) printFibo using Regular Function
function printFibo(n, a, b) {
    let fibo = [a, b];
    for (let i = 2; i < n; i++) {
        fibo.push(fibo[i - 1] + fibo[i - 2]);
    }
    console.log(fibo.slice(0, n).join(', '));
}

printFibo(10, 0, 1); // Output: "0, 1, 1, 2, 3, 5, 8, 13, 21, 34"
