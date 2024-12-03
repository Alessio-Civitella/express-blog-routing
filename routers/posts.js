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
router.put("/:id", (req, res) => {
    const postId = req.params.id;
    res.json("Sono l'elemento modificato" + postId)
})

//show
router.get("/:id", (req, res) => {
    const postId = req.params.id;
    res.json("Sono show" + postId)
})

//destroy
router.delete("/:id", (req, res) => {
    const postId = req.params.id;
    res.json("sono delete" + postId)
})


module.exports = router;