const express = require("express");

const router = express.Router();
const Blog = require("../models/blog");
const blogController = require("../controllers/blogController");

router.get("/blogs/create", blogController.blogs_create_get);

router.get("/blogs", blogController.blog_index);

router.post("/blogs", blogController.blog_create_post);

router.get("/blogs/:id", blogController.blog_details);

router.delete("/blogs/:id", blogController.blog_delete);

module.exports = router;
