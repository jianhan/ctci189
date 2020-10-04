
const sortStr = str => str.split("").sort().join()
const strsArePermutations = (str1, str2) => sortStr(str1) === sortStr(str2)

console.log(strsArePermutations("test", "etst1"))

