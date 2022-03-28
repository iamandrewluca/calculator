export class Calculator {
    result = 0

    constructor(initialResult) {
        this.result = initialResult
    }

    add(value) {
        this.result = this.result + value
    }

    subtract(value) {
        this.result = this.result - value
    }

    multiply(value) {
        this.result = this.result * value
    }

    divide(value) {
        this.result = this.result / value
    }

    getResult() {
        return this.result
    }
}

