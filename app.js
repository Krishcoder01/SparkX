const express = require('express')
const app = express()
const path = require('path')
const indexRoutr = require('./routes/homepage')
const postRoute = require('./routes/postRoute')
const mongoosConnection = require('./config/mongoose-connection')
const usery = require('./models/userModel')
require('dotenv').config()



app.use(express.json())
app.use(express.urlencoded({extended : true}))
app.set('view engine','ejs')
app.use(express.static(path.join(__dirname , "public")))
app.set('views', path.join(__dirname, 'views'));


app.use('/', indexRoutr)
app.use('/post' ,postRoute)



app.listen( 3000 ,()=>{console.log("server runnning")})