const express = require("express");
const router = express.Router();

const objectControllers = require("../controllers/objects");
const uploadFile = require("../config/multer");

router
  .route("/")
  .get(objectControllers.index)
  .post(objectControllers.addNewObject);

router.route("/new").get(objectControllers.renderNewObjectForm);

router
  .route("/load-excel")
  .post(uploadFile.single("load-excel"), objectControllers.loadFromExcel);

router.route("/:objectId").delete(objectControllers.deleteObject);

module.exports = router;
