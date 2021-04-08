const express = require('express')
const path = require('path')
const app = new express()
const ejs=require('ejs')
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Students = require('./models/students');

app.set('view engine','ejs')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

mongoose.connect('mongodb://localhost/students', {useNewUrlParser:true});

app.use(express.static('public'));

app.listen(5000, ()=>{
    console.log("APP listening on port 5000")
})

app.get('/',async(req,res)=>{
    const students = await Students.find({})
    res.render('index',{
        students
    });
    //res.sendFile(path.resolve(__dirname, 'pages/index.html'))
})

app.get('/contact',(req,res)=>{
    //res.sendFile(path.resolve(__dirname, 'pages/contact.html'))
    res.render('contact');
})

app.get('/notFound',(req,res)=>{
    //res.sendFile(path.resolve(__dirname, 'pages/contact.html'))
    res.render('notFound');
})

app.get('/post',(req,res)=>{
    //res.sendFile(path.resolve(__dirname, 'pages/post.html'))
    res.render('post');
})

app.get('/about',(req,res)=>{
    //res.sendFile(path.resolve(__dirname, 'pages/about.html'))
    res.render('about');
})

app.get('/posts/new',(req,res)=>{
    //res.sendFile(path.resolve(__dirname, 'pages/create.html'))
    res.render('create');
})

app.get('/posts/verify',(req,res)=>{
    //res.sendFile(path.resolve(__dirname, 'pages/create.html'))
    res.render('verify');
})

app.get('/posts/found',(req,res)=>{
    //res.sendFile(path.resolve(__dirname, 'pages/create.html'))
    res.render('studentFound');
})

app.post('/posts/store', async(req,res)=>{
    await Students.create(req.body)
    res.redirect('/')
})

app.post('/posts/verificar', async(req,res)=>{
    const variable = req.body.docIdentidad;
    Students.findOne({docIdentidad : variable},(error, student1)=>{
        if (student1){
            console.log(error,student1)
            res.render('studentFound',{
                student1
            }); 
        }
        else{
            res.render('notFound');
        }
        //console.log(error,student)
    })
})

