const mongoose = require('mongoose');

const userTable = new mongoose.Schema(
    {
        userName: {type:String, require:true},
        email:{type: String, require:true },
        password: {type: String, require:true},
        Posts: [{type: mongoose.Schema.Types.ObjectId, ref: 'post'}],
    }
)

  user = mongoose.model('User', userTable)
 module.exports = user ;