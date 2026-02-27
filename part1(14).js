"use stirct"

function getKeys(obj) {
    if (!obj || typeof obj !== "object") {
        return "Invalid";
    }

    return Object.keys(obj);
}

let example ={name: "John", age: 30}


console.log(getKeys(example));
