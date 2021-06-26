const router = require("express").Router();
const usersController = require("../controllers/users.controllers");

/* GET home page */
router.get("/", usersController.index)
router.get("/list", usersController.list);

router.get("/create", usersController.create);
router.post("/create", usersController.doCreate);

router.get("/login", usersController.login);
router.post("/login", usersController.doLogin);

module.exports = router;