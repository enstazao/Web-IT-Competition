const app = require("express");
const router = app.Router();

const { createEvent } = require("../controllers/EventController");
const auth = require("../Middlewares/auth");

router.post("/user/addProfile", auth, createEvent);

module.exports = router;
