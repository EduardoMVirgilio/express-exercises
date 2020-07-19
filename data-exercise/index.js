const express = require("express")
const app = express();

// Aplication Settings
app.listen(3000,"localhost",() => console.log("Server Start in http://localhost:3000"))

app.set("view engine","ejs")

// Aplication Middleware

app.use(express.json())

app.use(express.urlencoded({extended:false}))

const methodOverride = require("method-override");

app.use(methodOverride("_method"))

// Aplication Routes

app.use(require("./routes/product"))
