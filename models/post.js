const mongoose = require('mongoose');

const postTable = new mongoose.Schema(
    {
        title: {type:String, require:true},
        postbody:{type: String, require:true },
        user: [{type: mongoose.Schema.Types.ObjectId, ref: 'user'}],
    }
)


module.exports = mongoose.model('Post', postTable)