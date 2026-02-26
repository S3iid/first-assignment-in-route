"use strict"

function sum (...x){
let sum =0
for (let i of x){

    sum+=i
}
return sum ;
}
console.log(sum ( 1, 2, 3, 4, 5 ))