const mongoose = require('mongoose')

let userLoginSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true // Removes whitespace from both ends of the string
      },
      password: {
        type: String,
        required: true,
        minlength: 4 // Ensures the password is at least 6 characters long
      },
      email: {
        type: String,
        required: true,
        unique: true, // Ensures that each email address is unique across the database
        validate: {
          validator: function(v) {
            return /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(v);
          },
          message: props => `${props.value} is not a valid email address`
        }
  } ,
  posts:[{
    type : mongoose.Schema.Types.ObjectId  ,
    ref:"idea"

  }]
})

const usery = mongoose.model("user", userLoginSchema)

module.exports=usery