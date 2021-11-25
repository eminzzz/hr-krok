const { Router } = require("express");
const { vacancieController } = require("../controllers");
const router = Router();

router.get("/hashtag", vacancieController.getAllHashTags);
router.put("/hashtag/:id", vacancieController.getHashTagByIdAndUpdate);
router.post("/hashtag", vacancieController.createHashTag);
router.delete("/hashtag/:id", vacancieController.deleteHashTag);

router.get("/", vacancieController.getAllVacancies);
router.get("/:id", vacancieController.getVacancieById);
router.post("/", vacancieController.createVacancie);
router.delete("/:id", vacancieController.deleteVacancie);
router.put("/:id", vacancieController.getVacancieByIdAndUpdate);

module.exports = router;
