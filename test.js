const mongoose = require('mongoose');
const students = require('./models/students')

mongoose.connect('mongodb://localhost/students', {useNewUrlParser:true})

/* students.create({
    apellidos:"Suarez",
    nombres:"David",
    ano:"2002",
    libro:"01",
    acta:"01"
},(error,student)=>{
    console.log(error,student)
}) */

/* const variable = "Suarez";
    students.find({apellidos : variable},(error,student)=>{
        console.log(error,student)
}) */

students.find({},(error,student)=>{
    console.log(error,student)
})

/* var id="60634fe284592909427f921e";
students.findByIdAndDelete(id,(error,student)=>{
    console.log(error,student)
}) */