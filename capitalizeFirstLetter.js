let capitalize = (str => {
    return str
                .toLowerCase()
                .split(' ')
                .map(word => word[0].toUpperCase() + word.substring(1))
                .join(' ')

})

capitalize('i love javascript')