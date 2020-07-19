const router = require("express").Router();

const controller = require("../controllers/product")

router.get("/",controller.index)

router.get("/create",controller.create)

router.post("/save",controller.save)

router.put("/update",controller.update)

router.get("/:id",controller.show)

router.get("/:id/edit",controller.edit)

router.delete("/:id",controller.destroy)

module.exports = router