const nome = require("./names");
const hobbies = require("./hobbies");


function person(){
    let nameObj = nome("Andrea", "Aceto");
    // let name = nameObj.firstName;
    // let surname = nameObj.lastName;
    let fullName = nameObj.firstName + " " + nameObj.lastName;  
    let hobby = hobbies("calcio", "tennis", "basket")
    return {
        fullName, 
        hobby
    }
}

console.log(person());




