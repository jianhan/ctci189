const hashString = (str: string, len: number) => {

    const hashKey = 101;
    const code = str.split('').reduce((acc: number, cur: string) => {
        acc += cur.charCodeAt(0)
        return acc;
    },
        1);

    return (hashKey * code) % len
}

class HashTable {

    private table: any[];

    constructor(tableSize: number) {
        this.table = new Array(tableSize)
    }

    add = (key: string, value: string) => {
        const hashedKey = hashString(key, this.table.length)
        if (this.table[hashedKey] === undefined) {
            this.table[hashedKey] = [[key, value]];
        } else {
            const keyValueInBucket: [] = findValueInBucket(this.table[hashedKey], key)
            if (keyValueInBucket.length === 0) {
                this.table[hashedKey].push([key, value])
            } else {
                for (let i = 0; i < this.table[hashedKey].length; i++) {
                    if (this.table[hashedKey][0] === key) {
                        this.table[hashedKey][1] = value;
                    }
                }
            }
        }
    }

    get = (key: string) => {
        const hashedKey = hashString(key, this.table.length)
        if (this.table[hashedKey] === undefined) {
            return null;
        }
        const bucket = this.table[hashedKey];
        const result = findValueInBucket(bucket, key)
        if (result.length === 1) {
            return result[0][1]
        }

        return null;
    }

    remove = (key: string) => {

    }
}

const findValueInBucket = (bucket: any, key: string) => {
    return bucket.filter((x: any) => x[0] === key)
}

const hashTable = new HashTable(100)
hashTable.add('name', 'jim')
hashTable.add('age', '12')


console.log(hashTable.get('age'))

// console.log(findValueInBucket([['test', 1], ['test1', 2]], 'test1'));

// console.log('e'.charCodeAt(0))

// console.log("test".split(''))
// console.log(hashString('223sdf', 1001))