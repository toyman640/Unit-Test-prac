const stringLength = require('./index')
const reverseString = require('./index')
const Calculator = require('./clac')
const capitalize = require('./capitalize')


describe('test char count', () => {
    test('count "Hello" to equal 5', () => {
        expect(stringLength('hello')).toBe(5);
    });
})

describe('string grater than 0', () => {
    test('string to be  > 0', () => {
        expect(stringLength('boy')).not.toBe(0)
    });
})

describe('string grater than 0', () => {
    test('string to be  < 10', () => {
        expect(stringLength('boyhjsjkaes')).not.toBe(10)
    });
})

describe('calculator class add method', () => {
    const calculator = new Calculator();
    test('test addtion', () => {
        expect(calculator.add(2, 5)).toBe(7)
    })
})

describe('calculator class subtract method', () => {
    const calculator = new Calculator();
    test('test addtion', () => {
        expect(calculator.subtract(10, 5)).toBe(5)
    })
})

describe('calculator class divide method', () => {
    const calculator = new Calculator();
    test('test addtion', () => {
        expect(calculator.divide(10, 5)).toBe(2)
    })
})

describe('calculator class multiply method', () => {
    const calculator = new Calculator();
    test('test addtion', () => {
        expect(calculator.multiply(10, 5)).toBe(50)
    })
})

describe('capitalize string', () => {
    test('capitalize first letter', () => {
        expect(capitalize('boy')).toBe('Boy')
    })
})

// describe('string grater than 0', () => {
//     test('reverse "hey" to be "yeh"', () => {
//         expect(reverseString('heyo')).toBe('oyeh')
//     })
// })
