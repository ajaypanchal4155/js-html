const shoppingCart = [
    {
     itemName:"js Course",
     price:2999
    },
{
    itemName : "py course",
    price : 5999
},
{
    itemName:"mobile dev Course",
    price:5999
},
{
    itemName:"data science course",
    price:12999
},
]

const pricetopay = shoppingCart.reduce((acc,item)=> acc + item.price,0)
console.log(pricetopay);
