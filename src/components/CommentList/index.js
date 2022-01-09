import React from 'react';
import Comment from '../Comment';

function CommentList({comments}){
    //render a Comment component for each item in the list.
    return(
        <div>
            {comments.map(function(post){
            return(
                <Comment author={post.author} text={post.text}/>
            )
        })

        };
        </div>
        
        
    )
}

export default CommentList;