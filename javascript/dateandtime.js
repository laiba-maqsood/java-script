let Mydate= new Date();
// console.log(Mydate);
// console.log(Mydate.toString());
// console.log(Mydate.toLocaleDateString());
// console.log(Mydate.toLocaleString());
// const options= {timeZone: 'Asia/Karachi', timeZoneName: 'short'}
// console.log(Mydate.toLocaleString('en-PK', options));
let timeStamp = Date.now()
console.log(timeStamp);
console.log(Mydate.getTime());
console.log(Math.round(Date.now()/1000));
let MyCreateddate= new Date(2003,2,2);
console.log(MyCreateddate.toLocaleString());