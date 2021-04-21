const router = require("express").Router();
const controller = require("./plants.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");
const cors = require("cors");

const corsAny = cors({ methods: "GET,HEAD,PUT,PATCH,POST,DELETE" });

router
  .route("/:plantId")
  .all(corsAny)
  .get(controller.read)
  .options(corsAny)
  .put(controller.update)
  .delete(controller.delete)
  .all(methodNotAllowed);

router
  .route("/")
  .all(corsAny)
  .options(corsAny)
  .get(controller.list)
  .post(controller.create)
  .all(methodNotAllowed);

module.exports = router;
