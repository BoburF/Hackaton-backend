const router = require("express").Router();
const category = require("../controller/category.js");
const list = require("../controller/list.js");
const { verifyToken } = require("../controller/admin.js");
const fs = require("fs");
const path = require("path");

router.get("/categories", category.get);
router.get("/list", list.get);
router.get("/verify", verifyToken)
router.get("/img/:name", (req, res) => {
  const name = req.params.name
  const stream = fs.createWriteStream(path.join(__dirname, "/public/", name))

  stream.pipe(res)
})

module.exports = router;
