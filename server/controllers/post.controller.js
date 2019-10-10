let Post = require("../models/post.model");

const getAllPosts = (req, res) => {
    let token = getToken(req.headers);
    if (token) {
        Post.find(function (err, posts) {
            if (err) return next(err);
            res.json(posts);
        });
    } else {
        return res.status(403).send({success: false, msg: 'Unauthorized.'});
    }
};

const getPostById = (req, res, next) => {
    let token = getToken(req.headers);
    if (token) {
        Post.findById(req.params.id, function (err, post) {
            if (err) return next(err);
            res.json(post);
        });
    } else {
        return res.status(403).send({success: false, msg: 'Unauthorized.'});
    }
};

const setPost = (req, res, next) => {
    let token = getToken(req.headers);
    if (token) {
        Post.create(req.body, function (err, post) {
            if (err) return next(err);
            res.json(post);
        });
    } else {
        return res.status(403).send({success: false, msg: 'Unauthorized.'});
    }
};

const updatePost = (req, res, next) => {
    let token = getToken(req.headers);
    if (token) {
        Post.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
            if (err) return next(err);
            res.json(post);
        });
    } else {
        return res.status(403).send({success: false, msg: 'Unauthorized.'});
    }
};

const deletePost = (req, res, next) => {
    let token = getToken(req.headers);
    if (token) {
        Post.findByIdAndRemove(req.params.id, req.body, function (err, post) {
            if (err) return next(err);
            res.json(post);
        });
    } else {
        return res.status(403).send({success: false, msg: 'Unauthorized.'});
    }
};


module.exports = {
    getAllPosts,
    deletePost,
    updatePost,
    setPost,
    getPostById,
};

