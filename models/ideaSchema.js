const mongoose = require('mongoose')

let ideaSchema = mongoose.Schema({
    headline: {
        type: String,
        required: true,
        trim: true // Removes whitespace from both ends of the string
      },
      description: {
        type: String,
        required: true,
        trim: true // Removes whitespace from both ends of the string
      },
      dateCreated: {
        type: Date,
        default: Date.now // Automatically set the current date and time when a document is created
      },
      user:{
        type : mongoose.Schema.Types.ObjectId ,
        ref : "usery"
      },
      postLike : {
        type : Number 
      }
    });

    
    // Middleware to format the dateCreated field upon saving
    ideaSchema.pre('save', function(next) {
      const currentDate = new Date(this.dateCreated).toLocaleDateString('en-GB'); // Formats date in "dd mm yyyy" format
      this.dateCreated = currentDate;
      next();
    

})

const idea = mongoose.model("ideas", ideaSchema)

module.exports=idea