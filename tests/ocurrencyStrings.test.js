const occurrencyString = require('../main/occurencyStrings')




describe("should return an object with the number of times that object appears in the array",()=>{
    it("should return an object with the number of times that object appears in the array",()=>{
        const array =["two","main","1","1","one","one","two"]
        const func = occurrencyString(array)
        
        array.map((val)=> expect(func).toHaveProperty(val))
       
        array.map((val,ind,arr)=>{

            const quantity = arr.filter((value)=>value ===val)
        
            expect(func[val]).toBe(quantity.length)
        })
        expect(func["two"]).toBe(2)
        expect(func["main"]).toBe(1)
        expect(func["1"]).toBe(2)
        expect(func["one"]).toBe(2)
    })
})