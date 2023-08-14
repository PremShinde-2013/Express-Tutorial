const express = require("express");
// const router = express();

const router = express.Router();

const {
  getPeople,
  createPerson,
  createPersonPostman,
  updatePerson,
  deleteperson,
} = require("../controllers/people");

//*************  controller routes *******************

// router.get("/", getPeople);
// router.post("/", createPerson);
// router.post("/postman", createPersonPostman);

// router.put("/:id", updatePerson);
// router.delete("/:id", deleteperson);
//  +++++++++++++  another way ++++++++
router.route("/").get(getPeople).post(createPerson);
router.route("/postman").post(createPersonPostman);
router.route("/:id").put(updatePerson).delete(deleteperson);

module.exports = router;
