function User(email,password){
    this.email = email;
    this._password = password;


Object.defineProperty(this,'email',{
    get:function(){
        return this._email.toUpperCase();
    },
    set:function(value){
        this._email = value;
    }
});
   this.email = email;

    Object.defineProperty(this,'password',{
        get:function(){
            return this._password.toUpperCase();
        },
        set:function(value){
            this._password = value;
        }
    });
    this.password = password;
}

        const chai = new User("chai@chai.com","chai")
        console.log(chai.email);
    

