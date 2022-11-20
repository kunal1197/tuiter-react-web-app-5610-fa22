import { useDispatch } from "react-redux";
// import { likeTuit } from "../reducers/tuits-reducer";
import { updateTuitThunk } from "../../services/tuits-thunks";

const TuitStats = ({ tuit }) => {
  const dispatch = useDispatch();
  // const handleLikeTuit = () => {
  //   dispatch(likeTuit(tuit));
  // };

  return (
    // <div style={{ color: "#FAF9F6" }} onClick={handleLikeTuit}>
    //   {tuit.liked && (
    //     <i className="fa fa-heart me-1" style={{ color: "red" }}></i>
    //   )}
    //   {!tuit.liked && <i className="fa fa-heart me-1"></i>}
    //   {tuit.stats && tuit.stats.likes}
    // </div>

    <>
      <div
        style={{ color: "#FAF9F6" }}
        onClick={() =>
          dispatch(
            updateTuitThunk({
              ...tuit,
              liked: !tuit.liked,
              likes: tuit.liked ? tuit.likes - 1 : tuit.likes + 1,
              stats: {
                ...tuit.stats,
                likes: tuit.liked ? tuit.stats.likes - 1 : tuit.stats.likes + 1,
              },
            })
          )
        }
      >
        {tuit.liked && (
          <i className="fa fa-thumbs-up me-1" style={{ color: "red" }}></i>
        )}
        {(!tuit.liked || tuit.stats.likes === 0) && (
          <i className="fa fa-thumbs-up me-1"></i>
        )}
        {tuit.stats && tuit.stats.likes}
      </div>

      <div
        style={{ color: "#FAF9F6" }}
        onClick={() =>
          dispatch(
            updateTuitThunk({
              ...tuit,
              disliked: !tuit.disliked,
              dislikes: tuit.disliked ? tuit.dislikes - 1 : tuit.dislikes + 1,
              stats: {
                ...tuit.stats,
                dislikes: tuit.disliked
                  ? tuit.stats.dislikes - 1
                  : tuit.stats.dislikes + 1,
              },
            })
          )
        }
      >
        {tuit.disliked && (
          <i
            className="fa fa-thumbs-down me-1"
            style={{ color: "aquamarine" }}
          ></i>
        )}
        {(!tuit.disliked || tuit.stats.dislikes === 0) && (
          <i className="fa fa-thumbs-down me-1"></i>
        )}
        {tuit.stats && tuit.stats.dislikes}
      </div>
    </>
  );
};
export default TuitStats;
