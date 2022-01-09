import React from "react";
import logo from "../../logo.svg";
import "./App.css";
import BlogPost from "../BlogPost";
import Comment from "../Comment";

function App() {
  return (
    <div className="App">
      <BlogPost />
      <Comment />
    </div>
  );
}

export default App;
