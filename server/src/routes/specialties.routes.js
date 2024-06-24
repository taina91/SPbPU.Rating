const Router = require("express");
const router = new Router();
const specialtiesControllers = require("../controllers/specialties.controllers");

router.get("/inst", specialtiesControllers.getAllInst);
router.get("/level", specialtiesControllers.getEduLevel);
router.get("/spec", specialtiesControllers.getSpec);
router.get("/specId", specialtiesControllers.getOneSpec);

module.exports = router;
