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
    const allUsers = userModel.body
    console.log(allUsers[0])
    // if (allUsers == "")
    //     result.send("There is no users with the requested id")
    // if (allUsers != "there is an error"){
    //     const u = allUsers[UserNum-1];
    //         result.send(u) }
    // else
    //     display(result)
    }

function create(result, request){
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

