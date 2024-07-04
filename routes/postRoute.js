const express = require('express')
const router = express.Router()
const {postAdd ,createPost} = require('../controllers/postController')


router.get("/create/:email" , postAdd)
router.post("/create/:email" , createPost )


module.exports= router