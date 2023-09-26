const controller = require("../controllers/logs");
const router = require("express").Router();

// CRUD Routes /logs
router.get("/", controller.getLogs); // /logs
router.get("/:logId", controller.getLog); // /logs/:logId
router.post("/", controller.createLog); // /logs
router.put("/:logId", controller.updateLog); // /logs/:logId
router.delete("/:logId", controller.deleteLog); // /logs/:logId

module.exports = router;
