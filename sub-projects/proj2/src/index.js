// [assist] organizeImports: false
import { unwatchFile, unlink } from 'node:fs'
import { dirname, basename } from 'node:path'

// [format] indent: 4 whitespaces
// [javascript] quoteStyle: single, semicolon: asNeeded
const indentTest = () => {
    console.log('quote and semicolon')
    if (true) {
        return
    }
}

// [lint] complexity: error
function complexity() {
    for (let x = 0; x < 10; x++) {
        for (let y = 0; y < 10; y++) {
            for (let z = 0; z < 10; z++) {
                if (x % 2 === 0) {
                    if (y % 2 === 0) {
                        console.log(x > y ? `${x} > ${y}` : `${y} > ${x}`)
                    }
                }
            }
        }
    }
}
