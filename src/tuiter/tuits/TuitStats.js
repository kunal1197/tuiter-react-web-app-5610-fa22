import { useDispatch } from "react-redux";

const TuitStats = ({ tuit }) => {
  const dispatch = useDispatch();
  const likeTuit = () => {
    dispatch({ type: "like-tuit", tuit });
  };
  return (
    <div style={{ color: "#FAF9F6" }} onClick={likeTuit}>
      {tuit.liked && (
        <i className="fa fa-heart me-1" style={{ color: "red" }}></i>
      )}
      {!tuit.liked && <i className="fa fa-heart me-1"></i>}
      {tuit.stats && tuit.stats.likes}
    </div>
  );
};
export default TuitStats;
