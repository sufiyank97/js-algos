let reverseWords = (str => {
    let wordsArr = str.split(' ')
    let reversedWordsArr = []

    wordsArr.forEach(word => {
        let reversedWord = ''
        for (let i = word.length - 1; i >= 0; i--) {
            reversedWord += word[i]
        }
        reversedWordsArr.push(reversedWord)
    })

    console.log(reversedWordsArr.join(' '))

})

reverseWords('checking if this works')