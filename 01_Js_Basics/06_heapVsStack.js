// memory- Stack , Heap

// Stack-primitive data type
// -get copy of variable



// Heap-non primitive data type
// -get reference of variable
let yt="hitesh"

let anotherName=yt
console.log(anotherName)

anotherName="chai or code"
console.log(yt);//hitesh
console.log(anotherName)//chai or code


let user={
    email:"user@g.com",
    upi:"user@ybl"
}

let user2=user

user2.email="aanchal"
console.log(user.email)//aanchal
console.log(user2.email)//aanchal

