import { useDispatch } from "react-redux";
import { likeTuit } from "../reducers/tuits-reducer";

const TuitStats = ({ tuit }) => {
  const dispatch = useDispatch();
  const handleLikeTuit = () => {
    dispatch(likeTuit(tuit));
  };
  return (
    <div style={{ color: "#FAF9F6" }} onClick={handleLikeTuit}>
      {tuit.liked && (
        <i className="fa fa-heart me-1" style={{ color: "red" }}></i>
      )}
      {!tuit.liked && <i className="fa fa-heart me-1"></i>}
      {tuit.stats && tuit.stats.likes}
    </div>
  );
};
export default TuitStats;
