const descripter = Object.getOwnPropertyDescriptor(Math,"PI")
console.log(descripter);

//console.log(math.pi);
//console.log = 5
//console.log(math,PI);

const chai = {
    name:'ginger chai',
    Price: 250,
    isAvailable:true,

orderchai: function(){
    console.log("chai nhi bhi");
}
}
console.log(Object.getOwnPropertyDescriptor(chai,"name"));
Object.defineProperty(chai,'name',{
    writable:false,
    enumerable:false
})
console.log(Object.getOwnPropertyDescriptor(chai,"name"));
for(let[key,value]of Object.entries(chai)){
    if(typeof value!=='function'){
        console.log('${key}:${value}');
    }
}