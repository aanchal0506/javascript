function add(number1,number2){//num1,num2=>parameter
    console.log(number1+number2);
}

//add(3,4)=>arguments
function add(number1,number2){//num1,num2=>parameter
    let result=number1+number2
    return result
}

const r=add(3,4)
//console.log(r);

function add(number1,number2){//num1,num2=>parameter
    //let result=
    return number1+number2
}
const r1=add(3,4)
//console.log(r1);

function login(username="aa"){
    return `${username} logged in`
}
const msg=login("aanchal")
//console.log(msg);
//when you dont pass anything , you will get undefined

//when you dont know number of parameter then you use rest operator
function calculateCartPrice(...num1){
    return num1//returns array
}
//console.log(calculateCartPrice(100,200,300,400));


function calculateCartPrice1(val1,val2,...num1){
    return num1//returns array
}
//console.log(calculateCartPrice1(100,200,300,400));

const user={
    username:"aanchal",
    price:99
}

function handleObject(anyobject){
    //console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}
//handleObject(user)
handleObject({
    username:"same",
    price:899
})

const arr=[200,300,400]
function returnSecondValue(getArry){
    return getArry[1]
}
//console.log(returnSecondValue(arr))