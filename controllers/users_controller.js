const userModel = require ('../models/user');

function display(result){
    userModel.find({},(err,users)=>{
        if(!err)
            result.json(users)
        else
            result.send("there is an error")
    })
}

function displayUser(UserNum, result){
    const allUsers = display(result)
    if (allUsers == "")
        result.send("There is no users with the requested id")
    if (allUsers != "there is an error"){
        const u = allUsers[UserNum-1];
            result.send(u) }
    else
        display(result)
}

function create(result, request){
    const {body: {userName, email, password, posts}} = request;
    const user = new userModel ({
        userName: body.userName,
        email: body.email,
        password: body.password,
        posts: body.posts,
    })
    user.save((err,user)=> {
        if(err) return result.send(err)
        result.json(user)
    })
}

function deletee(UserNum,result){
    const allUsers = display(result)
    if (allusers != "there is an error"){
        allusers.splice(UserNum-2,1)
    }else
        display(result)
}

module.exports = {display,
deletee,
create,
displayUser,
}

