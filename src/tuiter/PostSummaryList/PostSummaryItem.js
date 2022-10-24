import React from "react";
const PostSummaryItem = ({
  post = {
    topic: "Web Development",
    userName: "ReactJS",
    time: "2h",
    title:
      "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
    image: "../../../public/tuiter/images/react.png",
  },
}) => {
  return (
    <li className="list-group-item">
      <div
        className="row wd-explore-story-container"
        style={{ padding: "3px 0 3px 0" }}
      >
        <div className="col-10" style={{ fontSize: "13px" }}>
          <div className="text-muted">{post.topic}</div>
          <div className="">
            <b>{post.userName}</b>&nbsp;
            <i className="fa fa-check-circle" aria-hidden="true"></i>
            <span className="text-muted">&nbsp;- {post.time}</span>
          </div>
          <div className="">
            <b>{post.title}</b>
          </div>
        </div>
        <div
          className="col-2 
                    wd-explore-feed-img-container 
                    wd-flex-and-center"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={post.image}
            className="wd-explore-feed-img"
            style={{
              height: "60px",
              width: "60px",
              display: "block",
              borderRadius: "5px",
              objectFit: "cover",
            }}
            alt=""
          />
        </div>
      </div>
    </li>
  );
};
export default PostSummaryItem;
