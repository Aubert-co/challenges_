const uniqueNumbers = require('../main/uniqueNumber')


describe("In this challenge, this function should find the unique number that does not repeat.",()=>{
    it("It should return the unique number that does not repeat.",()=>{
        const number = 11223344559
        const func = uniqueNumbers(number)
       
        expect(func).toBe(9)
        expect(func.toString()).toHaveLength(1)
    })
    it("When no number is unique, it should return null.",()=>{
        const number = 1122334455
        const func = uniqueNumbers(number)

        expect(func).toBeNull()
    
    })
})