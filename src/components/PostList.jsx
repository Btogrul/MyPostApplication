import React from "react";
import PostItem from "./PostItem";
import '../styles/App.css'

const PostList = ({ posts, title, remove }) => {
  if(!posts.length){
    return <h1 style={{textAlign:'center'}}> Postlar Tapılmadı !</h1>
  }
  return (
    <>
      <h1 style={{ textAlign: "center" }}>{title}</h1>
        {posts.map((post, index) => (
            <PostItem remove={remove} number={index + 1} post={post} key={post.id} />
        ))}
    </>
  );
};

export default PostList;
