const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();
const homeRoutes = require('./routes/homeRoutes');

//Middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(homeRoutes);

app.use((req,res,next)=>{
    console.log(req.path, req.method);
    next();
});

//Connecting to MongoDB
mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(()=>{
        //listen for requests
        app.listen(process.env.PORT, ()=>{
            console.log("connected to db & listening on port",process.env.PORT);
        })
    })
    .catch((err)=>{
        console.log(err);
    })