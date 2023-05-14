const removeDuplicate = require('../main/removeDuplicate')



describe("Given an array with duplicate values, this function should return only one item from each.",()=>{
    it("should return a array with each item de cada",()=>{
        const duplicates = ["name","one","value","name","one","value"]
        const func = removeDuplicate(duplicates)
    
        expect(func).toBe(["name","one","value"])
    })
    it("Given an array, if it does not contain any duplicate values, the function should return the original values.",()=>{
        const duplicates = ["name","one","value"]
        const func = removeDuplicate(duplicates)
    
        expect(func).toBe(["name","one","value"])
    })
})