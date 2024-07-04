const idea = require('../models/ideaSchema')
const usery = require('../models/userModel')

function postAdd(req , res){
  let email = req.params.email
  res.render('addpost' , {email})
}
async function createPost(req , res){
    let user = req.params.email
    let {headline , description} = req.body
    let Oneuser = await usery.findOne({email:user})
   let post = await idea.create({
    headline ,
    description,
    user : Oneuser._id
   })
   Oneuser.posts.push(post._id) 
   Oneuser.save()
   res.redirect(`/homepage/${user}`)
}

module.exports={postAdd , createPost}
