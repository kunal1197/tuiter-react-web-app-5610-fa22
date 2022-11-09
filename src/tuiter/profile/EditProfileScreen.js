import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
const EditProfileScreen = () => {
  const profile = useSelector((state) => state.profile);
  const dispatch = useDispatch();

  const [name, setName] = useState(profile.name);
  const [bio, setBio] = useState(profile.bio);
  const [location, setLocation] = useState(profile.location);
  const [website, setWebsite] = useState(profile.website);
  const [dateOfBirth, setDateOfBirth] = useState(profile.dateOfBirth);
  let navigate = useNavigate();

  const onSaveClickHandler = () => {
    const modifiedData = { name, bio, location, website, dateOfBirth };
    dispatch({ data: modifiedData, type: "update-profile" });
    navigate("/tuiter/profile");
  };

  return (
    <div>
      <div className="row">
        <div
          className="col-1"
          style={{ display: "flex", alignItems: "center", fontSize: "25px" }}
        >
          <i
            onClick={() => navigate("/tuiter/profile")}
            class="fa fa-times"
            aria-hidden="true"
            style={{ cursor: "pointer" }}
          ></i>
        </div>
        <div className="col-11" style={{ marginBottom: "10px" }}>
          <span style={{ fontSize: "25px", color: "white" }}>
            <b>Edit Profile</b>
          </span>
          <button
            type="button"
            class="btn btn-block btn-outline-dark rounded-pill"
            style={{
              float: "right",
            }}
            onClick={onSaveClickHandler}
          >
            <b>Save</b>
          </button>
        </div>
      </div>
      <div className="row" style={{ position: "relative" }}>
        {/* Cover photo */}
        <img
          src={profile.bannerPicture}
          style={{ height: "250px", objectFit: "cover" }}
          alt="Banner"
        />
        {/* Profile Photo */}
        <img
          src={profile.profilePicture}
          alt=""
          style={{
            width: "150px",
            borderRadius: "50%",
            objectFit: "cover",
            position: "absolute",
            bottom: -55,
            left: 20,
          }}
        />
      </div>

      <div className="form-floating" style={{ marginTop: "70px" }}>
        <input
          type="text"
          className="form-control mb-3"
          id="name"
          defaultValue={profile.name}
          onChange={(event) => setName(event.target.value)}
          style={{
            backgroundColor: "black",
            color: "white",
            border: "1px solid gray",
          }}
        />
        <label for="name">Name</label>
      </div>
      <div className="form-floating">
        <textarea
          type="text"
          className="form-control mb-3"
          id="bio"
          defaultValue={profile.bio}
          onChange={(event) => setBio(event.target.value)}
          style={{
            backgroundColor: "black",
            color: "white",
            border: "1px solid gray",
            height: "100px",
          }}
        ></textarea>
        <label for="bio">Bio</label>
      </div>
      <div className="form-floating">
        <input
          type="text"
          className="form-control mb-3"
          id="location"
          defaultValue={profile.location}
          onChange={(event) => setLocation(event.target.value)}
          style={{
            backgroundColor: "black",
            color: "white",
            border: "1px solid gray",
          }}
        />
        <label for="location">Location</label>
      </div>

      <div className="form-floating">
        <input
          type="text"
          className="form-control mb-3"
          id="website"
          defaultValue={profile.website}
          onChange={(event) => setWebsite(event.target.value)}
          style={{
            backgroundColor: "black",
            color: "white",
            border: "1px solid gray",
          }}
        />
        <label for="website">Website</label>
      </div>

      <div className="form-floating">
        <input
          type="text"
          className="form-control mb-3"
          id="dob"
          defaultValue={profile.dateOfBirth}
          onChange={(event) => setDateOfBirth(event.target.value)}
          style={{
            backgroundColor: "black",
            color: "white",
            border: "1px solid gray",
          }}
        />
        <label for="dob">Date of Birth</label>
      </div>
    </div>
  );
};
export default EditProfileScreen;
