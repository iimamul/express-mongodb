const express= require('express')
const app = express()
const mongoose= require('mongoose')
const bodyParser=require('body-parser')
const cors= require('cors')
require('dotenv/config')

//Import Routes
const postsRoute=require('./routes/posts')


//Middleware
app.use(cors())

app.use(bodyParser.json()) //everytime we hit any url this bodyparser will run

app.use('/posts',postsRoute)



//Routes
app.get('/',(req,res)=>{
    res.send('Here is a simple api route')
})


//Connect to DB
mongoose.connect(process.env.DB_CONNECTION,()=>
    console.log('Connect to db')
)

//server will start listening to the mentioned port
app.listen(5000)