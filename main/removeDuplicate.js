const only = (a,b=[])=>{
    for(let i in a){
        if(!b.includes(a[i].toLowerCase()))b.push(a[i].toLowerCase())
    }
    return b
}
return only