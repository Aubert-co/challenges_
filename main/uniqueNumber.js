const uniqueNumbers = (num)=>{
  num =   num.toString().split('')
  num.map((vals,ind,ar)=>{
   let m = ar.filter((v)=>v===vals)
    if(m.length === 1)num = m
})
return num.length > 1 ? null: Number(num[0])
}

module.exports = uniqueNumbers