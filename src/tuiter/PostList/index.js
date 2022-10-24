import PostItem from "./PostItem.js";
import Posts from "./Posts.json";
import React from "react";

const PostList = () => {
  return (
    <ul class="list-group">
      {Posts.map((post) => {
        console.log(post);
        return <PostItem post={post} />;
      })}
      {/* {console.log(Posts)} */}
    </ul>
  );
};
export default PostList;
