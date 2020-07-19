const path = require("path")

const product = require("../models/product")

module.exports = {
    index: (req,res) => res.render(path.resolve(__dirname,"..","views","index.ejs"),{products: product.all()}),
    show: (req,res) => res.render(path.resolve(__dirname,"..","views","show"),{ product: product.one(req.params.id)}),
    create: (req,res) => res.render(path.resolve(__dirname,"..","views","create")),
    edit: (req,res) => res.render(path.resolve(__dirname,"..","views","edit"),{ product: product.one(req.params.id)}),
    save: (req,res) => {
        let products = product.all()
        let lastProductId = products[products.length - 1] ? products[products.length - 1].id : 0
        req.body.id = lastProductId = lastProductId + 1
        products.push(req.body)
        product.add(JSON.stringify(products,null,2))
        res.redirect("/")
    },
    update: (req,res) => {
        let products = product.all()

        products.map( (product) => {
            if ( product.id == req.body.id ) {
                    product.title = req.body.title
                    product.price = req.body.price
                    product.description = req.body.description
                    return product
            }
                return product;
            }
        ) 

        product.add(JSON.stringify(products,null,2))

        res.redirect("/")
    },
    destroy: (req,res) => {
        let products = product.all()

        let filterProduct = products.filter( (product) => product.id != req.params.id ) 
            
        product.add(JSON.stringify(filterProduct,null,2))

        res.redirect("/")
    },
}