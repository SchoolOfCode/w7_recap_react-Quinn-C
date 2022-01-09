import React from 'react';
import blogPostData from './blogPostData';

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
                    <div>
                        <h1>{post.title}</h1>
                        <h2>by {post.author}</h2>
                        <time>{post.datePosted}</time>
                        <div></div>
                        <img src={post.image} alt={post.alt}/>
                        <p>{post.alt}</p>
                        <p>{post.text}</p>
                    </div>
                    
                )

            })}
        </div>
       
       
        )
    
    
}

export default BlogPost;