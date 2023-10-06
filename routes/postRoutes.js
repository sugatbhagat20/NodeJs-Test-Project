const express = require("express");
const router = express.Router();
const postController = require("../controllers/postController");

router.use(express.static("public"));
router.get("/", postController.getHomePage);
router.get("/posts", postController.getPosts);

router.post("/addPost", postController.addPost);

module.exports = router;
