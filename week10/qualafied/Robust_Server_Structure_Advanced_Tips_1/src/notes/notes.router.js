const router = require("express").Router({ mergeParams: true });
const controller = require("./notes.controller");
const methodNotAllowed = require("../methodNotAllowed");
const ratingsRouter = require("./ratings.router");
// router.route("/:noteId/ratings/:ratingId").get(controller.readRating);

//router.use /noteExists/ ratingsrouter
router.use("/:noteId/ratings", controller.noteExists, ratingsRouter);

router.route("/:noteId").get(controller.read).all(methodNotAllowed);
// .put(controller.update)
// .delete(controller.delete);

router.route("/").get(controller.list).all(methodNotAllowed); //.post(controller.create);

module.exports = router;
