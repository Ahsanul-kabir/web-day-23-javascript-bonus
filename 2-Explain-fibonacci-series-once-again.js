// Iterative Method
function fibonacciNum(n) {
    var fibo = [0, 1];
    for (i = 2; i <= n; i++) {
        fibo[i] = fibo[i - 1] + fibo[i - 2];
    }
    return fibo;

}
var result = fibonacciNum(10);
console.log(result);


// Recursion Method
function fibonacciNum(n) {
    if (n == 0) {
        return 0;
    } else if (n == 1) {
        return 1;
    } else {
        return fibonacciNum(n - 1) + fibonacciNum(n - 2);
    }
}
var result = fibonacciNum(10);
console.log(result);