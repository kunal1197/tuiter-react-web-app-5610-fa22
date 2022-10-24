import React from "react";
const PostItem = ({
  post = {
    author: "Elon Musk",
    userName: "elonmusk",
    time: "23h",
    title: "Amazing show about <a href='#'>@inspiration4x</a> mission!",
    avatarImage: "/tuiter/images/elon_musk.jpeg",
    postImageUrl: "/tuiter/images/atronauts.jpeg",
    postContent: {
      postHeading:
        "Countdown: Inspirational Mission to Space | Netflix Official site",
      postContent:
        "From training to launch to landing, this all-access docuseries rides along with the Inpiration4 crew on the first all-civilian orbital space ...",
      postSiteLink: "netflix.com",
    },
    numberOfComments: "4.2k",
    numberOfRetweets: "3.5k",
    numberOfLikes: "37.5k",
  },
}) => {
  return (
    <li
      className="list-group-item"
      style={{
        border: "1px solid rgba(255,255,255,.25)",
        backgroundColor: "black",
        borderRadius: "none",
      }}
    >
      <div className="row">
        <div className="col-1">
          <img
            src={post.avatarImage}
            alt=""
            style={{ marginTop: "10px", width: "150%", borderRadius: "50%" }}
          />
        </div>

        <div className="col-11" style={{ paddingLeft: "15px" }}>
          <div>
            <span>
              <b>{post.author}</b> &nbsp;
              <i className="fa fa-check-circle" aria-hidden="true"></i>
            </span>{" "}
            &nbsp;
            <span className="text-muted">
              @{post.userName} - {post.time}
            </span>
            <span style={{ float: "right" }}>&#183;&#183;&#183;</span>
          </div>
          <div dangerouslySetInnerHTML={{ __html: post.title }} />
          <div className="mt-2">
            <img
              src={post.postImageUrl}
              style={{
                borderRadius: "15px 15px 0 0",
                width: "100%",
                height: "400px",
                objectFit: "cover",
              }}
              alt=""
            />
            {post.postContent ? (
              <div
                className="pt-2"
                style={{
                  padding: "20px",
                  borderRadius: "0 0 10px 10px",
                  border: "1px solid rgba(255,255,255,.25)",
                  borderTop: "none",
                }}
              >
                {post.postContent.postHeading} <br />
                <span className="text-muted">
                  {post.postContent.postContent} <br />
                  <i className="fa fa-link" aria-hidden="true"></i>
                  &nbsp; {post.postContent.postSiteLink}
                </span>
              </div>
            ) : (
              ``
            )}

            <div className="p-2 d-flex justify-content-between text-muted">
              <i className="fa fa-comment" aria-hidden="true">
                <span style={{ marginLeft: "5px" }}>
                  {post.numberOfComments}
                </span>
              </i>
              <i className="fa fa-retweet" aria-hidden="true">
                <span style={{ marginLeft: "5px" }}>
                  {post.numberOfRetweets}
                </span>
              </i>
              <i className="fa fa-heart" aria-hidden="true">
                <span style={{ marginLeft: "5px" }}>{post.numberOfLikes}</span>
              </i>
              <i className="fa fa-upload" aria-hidden="true"></i>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};
export default PostItem;
