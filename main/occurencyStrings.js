const palavras = ["casa", "carro", "casa", "moto", "carro", "carro"];


const m =palavras.reduce((vl,tr)=>{
    if(vl[tr])vl[tr]++
    else vl[tr] = 1

    return vl
},{})
console.log(m)