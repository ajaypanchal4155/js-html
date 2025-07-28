//for of
//["","",""]
//[{},{},{}]

//const arr = [1,2,3,4,5]

//for(const num of arr){
    //console.log(num);
//}
//const greetings = "Hello world!"
//for(const greet of greetings){
    //console.log('Each char is ${greet}')
//}

//maps

const map = new Map()
map.set('IN',"India")
map.set('USA',"united states of america")
map.set ('fr',"france")

//console.log(map);

for(const[key , value] of map){
    console.log(key,':-',value);
}

const myobject = {
    game1 : 'NFS',
    game2 : 'spiderman'
};
for (const[key,value] of Object.entries(myobject))
{
    console.log(key,':-',value);
    
}