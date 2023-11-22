/**
 * The Fibonacci sequence is defined as follows:
 * the first number of the sequence is 0, the second number is 1,
 * and the nth number is the sum of the (n - 1)th and (n - 2)th numbers.
 * Write a function that takes in an integer n and returns the nth Fibonacci number.
 *
 * Sample input: 6
 * Sample output: 5 (0, 1, 1, 2, 3, 5)
 */

/**
 * @param {number} n
 * @return {number}
 */
// Time: O(2^n) | Space: O(n)
function nthFibonacci(n) {
    if (n === 2) {
        return 1;
    }
    if (n === 1) {
        return 0;
    }
    return nthFibonacci(n-1) + nthFibonacci(n-2);
}

/**
 * @param {number} n
 */
// Time: O(n), Space: O(1)
function fib(n) {
    let lastTwo = [0, 1];
    let counter = 2;
    while (counter <= n) {
        const nextFib = lastTwo[0] + lastTwo[1];
        lastTwo[0] = lastTwo[1]
        lastTwo[1] = nextFib;
        counter++
    }
    return n >= 1 ? lastTwo[1] : lastTwo[0]
}

function test() {
    console.log(fib(1))
}
test()