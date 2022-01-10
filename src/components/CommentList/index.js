import React from 'react';
import Comment from '../Comment';

function CommentList({comments}){
    //render a Comment component for each item in the list.
    console.log(comments)
    return(
        <div>
            {comments.map(function(comment, index){
            return <Comment author={comment.author} text={comment.text} key={index}/>
            })

        }
        </div>
        
        
    )
}

export default CommentList;