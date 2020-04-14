const mongoose = require('mongoose');

const postTable = new mongoose.Schema(
    {
        title: {type:String, require:true},
        postbody:{type: String, require:true },
        user : { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
    }
)

const postM = mongoose.model('Post', postTable)
module.exports = postM;

