const Router = require("express");
const router = new Router();
const subjectsControllers = require("../controllers/subjects.controllers");

router.get("/subjects", subjectsControllers.getSubjectsTitle);

module.exports = router;
