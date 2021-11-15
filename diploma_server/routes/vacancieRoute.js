const { Router } = require("express");
const { vacancieController } = require("../controllers");
const router = Router();

router.get("/", vacancieController.getAllVacancies);
router.get("/:id", vacancieController.getVacancieById);

module.exports = router;
