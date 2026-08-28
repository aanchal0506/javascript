//Immediately Invoked Function Expression 
//due to global scope pollution , to remove it we use iife
//(function definition)(function execution immediately)

(function chai(){
    //named IIFE
    console.log("heh");
    
})();//to end this use semicolon

(()=>{
    //write something
})();


((name)=>{
    //Unnamed IFEE
    console.log(`hello ${name}`)
})("aanchal");