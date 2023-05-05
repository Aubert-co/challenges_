const finds =(array,find)=>{
    let b = []
    array.map((val)=>{
        let finds = find.filter((find)=>find ===val).length
        if(finds ===0)b.push(val)
     })
     return b
}
const findOdds =(s1,s2)=>[...finds(s1.split(' '),s2.split(' ')),...finds(s2.split(' '),s1.split(' '))]

module.exports = findOdds