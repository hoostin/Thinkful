const router = require("express").Router({ mergeParams: true });
const controller = require("./movies.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");
const theaterRouter = require("../theaters/theaters.router");
const reviewRouter = require("../Review/review.router");

router.use("/:movieId/reviews", controller.movieExists, reviewRouter);
router.use("/:movieId/theaters", controller.movieExists, theaterRouter);
router.route("/:movieId").get(controller.read).all(methodNotAllowed);
router.route("/").get(controller.list).all(methodNotAllowed);

module.exports = router;
