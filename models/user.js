const mongoose = require('mongoose');

const userTable = new mongoose.Schema(
    {
        userName: {type:String, require:true},
        email: {type: String, require:true },
        password: {type: String, require:true},
    }
)

  userM = mongoose.model('User', userTable)
 module.exports = userM ;