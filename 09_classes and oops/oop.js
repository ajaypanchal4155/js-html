const user = {
   username:"hitesh",
    loginCount:8,
    signIn:true,
    getUserDetails:function(){
        console.log("Got user details from database");
        console.log('username:${this.username}');;
        console.log(this);
    }
}
//console.log(user.username);
//console.log(user.getUserDetails());
console.log(this);

function User(username,loginCount,isloggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isloggedIn= isloggedIn
    return this
}
const userOne = new User("hitesh",12,true)
const userTwo = new User("chaiaurcode",11,false)
console.log(userOne.constructor);
console.log(userTwo);