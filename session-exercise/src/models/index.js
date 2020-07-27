const path = require("path")
const fs = require("fs")

module.exports = {
    index : (file) => JSON.parse(fs.readFileSync(path.resolve(__dirname,"..","data",file),{encoding:"utf-8"})),
    one: (file,field,value) => JSON.parse(fs.readFileSync(path.resolve(__dirname,"..","data",file),{encoding:"utf-8"})).find(element => element[field] == value ),
    write: (file,data) => fs.writeFileSync(path.resolve(__dirname, "..","data",file),JSON.stringify(data,null,2))
}