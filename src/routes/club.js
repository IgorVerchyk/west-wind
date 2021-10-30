const router = require("express").Router();
const clubController = require("../controllers/clubControllers");
const isAuth = require('../middleware/auth.middleware')

router.get("/getContent", clubController.getContent);

router.post("/createContent",isAuth, clubController.createContent);

router.delete('/removeContent',isAuth, clubController.removeContent);

module.exports = router;