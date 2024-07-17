let arr = ['laiba', 41, true, 43.65]
let arr1=[43,65,7,8,32]
let newarr=arr.concat(arr1)
console.log(newarr)
arr.push(arr1)
console.log(arr);

let arrA = arr.slice(0,2)
console.log(arrA);
let arrB= arr.splice(0,2)
console.log(arrB);
console.log(arr);