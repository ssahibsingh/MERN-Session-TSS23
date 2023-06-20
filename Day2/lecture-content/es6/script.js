// ! Template Literals
// let name = "Sahib"
// let para = `lroem ipsum dolor sit amet consectetur adipisicing elit.
// akmslax
// kasxmasmkxlm`;
// console.log(para)



// ! Arrow Functions

// Simple function
// function add(a, b) {
//     return a + b;
// }


// Arrow function
// let add = (a, b) => a + b
// console.log(add(2, 3))


// ! Destructing

// let names = ["Sahib", "Rahul", "Adamya"]

// // Destructing Array
// let [name1, name2, name3] = names
// console.log(name1, name2, name3)

// Destructing Object

// let vehicle = {
//     model: "hello",
//     nameOfVehicle: "anksk"
// }

// let {model, nameOfVehicle} = vehicle

// console.log(model, nameOfVehicle)

// ! Spread Operator
// ... - > Spread Operator
// let names = ["Sahib", "Rahul", "Adamya"]
// let names2 = ["Pariansh", "Naman"]

// let names3 = [...names, ...names2]
// console.log(names3)

// ----------------------------------------
// Event handling

let btn =document.getElementById('onclick')
btn.addEventListener('click', ()=>{
    console.log('Clicked')
})