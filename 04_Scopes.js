

let a =300//global scope
if(true){//block scope
    let a = 10
    const b = 20
    var c = 30
    //console.log("inner:",a);
    
}



//console.log(a);
//console.log(b);
//console.log(c);

//nested scope

function one(){
    const username="hitesh"
    function two(){
        const web="youtube"
        console.log(username);
        
    }
    //console.log(web)//error cus block scope of web 
    two()
}
one()

addone(5)//can be accessed here
function addone(num1){
    return 1+num1
}
//num2(9,10) throws an error can be used before intialisation
const num2=function addTwo(num1,num2){
    return num1+num2
}