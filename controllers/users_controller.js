const userModel = require ('../models/user');

function display(request, result){
    userModel.find({},(err,users)=>{
        if(!err)
            result.json(users)
        else
            result.send("there is an error")
    })
}

function displayUser(req, res){
    userModel.findById(req.params.id).then(user => {
        if(!user) {
            return res.status(404).send({
                message: "user not found with id " + req.params.id
            });            
        }
        res.send(user);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "user not found with id " + req.params.id
            });                
        }
        return res.status(500).send({
            message: "Error retrieving user with id " + req.params.id
        });
    });
};
    

function create(request, result){
    // const {body: {userName, email, password, posts}} = request;
    const user = new userModel ({
     userName: request.body.userName,
     email: request.body.email,
    password: request.body.password,
    })

    user.save((err,user)=> {
        if(err) return result.send(err)
         result.json(user)
     })
}


function edit (request, result){
    userModel.findByIdAndUpdate(request.params.id, {
        userName: request.body.userName,
        email: request.body.email,
        password: request.body.password
    }, {new: true})
    .then(user => {
        if(!user) {
            return result.status(404).send({
                message: "User not found with id " + request.params.id
            });
        }
        result.send(user);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return result.status(404).send({
                message: "User not found with id " + request.params.id
            });                
        }
        return result.status(500).send({
            message: "Error updating User with id " + request.params.id
        });
    });
};

function deletee(request ,result){
    userModel.findByIdAndRemove(request.params.id)
    .then(user => {
        if(!user) {
            return result.status(404).send({
                message: "User not found with id " + request.params.id
            });
        }
        res.send({message: "User deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return result.status(404).send({
                message: "User not found with id " + request.params.id
            });                
        }
        return result.status(500).send({
            message: "Could not delete user with id " + request.params.id
        });
    });
};

module.exports = {display,
deletee,
create,
displayUser,
edit
}

