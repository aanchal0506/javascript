const date=new Date()
console.log(date);//2026-08-26T08:36:47.527Z

console.log(date.toString());//Wed Aug 26 2026 14:07:31 GMT+0530 (India Standard Time)
console.log(date.toDateString())//Wed Aug 26 2026
console.log(date.toISOString())
console.log(date.toJSON())
console.log(date.toTimeString())

console.log(date.toLocaleString())//8/26/2026, 2:10:01 PM
console.log(typeof date)


let MyCreatedDate=new Date(2023,0,23)
//month starts  from 0
console.log(MyCreatedDate.toLocaleString());

let myDate=new Date("2023-01-14")
console.log(myDate.toLocaleString());

let MyTimeStamp=Date.now();
console.log(MyTimeStamp);//in milliseconds
console.log(myDate.getTime());//in milliseconds
console.log(myDate.getTime());//in milliseconds
console.log(Math.floor(Date.now()/1000));//in milliseconds


let newDate= new Date();
console.log(newDate.getMonth())
console.log(newDate.getDay())


console.log(newDate.toLocaleString('default',{
    weekday: "long"   
}))


