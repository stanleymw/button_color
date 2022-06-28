// COMMENT
console.log("Hello World!");

const MyName = "Hello World! 2";
console.log(MyName);

let person = {
    name: 'Bob',
    age: 20,

};

person.name = "John";
console.log(person.name);

console.log(person);

// constants are declared with the const keyword
const data = [10, 20, 30] // a variable that can't be reassigned!
data[1] = "ha!" // but this is not variable reassignment!
console.log(data) // expected output: [10, 'ha!', 30]

const mult = (a,b) => (a*b)
console.log(mult(100,5))

function random(max) {
    return Math.floor(Math.random() * max) 
}


document.getElementById("changer").addEventListener("click", function() {
    // create a random color
    let r = random(255)
    let g = random(255)
    let b = random(255)
    //set body background
    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
})