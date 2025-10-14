const express = require('express');
const app = express();
const {protected} = require('../Middlewares/authMiddlewares');
const {signup,login,logout,getuser,googleLogin} = require('../Controllers/authControllers');

app.post("/signup",signup);
app.post("/login",login);
app.post("/logout",logout);
app.get("/protected",protected,getuser);
app.post("/google",googleLogin);

module.exports = app;
