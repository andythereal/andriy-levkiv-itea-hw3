var fibonacciNumber = Number(prompt('Your Number: '));

function fibonacci(n) {
    if (n === 1) {
        return 0;
    }
    else if (n <= 3) {
        return 1;
    }
    else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}
document.write('Your Fibonacci Number: ' + fibonacci(fibonacciNumber));

