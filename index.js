
var express = require("express")
var app = express()

const PostRoutes = require('./routes/PostRoutes')
var url ="mongodb://localhost:27017/MyMongoDB"
var mongoose= require('mongoose')
// require post routers
app.use (express.json())

// middle ware

app.use((req,res,next)=>{
    console.log(req.path,req.method)
    next()
})
//-----------all riutes
app.use('/posts', PostRoutes)



mongoose.connect(url)
.then(()=>{
    app.listen(4000,()=>{
        console.log("server is runing on port 4000")
    })

}).catch((error)=>{console.error(error);})
