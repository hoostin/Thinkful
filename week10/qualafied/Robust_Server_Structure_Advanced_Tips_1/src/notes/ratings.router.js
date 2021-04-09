const router = require("express").Router({ mergeParams: true });
const controller = require("./ratings.controller");
const methodNotAllowed = require("../methodNotAllowed");

router.route("/:ratingId").get(controller.read).all(methodNotAllowed);
router.route("/").get(controller.list).all(methodNotAllowed);

module.exports = router;
