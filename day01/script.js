// topics to learn:

// Fundamentals of js
// arrays and objects 
// functions return
// async js coding

// foreach map filter find indexof

let arr = [2 , 4 , 6 , 8]
arr.forEach((elem)=>{
    // console.log(`${arr.indexOf(elem)} : ${elem}`);   
})


// map

let arr1 = ['amith' , 'amrutha' , 'sopan' , 'deepika']

let newarr = arr1.map((name)=>{
    return "name is " + name;
    
})

// console.log(newarr); // returns new array


// filter

const nums = [2 , 5 , 10 , 43 , 43 , 12 , 9  , 3]

const result = nums.filter((num)=>{
    return num>10
   
})

// console.log(result);

// find

let arr2 = [1 , 2 , 3 , 4 , 5 , 6]

const result1 = arr2.find((val)=>{
    if(val === 2) return val
})

// console.log(result1);


 
// objects

const obj  = {
    name : "amith",
    age : 18,
}

Object.freeze(obj)

// console.log(obj['name']);


// async 

async function getData(){
    const response = await fetch('https://randomuser.me/api/')
    const data = await response.json()
    console.log(data.results);
    
    console.log(`${data.results[0].name.title} ${data.results[0].name.first} ${data.results[0].name.last}`);
    
}

getData()
