const mongoose = require('mongoose');
// const mongoURL = 'mongodb+srv://foody:mern123@cluster0.ysrn5zl.mongodb.net/foody?retryWrites=true&w=majority'
const mongoURL = 'mongodb://foody:mern123@ac-mddzi9p-shard-00-00.ysrn5zl.mongodb.net:27017,ac-mddzi9p-shard-00-01.ysrn5zl.mongodb.net:27017,ac-mddzi9p-shard-00-02.ysrn5zl.mongodb.net:27017/foody?ssl=true&replicaSet=atlas-lhheuh-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0'
const mongoDB = async() =>{
await mongoose.connect(mongoURL, { usenewUrlParser: true},async(err,result)=>{
    if(err)console.log("---",err)
    else{
    console.log('connected');
    const fetched_data = mongoose.connection.db.collection("food_items");
    fetched_data.find({}).toArray(function(err, data){
    if(err) console.log(err);
    // else console.log(data);  // this line is used to represent data in our terminal
    })
    }
});
}
module.exports = mongoDB;

