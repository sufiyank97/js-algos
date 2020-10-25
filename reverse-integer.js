let reverseInteger = (num => {
    let reversedInteger = Number(num.toString().split('').reverse().join(''))
    console.log (reversedInteger)

})

//Executing the Function
reverseInteger(589324)