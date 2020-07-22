const express = require("express")
const app = express();

// Aplication Settings
app.listen(3000,"localhost",() => console.log("Start on http://localhost:3000"))

app.set("view engine","ejs")

// Aplication Middleware

app.use(express.json())

app.use(express.urlencoded({extended:false}))

const cookie = require("cookie-parser")

app.use(cookie())

const session = require("express-session")

app.use(session({
    secret:"1234",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
}))

// Aplication Routes

app.use(require("./routes/users"))