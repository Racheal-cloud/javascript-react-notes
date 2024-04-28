const {test, describe, expect} = require('jest/globals')


function add(a, b) {
    return a + b
}
console.log(add(1,3))


test('it should add two numbers together', () => {
 const result = add(3, 7)
 if (result !==10) {
    throw new Error('Expected 10 but got ' + result)
 }
})

// function test(title, callback) {
//     try {
//         callback();
//         console.log(` ${title} passed`)
//     } catch (error) {
//         console.log(` ${title} failed`)
//     }
// }

describe (add, () => {
    test ('it should add two numbers', () => {
        const result = add(3, 7)
        const expected = 10
        // assertion
        expect(result).toBe(expected)
    })
}) 

