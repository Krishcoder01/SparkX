const express = require('express')
const router = express.Router()
const {postAdd ,createPost , increaseLike} = require('../controllers/postController')


router.get("/create/:email" , postAdd)
router.post("/create/:email" , createPost )
router.get("/like/:id/:email" , increaseLike )


module.exports= router