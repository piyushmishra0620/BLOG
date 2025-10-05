const app = require('express');
const server = app();
const {protected} = require('../Middlewares/authMiddlewares');
const {signup,login,logout,getuser} = require('../Controllers/authControllers');
server.post("/signup",signup);
server.post("/login",login);
server.post("/logout",logout);
server.get("/protected",protected,getuser);

module.exports = server;
