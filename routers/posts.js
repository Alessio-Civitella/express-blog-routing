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

// update
router.patch("/:id", (req, res) => {
    const postId = req.params.id;
    res.json("Sono l'elemento modificato" + postId)
})


module.exports = router;