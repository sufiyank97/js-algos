// FIZZBUZZ (Solution using Arrow Functions introduced in ES6) 

let fizzbuzz = (num => {
    for (let i = 1; i <= num; i++) {
        if (i % 15 === 0) {
            console.log(`${i} is FizzBuzz`)
        } else if (i % 3 === 0) {
            console.log(`${i} is Fizz`)
        } else if (i % 5 === 0) {
            console.log(`${i} is Buzz`)
        } else {
            console.log(`${i}`)
        }
    }
})


//Executing the Function
fizzbuzz(30)





/* FIZZBUZZ (Solution in ES5) 


// function fizzbuzz(num) {
//     for (let i = 1; i <= num; i++) {
//         if (i % 3 === 0 && i % 5 === 0) {
//             console.log(i + " is a FizzBuzz")
//         } else if (i % 3 === 0) {
//             console.log(i + " is a Fizz")
//         } else if (i % 5 === 0) {
//             console.log(i + " is a Buzz")
//         } else {
//             console.log(i)
//         }
//     }
// }

// fizzbuzz(20)

*/