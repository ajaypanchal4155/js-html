const User =  {
    Username : "hitesh",
    Price : 999,

    WelcomeMessage: function(){
        console.log('${this.username}, welcome to website');
        //console.log(this);
    }
}
//User.WelcomeMessage()
//User.Username = "sam"
//User.WelcomeMessage()
//console.log(this);

//function chai (){
    //let username = "hitesh"
   // console.log(this.username);
//}
//chai()

//const chai = function (){
   // let username = "hitesh"
    //console.log(this.username);
//}

//const chai =() => {
    //let Username = "hitesh"
    //console.log(this);
//}
//chai()

//const addtwo = (num1,num2) =>{
    //return num1 + num2
//}
//const addTwo = (num1 , num2) = num1 + num2
//const addTwo = (num1,num2)=>(num1 + num2)
//console.log(addTwo(3,4))

const addTwo = (num1 , num2) =>
({username:"hitesh"})
console.log(addTwo(3,4))
const myArray = [2,5,3,7,8]
myArray.forEach()