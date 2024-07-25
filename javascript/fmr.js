const books=[
    {book:'harry potter', publish: 1996},
    {book:'cindrella', publish: 2000},
    {book:'snow white', publish: 2003},
    {book:'moana', publish: 1994},
]
const filteredval=  books.filter((items)=> items.publish >2000 )
//console.log(filteredval);

const ha=books.filter( (items)=> items.book === 'harry potter')
//console.log(ha);
const arr=[1,2,3,4,5,6,7,8,9,10]
let num = 5
// const newarr= arr.map( (val,num)=> val*num) it multiples values with its index not the with 5
// console.log(newarr);
// const newarr= arr.map( (val)=> val*num) it multiples values with 5
// console.log(newarr);
const cart=[
    {shirt:'loan', price:999 },
    {shirt:'linene', price:587 },
    {shirt:'silk', price:399 },
    {shirt:'cotton', price:1499 },
]
const newArr= cart.reduce((acc,item)=>acc+item.price, 0)
//console.log(newArr);






