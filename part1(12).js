"use strict"
function wait_for_three_seconds() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("hello world");
        }, 3000); 
    });
}
console.log(
    wait_for_three_seconds().then(
        (result)=>console.log(result)
    )
)