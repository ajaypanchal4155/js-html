const myNums = [1,2,3];

//const mytotal = myNums.reduce(function(acc , currval)
//{
   // console.log(`acc:${acc} and currval: ${currval}`);
    //return acc + currval;
//,0);

const mytotal = myNums.reduce((acc,curr) => acc + curr,0)

console.log(mytotal);
