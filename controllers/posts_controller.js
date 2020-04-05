const postModel = require ('../models/post');

function display(request, result){
    postModel.find({},(err,posts)=>{
        if(!err)
            result.json(posts)
        else
            result.send("there is an error")
    })
}

function displayPost(req, res){
    postModel.findById(req.params.id).then(post => {
        if(!post) {
            return res.status(404).send({
                message: "post not found with id " + req.params.id
            });            
        }
        res.send(post);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "post not found with id " + req.params.id
            });                
        }
        return res.status(500).send({
            message: "Error retrieving post with id " + req.params.id
        });
    });
};
    

function create(request, result){
    // const {body: {userName, email, password, posts}} = request;
    const post = new postModel ({
     title: request.body.title,
     postbody: request.body.postbody,
    })

    post.save((err,post)=> {
        if(err) return result.send(err)
         result.json(post)
     })
}

function edit (request, result){
    postModel.findByIdAndUpdate(request.params.id, {
        title: request.body.title,
        postbody: request.body.postbody,
    }, {new: true})
    .then(post => {
        if(!post) {
            return result.status(404).send({
                message: "Post not found with id " + request.params.id
            });
        }
        result.send(post);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return result.status(404).send({
                message: "Post not found with id " + request.params.id
            });                
        }
        return result.status(500).send({
            message: "Error updating Post with id " + request.params.id
        });
    });
};

function deletee(request ,result){
    postModel.findByIdAndRemove(request.params.id)
    .then(post => {
        if(!post) {
            return result.status(404).send({
                message: "Post not found with id " + request.params.id
            });
        }
        result.send({message: "Post deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return result.status(404).send({
                message: "Post not found with id " + request.params.id
            });                
        }
        return result.status(500).send({
            message: "Could not delete post with id " + request.params.id
        });
    });
};

module.exports = {display,
deletee,
create,
displayPost,
edit
}