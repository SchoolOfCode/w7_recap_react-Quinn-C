import React from 'react';
import blogPostData from './blogPostData';
import "./index.css"

//create BlogPost functional component
function BlogPost (){
    //represent info of post below
    //although only have one post atm, but can still use list, .map here, in case we have more posts in the future.
    //go through each post in the blogPostData, use .map() to display in the component
    //in the 
    return (
        <div>
            {blogPostData.map(function(post){
                return(
                    <div key={post.text}>
                        <h1>{post.title}</h1>
                        <h2>by {post.author}</h2>
                        <p id="time">{post.datePosted}</p>
                        <div className="red-rectangle"></div>
                        <img src={post.image} alt={post.alt}/>
                        <p id='image-alt'>{post.alt}</p>
                        <p id='post-text'>{post.text}</p>
                    </div>
                    
                )

            })}
        </div>
       
       
        )
    
    
}

export default BlogPost;