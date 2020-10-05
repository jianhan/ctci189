const trim = s => s.trim()

const removeDuplicateSpaces = arr => {

}

const urlify = str => str.split(' ').map(trim).map(s => s.replace(' ', '%20'))

console.log(urlify("test   tests   test    test33"))
