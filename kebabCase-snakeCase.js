let kebabToSnakeCase = (str => {
    let newChar = '_'
    let convertedStr = str.replace(/-/g, newChar)
    console.log(convertedStr)
})

kebabToSnakeCase('sujit-mohanty-2018')