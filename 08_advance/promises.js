const promisesOne = new Promise(function(resolve,reject){
    //Do an async task
    //DB calls , crytography,network

    setTimeout(function(){
        console.log('Asyn task is complete');
        resolve()
    },1000)
})
promisesOne.then(function(){
    console.log("Promises consumed");
})

new Promise (function(resolve,reject){
     setTimeout(function(){
        console.log("Asyn task 2");
        resolve()
     },1000)
}).then(function(){
    console.log("asyn 2 resolved")
})

const PromisesThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({
            username:"chai",email:"chai@example.com"})
        
    },1000)
})

PromisesThree.then(function(user){
        console.log(user);
})

const PromisesFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username:"hitesh",password:"123"})
        }else{
            reject('ERROR:Something went wrong')
        }
    },1000)
})
PromisesFour.then((user)=>{
    console.log(user);
    return user.username
}).then((username)=>{
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(()=>console.log("the Promise is either resolved or rejected"))

const PromisesFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username:'ERROR:JS went wrong'})
        }
    },1000)
})

async function ConsumePromisesFive(){
    try{
        const response = await PromisesFive
        console.log(response);
    }catch(error){
        console.log(error);
    }
}
ConsumePromisesFive()

//async function getAllusers(){
  //  try{
    //const response = await fetch('https://jsonplaceholdertypicode.com/users')
    //console.log(response)
   // const data = response.json()
   // console.log(data);
//}catch(error){
//console.log("E:",error);
//}
//}
//getAllusers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>console.log(error))
