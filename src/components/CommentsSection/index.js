import React from 'react';
import CommentList from "../CommentList";
import CommentForm from "../CommentForm";

function CommentsSection({comments, addComment}){
//two input fields: username and comment
    //default username for 1st input field
//add comment to the list
//press button, new comment added to the list
    //empty input, do not add it.
    return(
        <div>
            <CommentList comments={comments}/>
            <CommentForm addComment={addComment}/>
        </div>
    )
}

export default CommentsSection;