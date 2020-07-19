const path = require("path")
const fs = require("fs")
module.exports = {
    all: () => JSON.parse(fs.readFileSync(path.resolve(__dirname,"..","data","products.json"))),
    one: (id) => JSON.parse(fs.readFileSync(path.resolve(__dirname,"..","data","products.json"))).find(p => p.id == id),
    add: (data) => fs.writeFileSync(path.resolve(__dirname,"..","data","products.json"),data)
}