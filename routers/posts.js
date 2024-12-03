const express = require("express");
const router = express.Router();
const postslist = require("../data");

// index
router.get("/", (req, res) => {
    res.json("Sono index");
});

// create
router.post("/", (req, res) => {
    res.json("sono il nuovo elemento");
})

module.exports = router;