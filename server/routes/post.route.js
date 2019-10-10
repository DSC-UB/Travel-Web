let router = require('express').Router();

let passport = require('passport');
require('../config/passport')(passport);


const PostController = require("../controllers/post.controller");

const authPassword = passport.authenticate('jwt', { session: false});


router.get('/', authPassword, PostController.getAllPosts);

router.get('/:id', authPassword, PostController.getPostById);

router.post('/', authPassword, PostController.setPost);

router.put('/:id', authPassword, PostController.updatePost);

router.delete('/:id', authPassword, PostController.deletePost);

module.exports = router;
