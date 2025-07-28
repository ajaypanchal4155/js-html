const coding = ["js","ruby","java","python", "CPP"]
//coding.forEach(function(val){
    //console.log(val);
//})
//coding.forEach((item)=>{console.log(item);})

//function PrintMe(item){
    //console.log(item);
//}
//coding.forEach(PrintMe)

coding.forEach((item,index,arr)=>{
    console.log(item,index,arr);
})

const mycoding = [
    {
        languageName: "javascript",
        languageFileName:"js"
    },
    {
        languageName: "java",
        languageFileName:"java"
    },
    {
        languageName: "python",
        languageFileName:"python"
    },
]

mycoding.forEach((item) => {
console.log(item.languageName)
})
