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
    user : Oneuser._id ,
    postLike : 0
   })
   Oneuser.posts.push(post._id) 
   Oneuser.save()
   res.redirect(`/homepage/${user}`)
}

async function increaseLike(req , res){
  let id = req.params.id ;
  let email = req.params.email
  console.log(id)
  let post = await idea.findOne({_id:id})
  console.log(post)
  post.postLike = post.postLike + 1
  post.save()
  res.redirect(`/homepage/${email}`)
}

module.exports={postAdd , createPost , increaseLike}
