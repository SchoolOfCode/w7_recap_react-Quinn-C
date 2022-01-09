import React, {useState} from "react";
import "./App.css";
import BlogPost from "../BlogPost";
import CommentList from "../CommentList";
import listCommentData from "./listCommentData";

//store comments in state 
function App() {
  const[comments, setComments] = useState(listCommentData)
  return (
    <div className="App">
      <BlogPost />
      <CommentList comments={comments}/>
    </div>
  );
}

export default App;
