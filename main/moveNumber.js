/***
 * This function should take an array and move its items according to the number k.
 * Example:
 * const array = [1,2,3,4,5,6]
 * moveNumber(array,1)=> [ 6, 1, 2, 3, 4, 5 ]
 */
/*const arr = (copi)=>{
    let array = [...copi]
    let newA = array[array.length-1]
    array[array.length-1] = undefined
    const n = array.filter((val)=>val!==undefined)
   
    return [newA,...n]
}
const moveNumber = (array,k)=>{
    for(let i =0;i<k;i++)array = arr(array)
    
    return array
}*/
const moveNumber = (array, k) => {
    const tamanhoDoArray = array.length;
    const novaPosicao = [];
  
    for (let i = 0; i < tamanhoDoArray; i++) {
      const indiceAtual = i;
      const novoIndice = (indiceAtual + k) % tamanhoDoArray;
      novaPosicao[novoIndice] = array[i];
    }
  
    return novaPosicao;
  };
  

module.exports = moveNumber