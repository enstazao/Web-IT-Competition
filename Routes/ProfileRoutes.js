const app = require("express");
const router = app.Router();

const { addProfile } = require("../controllers/ProfileController");
const auth = require("../Middlewares/auth");

router.post("/user/addProfile", auth, addProfile);

module.exports = router;
