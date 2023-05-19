class Calculator {
    constructor(a, b) {
        this.a = a,
        this.b = b
    }

    add(a, b) {
        return a + b;
    }

    subtract(a, b) {
        return a - b;
    }

    multiply(a,b) {
        return a * b;
    }

    divide(a, b) {
        return a / b;
    }
}


const name_1 = new Calculator(10, 5)
console.log(name_1.divide(10, 5))

module.exports = Calculator