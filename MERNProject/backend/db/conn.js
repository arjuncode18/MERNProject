var mongoose=require("mongoose");
mongoose.connect('mongodb://localhost:27017/mern_batch2')
.then(()=>{
    console.log("connection to mongoDB Server")
})
.catch(()=>{
    console.log("connection error in mongoDB")
})