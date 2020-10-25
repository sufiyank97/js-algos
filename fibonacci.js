let fibonacci = ( position => {
    if(position < 3) {
        return 1
    } else {
        return fibonacci(position - 1) + fibonacci(position - 2)
    }
})

//Function call to Log the 5th element in the Fibonacci sequence to the console
console.log(fibonacci(5))