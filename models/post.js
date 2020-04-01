const mongoose = require('mongoose');

const postTable = new mongoose.Schema(
    {
        title: {type:String, require:true},
        postbody:{type: String, require:true }
    }
)

const PostModel = mongoose.model('Post', postTable)
module.exports = PostModel;

