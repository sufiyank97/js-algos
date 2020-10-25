// PALINDROME VALIDATOR

//SOLUTION - (If Argument includes special characters)

let isPalindrome = (anyString => {
    let charsArr = anyString.toLowerCase().split('')
    let validCharacters = 'abcdefghijklmnopqrstuvwxyz'.split('')

    let lettersArr = []
    charsArr.forEach(char => {
        if (validCharacters.indexOf(char) > -1) {
            lettersArr.push(char)
        }
    });

    if (lettersArr.join('') === lettersArr.reverse().join('')) {
        console.log (true)
    } else {
        console.log (false)
    }

})


//Executing the Function
isPalindrome("Madam I'm Adam")





/*
SOLUTION (ES5) - (If Argument doesn't include special characters)


function isPalindrome(str) {
    var newStr = str.toLowerCase().split('')
    var validChars = 'abcdefghijklmnopqrstuvwxyz'.split('')
    var lettersArr = []

    newStr.forEach(function (char) {
        if (validChars.indexOf(char) > -1) {
            lettersArr.push(char)
        }
    })

    return (lettersArr.join('') === lettersArr.reverse().join('')) 

}

console.log(isPalindrome("eye"));

*/
//////////////////////////////////////////////////////////////////////////////////////////////////


 //SOLUTION - (If Argument doesn't include special characters)

// let isPalindrome = (anyString => {
//         let newString = anyString.split('').reverse().join('')
//         return anyString === newString 

// })

// console.log(isPalindrome('madam'))
