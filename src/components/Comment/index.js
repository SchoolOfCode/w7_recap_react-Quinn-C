import React from "react";
import "./index.css"

function Comment({author, text}){
    //avatar
    //author
    //comment
    // const comments=[
    //     {
    //         author: "Billy Bootcamper",
    //         text: "Hello, great post"
    //       }
    // ]
    //get the name from the comments data
    const firstName = author.split(" ")[0];
    const lastName = author.split(" ")[1];
    //get the intial letters
    const firstInitial = firstName.charAt(0);
    const lastInitial = lastName.charAt(0);
    const initials = firstInitial+lastInitial;
    //put the intials inside the div circle
    // function addInitialsInAvatar(){
    //     document.getElementById("name").innerHTML = `${initials}`;
    // }
    // //execute the function after the page loads
    // window.onload = function(){
    //     addInitialsInAvatar();
    // }
    
    return (
        <div className="comment-block">
            <div className="comment-line1">
                <div id="container">
                    <div id="name">  
                        {initials}   
                    </div>
                </div>
                <span id="full-name">{firstName} {lastName}</span>
            </div>
            <div className="comment-line2">
                <span id="comment-text">{text}</span>
            </div>
            <hr/>
        </div>
        
    );
    
}
export default Comment;