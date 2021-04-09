const router = require("express").Router();
const controller = require("./notes.controller");

// possible methods for noteid
router
  .route("/:noteId")
  .get(controller.read)
  .put(controller.update)
  .delete(controller.delete);

// possible methods for /
router.route("/").get(controller.list).post(controller.create);

module.exports = router;
