const path = require("path")

const product = require("../models/product")

module.exports = {
    index: (req,res) => res.render(path.resolve(__dirname,"..","views","index"),{product: product.all()}),
    show: (req,res) => res.render(path.resolve(__dirname,"..","views","show")),
    create: (req,res) => res.render(path.resolve(__dirname,"..","views","create")),
    edit: (req,res) => res.render(path.resolve(__dirname,"..","views","edit")),
    save: (req,res) => res.send(req.body),
    update: (req,res) => res.send(req.body),
    destroy: (req,res) => res.send(req.body),
}