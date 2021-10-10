const express = require("express");
const router = express.Router();
const playerController = require("../controllers/player.controller");

router.post("/create", playerController.create);
router.get("/read", playerController.read);
router.delete("/delete", playerController.delete);
router.put("/update", playerController.update);
router.post("/find", playerController.find);

module.exports = router;
