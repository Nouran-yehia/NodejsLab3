const postModel = require ('../models/post');

function display(result){
    postModel.find({},(err,posts)=>{
        if(!err)
            result.json(posts)
        else
            result.send("there is an error")
    })
}

function displayPost(PostNum, result){
    const allposts = display(result)
    if (allposts == "")
        result.send("There is no post with the requested id")
    if (allposts != "there is an error"){
        const p = allposts[PostNum-1];
        result.send(p)}
    else
        display(result)
}

function create(result, request){
    const {body: {title, postbody, user}} = request;
    const post = new postModel ({
        title: body.title,
        postbody: body.postbody,
        user: body.user,
    })
    post.save((err,post)=> {
        if(err) return result.send(err)
        result.json(post)
    })
}

function deletee(UserNum,result){
    const allPosts = display(result)
    if (allposts != "there is an error"){
        allposts.splice(UserNum-2,1)
    }else
        display(result)
}

module.exports = {display,
deletee,
create,
displayUser,
}

