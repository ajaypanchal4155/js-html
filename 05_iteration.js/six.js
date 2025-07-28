//const coding =["js","ruby","java","python","CPP"]

//const values = coding.forEach((item) =>{
//console.log(item);
//return item
//})
//console.log(values);

const myNums = [1,2,3,4,5,6,7,8,9,10]
//const newNums = myNums.filter((num)=>{
    //num>4
//})
//console.log(newNums);

const newNums = []
myNums.forEach((num)=>{
    if(num>4){
        newNums.push(num)
    }
})
console.log(newNums);
const books = [
{tittle:'bookone',genre:'fiction',publish:'1981',edition:'2004'},
{tittle:'bookTwo',genre:'non fiction',publish:'1992',edition:'2008'},
{tittle:'bookThree',genre:'History',publish:'1999',edition:'2007'},
{tittle:'bookFour',genre:'non-fiction',publish:'1989',edition:'2010'},
{tittle:'bookFive',genre:'science',publish:'2009',edition:'2014'},
{tittle:'bookSix',genre:'fiction',publish:'1987',edition:'2010'},
{tittle:'bookSeven',genre:'History',publish:'1986',edition:'1996'},
{tittle:'bookEight',genre:'Science',publish:'2011',edition:'2016'},
{tittle:'booknine',genre:'non-fiction',publish:'1981',edition:'1989'},

];
let UserBooks = books.filter((bk)=>bk.genre==='History')

UserBooks = books.filter((bk) => {return bk.publish>=1995 && bk.genre === 'history'})

console.log(UserBooks);