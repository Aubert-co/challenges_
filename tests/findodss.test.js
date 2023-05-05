const findOdds  = require('../main/findodds')

describe("This challenge must find the letters that do not repeat. ",()=>{
    it("should return the letters that do not repeat in an array",()=>{
        const letter1 = "ma ri jo"
        const letter2 = "jo luc ri"
        const func =findOdds(letter1,letter2)

        expect(Array.isArray(func)).toBeTruthy()
        expect(func).toContain("luc")
        expect(func).toContain("ma")
        expect(func).not.toContain("ri")
        expect(func).not.toContain("jo")
    })
    it("Should return an empty array when all letters repeat.",()=>{
        const letter1 = "ma ri"
        const letter2 = "ri ma"
        const func = findOdds(letter1,letter2)

        expect(Array.isArray(func)).toBeTruthy()
        expect(func).toHaveLength(0)
    })
})