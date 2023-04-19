
// Slice 

var array = [1,2,3,4,5,6,7,8,9]

var slice = array.slice(2,6)
console.log(slice)

// Splice 

var array =["nasir","zia","lakki"]

var splice= array.splice(0,2)
console.log(splice,array)


// concat method

var number = [1,2,3,4,5,6]
var number2=[7,8,9,10,11]
var number3=number.concat(number2)
console.log(number3)


// sort
var array= ['a','c','b','e']

array.sort()
console.log(array)

// reverse array

var array= ['a','c','b','e']

array.reverse()
console.log(array)

// pop


var array= ['a','c','b','e']

array.pop()
console.log(array)

// push

var array= ['a','c','b','e']

array.push("f")
console.log(array)

// shift

var array= ['a','c','b','e']

array.shift()
console.log(array)


// unshift

var array= ['a','c','b','e']

array.unshift("g")
console.log(array)


// jion method

var array= ['a','c','b','e']
var array2=['f','g']

var array3=array.concat(array2)
var array4=array3.join("")
console.log(array4)

// to string

var array= ["sports","cricket","football"]

array.toString()
console.log(array)


// fill

var array= ['a','c','b','e']

array.fill("g")
console.log(array)

// for each

var array= ['a','c','b','e']

// array.forEach((function(value,index){
//     console.log(index,": ",value)
// }))
array.forEach(a);
function a (value,index){
    console.log(index,": ",value)
}


// map

var array1 = [1,2,3,4,5];
var array2 = array1.map(x => x * 4);

console.log(array2);

// 2nd method of map

var array1 = [1,2,3,4,5];
var array2 =array1.map(test);
function test(x){
    return x *5
}
console.log(array2)


// filter

var array1 = [10,20,30,40,50];
var array2 =array1.filter(Number);

function Number(price){
    return price > 20
}
console.log("Price range  ",":",array2)