import React from "react";
import TuitStats from "./tuit-stats";
import { useDispatch } from "react-redux";

const TuitListItem = ({ tuit }) => {
  const dispatch = useDispatch();
  const deleteTuit = (tuit) => {
    dispatch({ type: "delete-tuit", tuit });
  };

  return (
    <li
      className="list-group-item"
      style={{
        borderRadius: "none",
      }}
    >
      <div className="row">
        <div className="col-1">
          <img
            src={tuit.avatarImage}
            alt=""
            style={{
              marginTop: "10px",
              width: "150%",
              objectFit: "cover",
              borderRadius: "50%",
            }}
          />
        </div>

        <div className="col-11" style={{ paddingLeft: "15px" }}>
          <div>
            <span>
              <b>{tuit.postedBy.username}</b> &nbsp;
              {tuit.verified ? (
                <i className="fa fa-check-circle" aria-hidden="true"></i>
              ) : (
                ""
              )}
            </span>{" "}
            &nbsp;
            <span className="text-muted">@{tuit.handle}</span>
            <i
              onClick={() => deleteTuit(tuit)}
              className="fa fa-remove fa 
                  fa-pull-right"
            ></i>
          </div>
          <div dangerouslySetInnerHTML={{ __html: tuit.tuit }} />
          <div className="mt-2">
            {tuit.attachments && tuit.attachments.image ? (
              <img
                src={tuit.attachments.image}
                style={{
                  borderRadius: "15px",
                  width: "100%",
                  height: "400px",
                  objectFit: "cover",
                }}
                alt=""
              />
            ) : (
              ""
            )}

            <div className="p-2 d-flex justify-content-between text-muted">
              <div style={{ color: "#FAF9F6" }}>
                <i
                  className="fa fa-comment"
                  aria-hidden="true"
                  style={{ marginRight: "5px" }}
                ></i>
                {tuit.stats.comments}
              </div>
              <div style={{ color: "#FAF9F6" }}>
                <i
                  className="fa fa-retweet"
                  aria-hidden="true"
                  style={{ marginRight: "5px" }}
                ></i>
                {tuit.stats.retuits}
              </div>
              <TuitStats tuit={tuit} />
              <div style={{ color: "#FAF9F6" }}>
                <i className="fa fa-upload" aria-hidden="true"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default TuitListItem;
