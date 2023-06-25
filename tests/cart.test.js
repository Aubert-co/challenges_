const {cart,addItemToCart,findByitem} = require('../main/cart')



describe("bkkjdbek",()=>{
    it("should add a new item in cart",()=>{
        const add = addItemToCart("camisa",3)

        expect(add).toEqual("sucess")
    })
})