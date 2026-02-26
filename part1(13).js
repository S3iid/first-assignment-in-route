"use strict"
let x =[1, 3, 7, 2, 4]

function get_greatest(z){

    let greatest =z[0]
for(let i of z ){
if(i>greatest){

    greatest=i
}

}
return  greatest

}

console.log(get_greatest(x));

