import React, {useState} from "react";
import "./App.css";
import BlogPost from "../BlogPost";
import CommentsSection from "../CommentsSection";
import listCommentData from "./listCommentData";

//store comments in state 
function App() {
  const[comments, setComments] = useState(listCommentData);

  //add the input as newComment from user to comments list
  function addComment(newComment){
    setComments([...comments, newComment]);
  }
  return (
    <div className="App">
      <BlogPost/>
      <CommentsSection comments={comments} addComment={(a)=>{addComment(a)}}/>
    </div>
  );
}

export default App;
