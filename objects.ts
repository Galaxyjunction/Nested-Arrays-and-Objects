// Objects => {} => {key: value} pair

let user = {
    firstName: "Taha",
    lastName: "Atif",
    age: 40,
}
console.log(user.firstName)

let student = {
    fullName: "Kehkashan",
    classDay: "Tuesday",
    rollNo: 434132,
    email: "kehkashan.sidd@gmail.com",
    isPassed: true,
    subjects: ["English", "Maths", "Programing"],
}
console.log(student.fullName)
console.log(student.classDay)
console.log(student.rollNo)
console.log(student.email)
console.log(student.isPassed)
console.log(student.subjects[0])

let student2 = {
    full_name: "Wajiha",
    class_day: "Tuesday",
    roll_number: 434135 ,
    emailId: "wajiha123@hotmail.com",
    is_passed: true ,
    subject: ["English", "Maths", "Programing"],
}

let students = [student, student2 ,{
    FullName: "Sadia",
    RollNumber: 434136,
    ClassDay: "Tuesday",
    email: "sadia789@gmail.com",
    IsPassed: true,
    subjects: ["English", "Maths", "Programing"],
}
]

// object {}
//Example of nested array and object
 let myPlants = [
    {type: "Flowers",
list: [
    "Rose",
    "Tulip",
    "Dandelion",
]
},
{type:
"Trees",
list : [
    "Pine",
    "Acacia",
    "Birch",
]
}
 ]
 console.log(myPlants);
 

// Example of nested objectes
// let object = { { [] } }

 let system = { 
    laptop: "Dell",
    windows: 10 ,
     configuration: {
    ram: "8GB",
    is_upgraded: true,
    properties: ["numeric keys", "letter keys", "special keys" ]
}}

//Another Example { { { } } }

let buyerData = { 
    buyerName : "Atif",
    required : true,
},
buyerDeliveryAddress = {
    type:{
    address: "Shah Faisal Town",
    city : "Karachi",
    postalCode : 75230,
    country : "Pakistan",
 }, 
 required: true,
},
buyerPhone = {
    number: 332332286,
    required : true,
},
buyerCart= {
    type:{
    productName: "Neutrogena",
    productId: 1234,
    productQuantity : 4,
    productPrice: 18000,
 },
}
