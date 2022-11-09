import PostSummaryItem from "./PostSummaryItem";
import Posts from "./Posts.json";
import React from "react";

const PostSummaryList = () => {
  return (
    <ul className="list-group">
      {Posts.map((post) => (
        <PostSummaryItem post={post} />
      ))}
    </ul>
  );
};
export default PostSummaryList;
