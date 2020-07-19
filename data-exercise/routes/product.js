const router = require("express").Router();

const controller = require("../controllers/product")

router.get("/",controller.index)

router.get("/:id",controller.show)

router.get("/create",controller.create)

router.get("/:id/edit",controller.edit)

router.post("/save",controller.save)

router.put("/update",controller.update)

router.delete("/:id",controller.destroy)

module.exports = router