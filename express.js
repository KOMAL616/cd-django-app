const express=require('express');
const path=require('path');
const bodyParser=require('body-parser');
const app=express();
const port=4000;
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.json());

app.get("/api/v1/userdata" ,(req,res)=>{
    res.json({
        name:"srushti",
        email:"komal@gmail.com",
        password:"Komal@123",
    });
});
app.post("/api/v1/register" ,(req,res)=>{
  const userName=req.body.name;
  const userEmail=req.body.email;
  const userPassword=req.body.password;

  res.json({
    success:true,
    name:userName,
    email:userEmail,
    password:userPassword,
});
});
app.listen(port, ()=>{
    console.log('Server is working properly : ${port}');
});
