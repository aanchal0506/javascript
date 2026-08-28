const user={
    //current context reference = this
    username:"hitesh",
    price:999,
    welcomeMessage: function(){
    
    console.log(`${this.username}, welcome to website`)
    console.log(this)/*
    {
  username: 'hitesh',
  price: 999,
  welcomeMessage: [Function: welcomeMessage]
}
sam, welcome to website
{
  username: 'sam',
  price: 999,
  welcomeMessage: [Function: welcomeMessage]
}*/
}
    

}

//user.welcomeMessage()
user.username="sam"
//user.welcomeMessage()

//console.log(this)//{}


function chai (){
    let username="aanchal"
    console.log(this)//global object
    console.log(this.username)//undefined cant use this in functions only objects 

}
//chai()

const chai1 = () => {
    let username="aanchal"
    console.log(this.username)//undefined 
    console.log(this)//{}
}
chai1()

//()=>{}

    const addTwo = (num1,num2) =>{
        return num1+num2
    }
    //console.log(addTwo(3,4));
    


//implicit return in arrow function
const AddTwo=(num1,num2) => (num1+num2)
const Objectreturn=(num1,num2) => ({sum: num1+num2})//{} reuired to return obj

console.log(Objectreturn(23,45));
