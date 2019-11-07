const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Model for each comment. Comments have a One-to-One relation with a User
const CommentSchema = new Schema({
   content: {
      type: String,
      required: false
   },

   dateCreated: { type: Date, default: Date.now },

   author: { type: Schema.Types.ObjectId, ref: "User" }
});

module.exports = Comment = mongoose.model("Comment", CommentSchema);