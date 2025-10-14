const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { users } = require('../Models/users');
const {googleUsers} = require('../Models/googleusers');
const { OAuth2Client} = require('google-auth-library');
const clientId = process.env.CLIENT_ID;
const clientSecret = process.env.CLIENT_SECRET ;

const signup = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const existinguser = await users.findOne({ emailid: email });
        if (existinguser) {
            return res.status(401).json({ error: "User already exists with this emailid and password." });
        }
        const salt = await bcrypt.genSalt(12);
        const hashedpassword = await bcrypt.hash(password, salt);
        const user = await users.create({ username: username, emailid: email, password: hashedpassword });
        const token = jwt.sign({ id: user._id, username: username, emailid: email, password: hashedpassword }, process.env.JWT_SECRET);
        res.cookie("token", token, {
            httpOnly: true,
            sameSite: "strict",
            domain: "vercel.app",
            maxAge: 12 * 365 * 24 * 60 * 60,
            expires: new Date(Date.now() + 12 * 365 * 24 * 60 * 60),
            secure: process.env.NODE_ENV === "production"
        });
        res.cookie("token", token, {
            httpOnly: true,
            sameSite: "strict",
            domain: "netlify.app",
            maxAge: 12 * 365 * 24 * 60 * 60,
            expires: new Date(Date.now() + 12 * 365 * 24 * 60 * 60),
            secure: process.env.NODE_ENV === "production"
        });
        res.cookie("token", token, {
            httpOnly: true,
            sameSite: "strict",
            maxAge: 12 * 365 * 24 * 60 * 60,
            expires: new Date(Date.now() + 12 * 365 * 24 * 60 * 60),
            secure: process.env.NODE_ENV === "production"
        });
        return res.status(200).json({ message: "User signup successfully." });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: "Internal server error." });
    }
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const existinguser = await users.findOne({ emailid: email });
        if (!existinguser) {
            return res.status(400).json({ error: "User doesnot exist with this emailid" });
        }
        const hashedpassword = await bcrypt.compare(password, existinguser.password);
        if (!hashedpassword) {
            return res.status(400).jso({ error: "Incorrect password provided." });
        }
        const token = jwt.sign({ id: existinguser._id, emailid: existinguser.emailid, password: existinguser.password }, process.env.JWT_SECRET);
        res.cookie("token", token, {
            httpOnly: true,
            sameSite: "strict",
            domain: "vercel.app",
            maxAge: 12 * 365 * 24 * 60 * 60,
            expires: new Date(Date.now() + 12 * 365 * 24 * 60 * 60),
            secure: process.env.NODE_ENV === "production"
        });
        res.cookie("token", token, {
            httpOnly: true,
            sameSite: "strict",
            domain: "netlify.app",
            maxAge: 12 * 365 * 24 * 60 * 60,
            expires: new Date(Date.now() + 12 * 365 * 24 * 60 * 60),
            secure: process.env.NODE_ENV === "production"
        });
        res.cookie("token", token, {
            httpOnly: true,
            sameSite: "strict",
            maxAge: 12 * 365 * 24 * 60 * 60,
            expires: new Date(Date.now() + 12 * 365 * 24 * 60 * 60),
            secure: process.env.NODE_ENV === "production"
        });
        return res.status(200).json({ message: "User logged in successfully." });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: "Internal server error occurred." });
    }
}

const logout = (req, res) => {
    res.clearCookie("token", {
        httpOnly: true,
        sameSite: "strict",
        domain: "vercel.app",
        maxAge: 12 * 365 * 24 * 60 * 60,
        expires: new Date(Date.now() + 12 * 365 * 24 * 60 * 60),
        secure: process.env.NODE_ENV === "production"
    });
    res.clearCookie("token", {
        httpOnly: true,
        sameSite: "strict",
        domain: "netlify.app",
        maxAge: 12 * 365 * 24 * 60 * 60,
        expires: new Date(Date.now() + 12 * 365 * 24 * 60 * 60),
        secure: process.env.NODE_ENV === "production"
    });
    res.clearCookie("token", {
        httpOnly: true,
        sameSite: "strict",
        maxAge: 12 * 365 * 24 * 60 * 60,
        expires: new Date(Date.now() + 12 * 365 * 24 * 60 * 60),
        secure: process.env.NODE_ENV === "production"
    });
}

const getuser = (req, res) => {
    try {
        const user = req.user;
        if (!user) {
            return res.status(404).json({ error: "Unauthorized access." });
        }
        return res.status(200).json(user);
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: "Internal Server error." });
    }
}

const googleLogin = async (req, res) => {
    try {
        const { code } = req.body;
        const client = new OAuth2Client({
            clientId: clientId,
            clientSecret: clientSecret,
            redirectUri: 'postmessage'
        });
        const { tokens } = await client.getToken(code);
        client.setCredentials(tokens);
        const userInfo = await client.request({
            url: "https://www.googleapis.com/oauth2/v3/userinfo",
            method: "GET"
        });
        const user = userInfo.data;
        const existinguser = await googleUsers.findByEmail(user.email);
        if (!existinguser) {
            const createUser = await googleUsers.create({ username: user.name, emailid: user.email, image:user.image});
        }
        const JWTtoken = jwt.sign({ id: user.sub, username: user.name, email: user.email, image: user.image }, process.env.JWT_SECRET);
        res.cookie("token", JWTtoken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "none",
            maxAge: 12 * 365 * 24 * 60 * 60,
            expires: new Date(Date.now() + 12 * 365 * 24 * 60 * 60)
        });
        res.cookie("token", JWTtoken, {
            domain:"vercel.app",
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "none",
            maxAge: 12 * 365 * 24 * 60 * 60,
            expires: new Date(Date.now() + 12 * 365 * 24 * 60 * 60)
        });
        res.cookie("token", JWTtoken, {
            domain:"netlify.app",
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "none",
            maxAge: 12 * 365 * 24 * 60 * 60,
            expires: new Date(Date.now() + 12 * 365 * 24 * 60 * 60)
        });
        return res.status(200).json({ message: "Google Login successful.", user: user });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: "Internal Server Error." });
    }
}

module.exports = { signup, login, logout, getuser, googleLogin }
