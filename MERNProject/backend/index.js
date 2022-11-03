const express = require('express');
const app = express();
var cors=require("cors");
app.use(cors());
const port=5000;
///////db connect///////
require("./db/conn");
/////model import//
var Register=require("./Model/register");
//////////to receive body data
app.use(express.json());
/////////register api////////////
app.post('/register', async (req, res) => {
    const { name, email, mobile, address, password, conpassword } = req.body
    if (name && email && mobile && address && password && conpassword) 
    {
      const user = await Register.findOne({ email })
      if (user) {
        res.send({ "message": "Email already exists" })
      }
      else {
  
        if (password === conpassword) {
          let register = new Register({ name, email, mobile, address, password,conpassword});
          let data = await register.save();
          res.send(data);
        }
        else {
          res.send({ "message": "Password and Confirm Password doesn't match" })
        }
      }
    }
    else {
      res.send({ "message": "All fields are required" })
    }
  });
////////////fetch/////////////////////

app.get('/fetch', async(req, res) => {
  const userList = await Register.find()
  res.send(userList)
});










app.listen(port,()=>{
    console.log("App running on port "+port);
    console.log(`http://localhost:${port}`)
});