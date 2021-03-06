//Route for posts
const router = require("express").Router();
const Post = require("../models/Post");

//Create post at MongoDB
router.post("/", async (req, res) => {
  const auth = req.currentUser;
  if (!auth) {
    res.status(403).send("Nicht autorisiert!");
    return;
  }

  const newPost = new Post(req.body);

  try {
    const savedPost = await newPost.save();

    res.status(200).json(savedPost);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Update post from MongoDB
router.put("/:id", async (req, res) => {
  const auth = req.currentUser;
  if (!auth) {
    res.status(403).send("Nicht autorisiert!");
    return;
  }

  try {
    const post = await Post.findById(req.params.id);

    if (post.username !== req.body.username) {
      res.status(401).json("Es können nur die eigenen Posts verändert werden!");
      return;
    }

    const updatedPost = await Post.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );

    res.status(200).json(updatedPost);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Delete post from MongoDB
router.delete("/:id", async (req, res) => {
  const auth = req.currentUser;
  if (!auth) {
    res.status(403).send("Nicht autorisiert!");
    return;
  }

  try {
    const post = await Post.findById(req.params.id);

    if (post.username !== req.body.username) {
      res.status(401).json("Nur die eigenen Posts können gelöscht werden!");
      return;
    }

    await post.delete();

    res.status(200).json("Post gelöscht...");
  } catch (err) {
    res.status(500).json(err);
  }
});

//Read post from MongoDB
router.get("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    res.status(200).json(post);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Read all post from MongoDB
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find();

    posts.reverse();

    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
