const path = require("path")
module.exports = {
    index: (req,res) => res.render(path.resolve(__dirname,"..","views","index")),
    login: (req,res) => res.render(path.resolve(__dirname,"..","views","login")),
    register: (req,res) => res.render(path.resolve(__dirname,"..","views","register")),
    access: (req,res) => res.send(req.body),
    save: (req,res) => res.send(req.body),
}