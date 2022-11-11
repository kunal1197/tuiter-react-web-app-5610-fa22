import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createTuit } from "../reducers/tuits-reducer";
const WhatsHappening = () => {
  const dispatch = useDispatch();
  const [whatsHappening, setWhatsHappening] = useState("");
  const tuitClickHandler = () => {
    dispatch({ type: "create-tuit", tuit: whatsHappening });
    //   const newTuit = {
    //     tuit: whatsHappening
    // }
    // dispatch(createTuit(newTuit));
  };
  return (
    <div className="row">
      <div className="col-2">
        <img
          src="/tuiter/images/nasa.png"
          alt=""
          style={{
            marginTop: "10px",
            width: "80%",
            borderRadius: "50%",
          }}
        />
      </div>
      <div className="col-10">
        <textarea
          value={whatsHappening}
          onChange={(event) => setWhatsHappening(event.target.value)}
          placeholder="What's happening?"
          style={{
            width: "100%",
            backgroundColor: "black",
            border: "none",
            color: "white",
          }}
        ></textarea>
        <hr />
        <div>
          <i
            className="fa fa-picture-o text-primary"
            aria-hidden="true"
            style={{ marginRight: "25px", fontSize: "20px" }}
          ></i>
          <i
            className="fa fa-file-image-o text-primary"
            aria-hidden="true"
            style={{ marginRight: "25px", fontSize: "20px" }}
          ></i>
          <i
            className="fa fa-bar-chart text-primary"
            aria-hidden="true"
            style={{ marginRight: "25px", fontSize: "20px" }}
          ></i>
          <i
            className="fa fa-smile-o text-primary"
            aria-hidden="true"
            style={{ marginRight: "25px", fontSize: "20px" }}
          ></i>
          <i
            className="fa fa-map-marker text-primary"
            aria-hidden="true"
            style={{ marginRight: "25px", fontSize: "20px" }}
          ></i>
          <button
            className="btn btn-primary btn-block rounded-pill"
            style={{ float: "right" }}
            onClick={tuitClickHandler}
          >
            Tuit
          </button>
          <br />
          <br />
        </div>
      </div>
    </div>
  );
};
export default WhatsHappening;
