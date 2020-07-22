const router = require("express").Router()

const controller = require("../controllers/users")

router.get("/",controller.index)

router.get("/login",controller.login)

router.get("/register",controller.register)

router.post("/login",controller.access)

router.post("/register",controller.save)

module.exports = router;