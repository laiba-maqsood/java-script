const myObj={
    MyNmae: 'laiba maqsood',
    roll: 41,
    message: function(){
        console.log(`${this.MyNmae}, welcome to my website.`)
    }
}
function obj(newObj){
 newObj.message();
 console.log( newObj.MyNmae);
}
obj(myObj)
const arrow = (num1,num2)=>{return num1+num2}
console.log(arrow(4,6)); 
const add=(nu1, nu2) => nu1+nu2;       //arrow functions
console.log(add(3,5));

(function sub(num1, num2){
 console.log(num1-num2);    //iffi functions
})(6,2);
((num1 ,num2)=>{  
    console.log(num1/num2);
})(4,2);
//condition? true: flase -> ternary operator