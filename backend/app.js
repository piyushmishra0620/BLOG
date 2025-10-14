const express = require('express');
const app = express();
const cors = require('cors');
const cookieparser = require('cookie-parser');
const authroutes = require('./Routes/authRoutes');

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cors());
app.use(cookieparser());

app.use('/auth',authroutes);

module.exports=app;
