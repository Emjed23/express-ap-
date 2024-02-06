const express=require('express');
const connectDB=require('./config/ConnectDb');
const app= express()
require('doenvt').config();
const port=process.env.port;
connectDB();
app.use(express.json());
app.use('/userAPI',require('./Routes/UserRoutes'));
app.listen(port,(err)=>err?console.log(err):console.log('app marche avec succee'+ port))