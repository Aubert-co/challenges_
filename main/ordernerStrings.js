const array= ["um","name","quatro","qweqweqweqwe"]

array.sort((a,b)=>{
    if(a.length > b.length)return 0
    if(b.length > a.length)return -1
    return 1
})
console.log(array)