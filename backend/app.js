const app = require('express');
const server = app();
const cors = require('cors');
const cookieparser = require('cookie-parser');
const authroutes = require('./Routes/authRoutes');

server.use(app.urlencoded({extended:true}));
server.use(app.json());
server.use(cors);
server.use(cookieparser());

server.use('/auth',authroutes);

module.exports=server;
