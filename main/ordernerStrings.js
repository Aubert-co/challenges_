const array= ["name","quatro","qweqweqweqwe","um"]
/**
 * 
 * In this challenge, it takes words in an array and sorts
 *  them from the ones with fewer letters to the ones with more letters.
 *  example: ordernerStrings(array)=>[ 'um', 'name', 'quatro', 'qweqweqweqwe' ]
 */
const ordernerStrings = (array)=>array.sort((a,b)=>{
    if(a.length > b.length)return 0
    if(b.length > a.length)return -1
    return 1
})

module.exports = ordernerStrings