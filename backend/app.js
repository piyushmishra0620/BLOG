const express = require('express');
const app = express();
const cors = require('cors');
const cookieparser = require('cookie-parser');
const authroutes = require('./Routes/authRoutes');
const {connectoDB}=require('./Connections/db');

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cors({
    origin:"https://blogify-gules-delta.vercel.app",
    credentials:true
}));

app.use(cookieparser());

connectoDB();
app.use('/auth',authroutes);

module.exports=app;
