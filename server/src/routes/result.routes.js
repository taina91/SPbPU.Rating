const Router = require("express");
const router = new Router();
const resultControllers = require("../controllers/result.controllers");

router.get("/result", resultControllers.getResult);

module.exports = router;
