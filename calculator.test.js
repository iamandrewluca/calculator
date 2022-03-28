import { describe, it, expect } from 'vitest'
import { Calculator } from './calculator.js'

describe('Calculator', () => {

    it('should add number to result', () => {
        let myCalculator = new Calculator(0)
        myCalculator.add(5)
        let result = myCalculator.getResult()        
        expect(result).toBe(5)
    })

    it('should subtract number to result', () => {
        let myCalculator = new Calculator(0)
        myCalculator.subtract(5)
        let result = myCalculator.getResult()        
        expect(result).toBe(-5)
    })

    it('should divide number to result', () => {
        let myCalculator = new Calculator(10)
        myCalculator.divide(5)
        let result = myCalculator.getResult()        
        expect(result).toBe(2)
    })

    it('should multiply number to result', () => {
        let myCalculator = new Calculator(10)
        myCalculator.multiply(5)
        let result = myCalculator.getResult()        
        expect(result).toBe(50)
    })

})

