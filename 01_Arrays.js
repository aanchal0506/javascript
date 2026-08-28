const myArray=[0,1,2,3,4,5]

//javascript arrays can be resizeable, can have mixed datatype
//arrays are acceseed using array

// console.log(myArray[3]);
// //arrays create shallow copy=>same reference

// const myHeros=['shakiman','spiderman']

// const Arr=new Array(1,2,3,4,5)
// console.log(Arr[0]);

//Array methods

// Arr.push(6)
// Arr.push(7)
// Arr.pop()
// Arr.unshift(9)//insert array start
// Arr.shift()//to remove 1st element in array


// console.log(Arr.includes(9)) //false
// console.log(Arr.indexOf(9)) //-1
// console.log(Arr.indexOf(3)) //2


// const newArray=Arr.join()

// console.log(Arr);
// console.log(newArray);//convverted into string


//slice ,splice

// console.log("A ",Arr)

// const mya1=Arr.slice(1,3)
// console.log(mya1);

// console.log("B ",Arr)

// const mya2=Arr.splice(1,3)

// console.log("C ",Arr)
// console.log(mya2)

const marvel_heros=['thor','ironman','spiderman']
const dc=['superman','flash','batman']

// marvel_heros.push(dc)//push on existing array

// console.log(marvel_heros)//array of arrays

// const Allhero=marvel_heros.concat(dc)//concat returns new array
// console.log(Allhero)

const all_heros=[...marvel_heros,...dc]
//console.log(all_heros);

const anotherarr=[1,2,3,[4,5,6],7,[4,5,6,[5,6]]]
const real=anotherarr.flat(Infinity)
//console.log(real);


console.log(Array.isArray("aanchal"))
console.log(Array.from("aanchal"))
console.log(Array.from({//gives empty array if you dont mention what to convert into an array keys or value
    name:"Annchal"
}))

let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3))