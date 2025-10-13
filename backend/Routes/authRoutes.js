const app = require('express');
const server = app();
const {protected} = require('../Middlewares/authMiddlewares');
const {signup,login,logout,getuser,googleLogin} = require('../Controllers/authControllers');

server.post("/signup",signup);
server.post("/login",login);
server.post("/logout",logout);
server.get("/protected",protected,getuser);
server.post("/google",googleLogin);

module.exports = server;
