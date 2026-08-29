// for of

//["","",""]
//[{},{},{}]

const arr =[1,2,3,4,5]
for (const i of arr) {
    //console.log(i);
    }
const greeting = "hello world"
for(const i of greeting){
    //console.log(`Each character is ${i}`);
}

//Maps
const map= new Map()
map.set('IN',"India")
map.set('USA',"United States of AMerica")
map.set('FR',"France")
// console.log(map)

for(const [key,value] of map){
    //console.log(key,"+",value);
    }
    
const myObject = {
    'game1':'cricket',
    'game2':'chess'
}
// for (const [key,value] of myObject) {
//     //console.log(key,'+',value)//error non iterable
// }

const myObject1 = {
    js:'javascript',
    cpp:'c++'
}
for (const key in myObject1) {
    //console.log(myObject1[key]);
    }
const num=[1,2,3,4]
for (const key in num) {
      //console.log(arr[key])
}
//maps are not iterable

const coding =['js','ruby','java','python']
// coding.forEach(function (item) {
//     console.log(item);
    
// });
// coding.forEach(item=>{
//      console.log(item);
// })

// function printMe(item){
//     console.log(item)
// }
// coding.forEach(printMe)//give reference of function , do not callit

// coding.forEach((item , index ,arr)=>{
//     console.log(item," ",index,arr)
// })

const myCode=[
    {
        lang:"javascript",
        langFile:"js"
    },
    {
        lang:"java",
        langFile:"java"
    },
    {
        lang:"python",
        langFile:"py"
    }
]

myCode.forEach((item)=>{
    console.log(item.lang," ",item.langFile)
})