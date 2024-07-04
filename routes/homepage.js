const express = require('express')
const router = express.Router()
const usery = require('../models/userModel')
const {homebannerController, signupHandler,createUserHandler , loginHandler , userCheckHandler , homepageController} = require('../controllers/homepage')


router.get("/" , homebannerController)
router.get("/signup" , signupHandler)
router.post("/signup" , createUserHandler)
router.get("/login" , loginHandler)
router.post("/login" , userCheckHandler)
router.get("/homepage/:email" , homepageController)




module.exports = router