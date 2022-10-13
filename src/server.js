const express= require('express');
const mongoose = require('mongoose')
const cors= require("cors")
require("dotenv").config();
const {farmerRouter} =require('./routes/alldata/alldata.route')
const {landRouter} = require('./routes/land/land.route')
const{marketRouter} =require('./routes/market/market.route')
const PORT = process.env.PORT || 8000;
const app = express();
app.use(express.json());
app.use(cors());

app.get('/',(req,res)=>{
  res.send("hii there");
});

app.use(farmerRouter);
app.use(landRouter);
app.use(marketRouter);

const MONGO_URL = process.env.MONGODB_URI || "mongodb://localhost:2027";


mongoose.connection.once('open',()=>{
   console.log('mongoDB connection ready!')
 })
 mongoose.connection.on('error',(err)=>{
 console.error(err);
 })

async function StartServer(){
   await mongoose.connect(MONGO_URL,{
     useNewUrlParser:true,
    //useFindAndModify:false,
   //  useCreateIndex:true,
     useUnifiedTopology:true,
   });  
   app.listen(PORT,()=>{
      console.log(`listening ar port ${PORT}`);
     })
   
 }
 
 StartServer();



