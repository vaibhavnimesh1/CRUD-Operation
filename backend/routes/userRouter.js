const express = require("express");
const cors = require("cors");

const User = require("../models/user.model.js");

const router = express.Router();
const app = express();
app.use(express.json());
app.use(cors())

router.get("/",cors(), async (req, res) => {
  try {
    const showAll = await User.find();

    res.send(showAll);
    // This sends a plain text response
  } catch (error) {
    console.error("Error retrieving users:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//update

router.post("/create", async (req, res) => {
  try {
    const { name, email, age } = req.body;
    // console.log(req.body);
    const userAdded = await User.create({
      name: name,
      age: age,
      email: email,
    });
    console.log(userAdded);
    res.status(201).json(userAdded);
  } catch (error) {
    console.error("Error adding user:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//delete

// router.get("/:id", async (req, res) => {
//   const { id } = req.params;
//   try {
//     const deletUser = await User.findByIdAndDelete({ _id: id });

//     res.json(deletUser);
//   } catch (error) {
//     console.error("Error retrieving users:", error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });

//update
// router.get("/:id", async (req, res) => {
//   const { id } = req.params;
//   try {
//     const singleUserFind = await User.findById({ _id: id });

//     res.json(singleUserFind);
//   } catch (error) {
//     console.error("Error retrieving users:", error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });

module.exports = router;
