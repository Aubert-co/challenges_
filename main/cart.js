const cart = []

const findByitem = (item)=>cart.find((value)=>value.item === item)

function addItemToCart(item,quantity){

    if(!item || ! quantity)return "os campos item e quantity não podem estar vazios"

    if(findByitem(item))return "item já está no carrinho de compras"

    cart.push({item,quantity})
    return `item ${item} adicionado ao carrinho com sucesso`
} 
module.exports = {findByitem,addItemToCart,cart}
