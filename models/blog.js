const { Schema, model} = require ('mongoose');

//make Schema
const blogSchema = new Schema({
  title: {type: String, required: true, unique: true},
  body: String,
  comments: [{type: Schema.Types.ObjectId, ref:'Comment'}]
},{
  timestamps: true
})


module.exports = model('Blog', blogSchema)
