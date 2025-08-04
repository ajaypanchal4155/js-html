let myName = "hitesh     "
let myChannel = "chai     "
console.log(myName.trim().length);

let myHeros = ["thor","spiderman"]

let heropower = {
    thor:"hammer",
    spiderman:"sling",

    getspiderpower:function(){
        console.log(`spidy power is ${this.spiderman}`);
    }
}
   Object.prototype.hitesh = function(){
    console.log(`hitesh is present in all objects`);
   }

   Array.prototype.heyHitesh = function(){
    console.log(`Hitesh says hello`);
   }
//heropower.hitesh()
myHeros.hitesh()
myHeros.heyHitesh()
//heropower.heyhitesh()

//inheritance
const user = {
    name:"chai",
    email:"pritam@gmail.com",
}
const Teacher = {
    makeVideo:true
}
const Teachingsupport = {
    isAvailable: false
}
const TAsupport = {
makeAssignment:'JS assignment',
fullTime: true,
 __proto__:Teachingsupport,
}
Teacher. __proto__ = user;
//modern syntax
Object.setPrototypeOf(Teachingsupport,Teacher)

let anotherUsername = "chaiAurCode     "
String.prototype.trueLength = function(){
    console.log('${this}');
    console.log('${this.name}')
    console.log('true length is:${this.trim().length}');
}
anotherUsername.trueLength()
//"hitesh",trueLength()
//"iceTea".trueLength()