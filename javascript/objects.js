const mtSymbol = Symbol()
const MyObj={
   // mtSymbol: 'keybngai', wrong way use a symbol as a key
   [mtSymbol]:'keybn gai',
    'Full name': 'laiba maqsood',
    'roll no': 41,
    Semester: '4th',
    section:'4A',
}
//console.log(MyObj[mtSymbol]); 
// console.log(MyObj['Full name']); 
// MyObj.greeting = function(){console.log(`hello ${this["Full name"]} how are you!`)}
// console.log(MyObj.greeting());
// MyObj.email='laiba@gmail.com'
// console.log(MyObj);
// console.log(MyObj.email);
// MyObj['Full name']='laiba laiba'
// console.log(MyObj["Full name"]);

const obj1 ={
    name:'laiba',
    roll:41,
}
const obj2={
    sem: 4,
    section: 'A',

}
const obj3={...obj1,...obj2}
//console.log(obj3);
//console.log(Object.keys(obj3));

const {name: n}= obj1 //object de-structure
console.log(n);