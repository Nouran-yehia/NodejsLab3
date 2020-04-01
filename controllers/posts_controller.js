const postModel = require ('../models/post');

function display(result){
    postModel.find({},(err,posts)=>{
        if(!err)
            result.json(posts)
        else
            result.send("there is an error")
    })
}

function displayPost(result, request) {
    result.send (`from get route posts/${eq.params.id}`)
}


function create(result, request){
    const post = new postModel ({
        title: request.body.title,
        postbody: request.body.postbody
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
displayPost,
}

