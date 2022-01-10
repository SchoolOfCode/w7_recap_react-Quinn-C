import React, {useState} from 'react';

function CommentForm({addComment}){
//two input fields: username and comment
    //default username for 1st input field
//add comment to the list
//press button, new comment added to the list
    //empty input, do not add it.
    //define a state for username input and use useState hook to listen on the onChange event
    //anywhere you want to track the change of it, you need to define a state, and use hook to listen on its event.
    const [username, setUsername] = useState('');
    const [userComment, setUserComment] = useState('');
    //handle input validation function 
    // function handleValidation(e){
    //     if(!e.target.value){
    //         alert('Cannot be empty')
    //     }
    // }
    //callback function for username input onchange event listener
    function handleChangeUsername(e){
        
            setUsername(e.target.value);
          
    }
    //callback function for button click event listener
    function handleClick(){  
            let userCommentInput =document.getElementById("form-comment");
            //if usercomment input is empty, do not submit
            if(!userCommentInput.value){
                alert(`Comment cannot be empty!`)
            }else{
                //once click the button, add new comment to the list
                console.log(username)
                const newComment={author:username, text:userComment}
                addComment(newComment);
                alert(`Comment submitted!`);
                
                //clear value in the usercomment input element
                
                userCommentInput.value=" ";
            }
            
    }
    
    return(
        <div>
            <input id="form-username" type="text" placeholder="Chris Meah" onChange={handleChangeUsername}/>
            <input id="form-comment" type="text" placeholder="Write a response..." onChange={function(e){setUserComment(e.target.value)}} required/>
            <input id="form-button" type="button" value="Submit" onClick={handleClick}/>
        </div>
    )
}

export default CommentForm;