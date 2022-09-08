function fibonacci(n){
    if(n == 1) {
        return [0]
    } else if (n == 2) {
        return [0,1]
    }
    else {
        return [...fibonacci(n - 1), fibonacci(n - 1)[n - 2] + fibonacci(n - 1)[n - 3]]
    }
}

console.log(fibonacci(8));