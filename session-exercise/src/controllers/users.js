const path = require("path")
const orm = require("../models/index")
const bcrypt = require("bcrypt")

module.exports = {
    index: (req,res) => res.render(path.resolve(__dirname,"..","views","index")),
    login: (req,res) => res.render(path.resolve(__dirname,"..","views","login")),
    register: (req,res) => res.render(path.resolve(__dirname,"..","views","register")),
    access: (req,res) => {
        let user = orm.one("users.json","email",req.body.email)
        if (user){
            if(bcrypt.compareSync(req.body.password,user.password)){
                delete user.password
                req.session.user = user
                res.redirect("/")
            }else{
                let errors = [{field: "password",msg:"not match password"},]
                res.render(path.resolve(__dirname,"..","views","login"),{errors,old:req.body})
            }
        }else{
            let errors = [{field: "email",msg:"not found email"}, {field: "password",msg:"not match password"}]
            res.render(path.resolve(__dirname,"..","views","login"),{errors,old:req.body})
        }
    },
    save: (req,res) => {
        let users = orm.index("users.json")
        let lastUser = users[users.length -1] 
        req.body.id = lastUser ? lastUser.id + 1 : 1 
        req.body.password = bcrypt.hashSync(req.body.password,10)
        users.push(req.body)
        orm.write("users.json",users)
        res.redirect("/")
    },
    exit: (req,res) => {
        delete req.session.user
        res.redirect("/")
    }
}