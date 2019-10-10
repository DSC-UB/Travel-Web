let express = require('express');
let router = express.Router();
let Category = require("../models/category.model");
let Post = require("../models/post.model");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/category', getCategory);
router.get('/post', getPost);
router.get('/bycategory/:id', getPostByCategory);
router.get('/post/:id', getPostById);

function getCategory(req, res, next) {
  Category.find(function (err, categories) {
    if (err) return next(err);
    res.json(categories);
  });
}

function getPost(req, res, next) {
  Post.find(function (err, posts) {
    if (err) return next(err);
    res.json(posts);
  });
}

function getPostByCategory(req, res, next) {
  Post.find({category: req.params.id}, function (err, posts) {
    if (err) return next(err);
    res.json(posts);
  });
}

function getPostById(req, res, next) {
  Post.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
}

module.exports = router;
