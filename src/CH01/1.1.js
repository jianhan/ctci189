const stringContainsAllUniqueChars = str => {
    const existing = {}

    for (let i = 0; i < str.length; i++) {
        if (str[i] in existing) {
            return false;
        }

        existing[str[i]] = true;
    }

    return true;
}

console.log(stringContainsAllUniqueChars("tes"))