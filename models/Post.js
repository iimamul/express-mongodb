const mongoose=require('mongoose')

const PostSchema= mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default: Date.now
    }

    //also could be written as this wihtout validation
    // title:String,
    // description:String,
    // date:Date
})


module.exports= mongoose.model('Posts',PostSchema)
