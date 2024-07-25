const usery = require('../models/userModel')
const idea = require('../models/ideaSchema')

function homebannerController(req , res){
    res.render('homebanner')
}
async function createUserHandler(req,res){
   let {name , email , password} = req.body
   console.log({name , email , password} )
   try {
   let checkuser = await usery.findOne({email}).maxTimeMS(10000)
   if(!checkuser){
    await usery.create({
      name ,
      email ,
      password
     })
     res.redirect( `/homepage/${email}`)
   }else{

      res.send("user already hai be chutiya")
   }
   } catch (error) {
    console.log(error)
   }
}
function signupHandler(req,res){
    res.render('signup')
  }
function loginHandler(req,res){
  res.render('login')
}
async function userCheckHandler(req,res){
   try {
    let {email , password} = req.body
    let user = await usery.findOne({
        email : email
       })
    if(!user) return res.redirect("/signup")
    if(password === user.password){
        res.redirect( `/homepage/${email}` )
    }
    else{
        res.send("Password galat hai bhai")
    }
      
   } catch (error) {
    
   }
  }
  async function homepageController(req,res){
    try {
      let email = req.params.email 
    let posts = await idea.find()
    res.render('homepage', {posts , email})
      
    } catch (err) {
      console.log(err)
      
    }
  }

  // async function newField (req , res){
  //     await idea.updateMany(
  //       { postLike: { $exists: false } }, // update only documents that don't have newField
  //       { $set: { postLike : 0 } } // set newField to defaultValue
  //     );
  //     res.send('Update completed.');
  // }



module.exports={ homebannerController,createUserHandler , signupHandler ,loginHandler , userCheckHandler , homepageController ,newField}