console.log(2>1)
console.log(2>=1)
console.log(2<1)
console.log(2==1)
console.log(2!=1)

console.log("2">1);//true
console.log("02">1);//true
console.log("02">1);
console.log(null>0);//false
console.log(null>=0);//true
console.log(null==0);//false=> no predictable answer
//null=>NaN/0

console.log(undefined>0);//false
console.log(undefined>=0);//false
console.log(undefined==0);//false=> no predictable answer


//== and === works differently than >=,<=,>,<


///strict check === datatype+value
console.log(33===33)


//Interview 
/*Based on what factor data is divided-access/store
1.primitive datatype(call by value)-String,number,boolean,null,undefined,symbol,bigint
2.reference type/non primitive-array,objects,function=>returns object 

javascript is dynamically types 


*/
const id=Symbol('123')
const anotherId=Symbol('123')
// id != anotherId
const bigNumber=1234567788946376837268762378n
 const names=['aanchal','pranshu']
 const obj={
    name:aanchal,
    age:3
 }
 const add=function(a,b){
    return a+b
}

