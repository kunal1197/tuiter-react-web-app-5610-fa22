import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const ProfileScreen = () => {
  const profile = useSelector((state) => state.profile);
  let navigate = useNavigate();
  return (
    <div>
      <div className="row">
        <div
          className="col-1"
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: "30px",
            cursor: "pointer",
          }}
          onClick={() => navigate("/tuiter/")}
        >
          &#8592;
        </div>
        <div className="col-11" style={{ fontSize: "0" }}>
          <div style={{ fontSize: "30px", height: "35px", color: "white" }}>
            <b>{profile.name}</b>
          </div>{" "}
          <br />
          <div style={{ fontSize: "15px" }}>{profile.totalTweets} Tweets</div>
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
      <div className="mt-2" style={{ boder: "1px solid red" }}>
        <button
          type="button"
          class="btn btn-block btn-outline-dark rounded-pill"
          style={{ float: "right" }}
        >
          <Link
            to="/tuiter/edit-profile"
            style={{ textDecoration: "none", color: "#FAF9F6" }}
          >
            <b>Edit Profile</b>
          </Link>
        </button>
      </div>
      <div className="row" style={{ marginTop: "60px" }}>
        <h5>
          <b>{profile.name}</b>
        </h5>
        <span>@{profile.handle}</span> <br /> <br />
        <span style={{ color: "white" }}>{profile.bio}</span>
        <div style={{ marginTop: "10px" }}>
          <i class="fa fa-map-marker" aria-hidden="true"></i> {profile.location}{" "}
          &nbsp; &nbsp; &nbsp; &nbsp;
          <i class="fa fa-birthday-cake" aria-hidden="true"></i>{" "}
          {profile.dateOfBirth}
          &nbsp; &nbsp; &nbsp; &nbsp;
          <i class="fa fa-calendar-check-o" aria-hidden="true"></i>{" "}
          {profile.dateJoined}
        </div>
        <span style={{ marginTop: "10px" }}>
          <b style={{ color: "white" }}>{profile.followingCount}</b>{" "}
          &nbsp;Following &nbsp; &nbsp;{" "}
          <b style={{ color: "white" }}>{profile.followersCount}</b>{" "}
          &nbsp;Followers{" "}
        </span>
      </div>
    </div>
  );
};
export default ProfileScreen;
