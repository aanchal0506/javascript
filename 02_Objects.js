// //literal and constructor and singleton(constructor se singleton bnega object)

// const mySym=Symbol("key1")
// //Object literals
// const JsUser={
//     name:"aanchal",
//     age:18,
//     location:"jaipur",
//     [mySym]:"key1",//this is how to declare symbol in object
//     email:"anchal@gmail.com",
//     isLoggedIn:false,
//     lastLoginDay:["Monday","Tuesday"],
//     "fullname":"aanchal",//you can only access this with 2nd method
// }

// //access object-2ways
// console.log(JsUser.email)
// console.log(JsUser["email"]);
// console.log(JsUser["fullname"])
// console.log(JsUser[mySym])//this is how access a symbol
// JsUser.email="aara@gmail.com"
// //Object.freeze(JsUser)//to not change the value of jsuser//doesnt throw any error but wont change

// JsUser.greeting=function(){
//     console.log(`hello , ${JsUser.name}`)
// }
// console.log(JsUser);
// console.log(JsUser.greeting())
//===================================================================================


const tinderUser= new Object()
tinderUser.id="123abc"
tinderUser.name="samay"
tinderUser.isLoggedIn=false

const regularUser={
    email:"some@gmail.com",
    fullname:{
        userFull:{
            firstname:"aanchal",
            lastname:"ladha"
        }
    }
}

//console.log(regularUser.fullname.userFull.firstname);

const obj1={1:'a',2:'b'}
const obj2={3:'c',4:'d'}
//to merge two object

const obj3=Object.assign({}, obj1, obj2)
//console.log(obj3)

const object3={...obj1,...obj2}
//console.log(object3);

const user= [
    {
        id:1,
        email:"aanhcal"
    },
    {
        id:2,
        email:"hitesh"
    }
]
//console.log(user[1].id);//2
//console.log(tinderUser)

//console.log(Object.keys(tinderUser))//array of key
//console.log(Object.values(tinderUser))//array of values
//console.log(Object.entries(tinderUser))//array of key- values
//console.log(tinderUser.hasOwnProperty("name"))//to check properties

//=============================objects destructiong and json api

const course = {
    courseName: "javascript",
    price: "999",
    courseteacher: "hitesh"
}

const { courseteacher ,price} = course

const { courseteacher: instructor } = course

console.log(courseteacher)
console.log(instructor)

