const moveNumber = require('../main/moveNumber')




describe("function moveNumber",()=>{
    it("should move values 1x",()=>{
        const value = [1,22,45,99]

        const newValues = moveNumber(value,5)

        expect(newValues).toEqual([99,1,22,45])
    })
    it("should move values 2x",()=>{
        const value = [1,"one","two",3,5]
        const newValues = moveNumber(value,2)
        expect(newValues).toEqual([3,5,1,"one","two"])
    })
    it("should move values 0x",()=>{
        const value = [1,"one","two",3,5]
        const newValues = moveNumber(value,0)
        expect(newValues).toEqual(value)
    })
})