import React from "react";
import "./index.css"

function Comment(){
    //avatar
    //author
    //comment
    const comments=[
        {
            author: "Billy Bootcamper",
            text: "Hello, great post"
          }
    ]
    //get the name from the comments data
    const firstName = comments[0].author.split(" ")[0];
    const lastName = comments[0].author.split(" ")[1];
    //get the intial letters
    const firstIntial = firstName.charAt(0);
    const lastIntial = lastName.charAt(0);
    const intials = firstIntial+lastIntial;
    document.getElementById("name").innerHTML = intials;
    return (
        <div>
            <span id="firstName">{firstName}</span>
            <span id="lastName">{lastName}</span>
            <div id="container">
                <div id="name">
                </div>
            </div>
        </div>
    )
}
export default Comment;