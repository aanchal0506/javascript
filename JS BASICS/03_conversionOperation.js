let score = "33"
 
console.log(typeof score)
console.log(typeof(score))

let valueInNumber= Number(score)
console.log(typeof valueInNumber)

let score1="33abc"
console.log(typeof score1)
let valueInNumber1= Number(score1)
console.log(typeof valueInNumber1)
console.log(valueInNumber1)//NaN =>not a number 

let score2=null
let valueInNumber2= Number(score2)
console.log(valueInNumber2)

let score3=undefined
let valueInNumber3= Number(score3)
console.log(valueInNumber3)

let score4=true
let valueInNumber4= Number(score4)
console.log(valueInNumber4)


//"33"=>33
//"33qncn"=>NaN
//true=>1 false=>0


let isLoggedIn=1
let booleanIsLoggedIn=Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)
//1,"hello"=>true; 0,""=>false;


let number=33
let stringnumber=String(number)
console.log(typeof stringnumber)