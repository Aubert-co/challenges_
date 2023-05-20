const words = ["casa", "carro", "casa", "moto", "carro", "carro"];
/**
 * 
 
In this challenge, the function takes a list of words and returns an object with the frequency count of each item.
occurencyStrings(words)=>{ casa: 2, carro: 3, moto: 1 } 
*/

const occurencyStrings = (array)=>array.reduce((vl,tr)=>{
    if(vl[tr])vl[tr]++
    else vl[tr] = 1

    return vl
},{})

module.exports = occurencyStrings