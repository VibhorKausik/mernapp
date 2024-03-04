const express = require('express');
const App= express();
const port=3100;
const mongoDB = require('./db')
mongoDB();
App.use((res,req,next)=>{
    res.header("Access-Control-Allow-Origin","http://localhost:3000");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
})


App.use(express.json());
App.use('/api/createuser', require("./routes/createuser"));

App.get('/',(req,res) => {
    res.send('vibhorkaushik')
})
App.listen(port, () => {
    console.log(`sample ${port}`)
})
