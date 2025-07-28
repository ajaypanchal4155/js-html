const myobject = {
    Js: 'javascript',
    CPP : 'C++',
   rb : 'Ruby',
    Swift: 'Swift by apple'
}
for (const key in myobject){
    console.log('${key}shortcut is for${my object[key]}');
}

const programming = ["js","rb","py","Java","Cpp"]

for (const key in programming){
    console.log(programming [key]);

}

const map = new Map();
map.set('IN',"India");
map.set('USA',"United states of america");
map.set('Fr',"france");
map.set('IN',"India");

for (const key in map.keys()){
    console.log(key);
}