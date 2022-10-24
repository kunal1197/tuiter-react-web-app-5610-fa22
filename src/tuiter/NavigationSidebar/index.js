import React from "react";
import { Link } from "react-router-dom";
const NavigationSidebar = ({ active = "explore" }) => {
  return (
    <div className="list-group">
      <Link to="/tuiter" className="list-group-item">
        <i className="fa fa-twitter"></i>
      </Link>
      <Link
        className={`list-group-item
        ${active === "Home" ? "active" : ""}`}
        to="/tuiter/home"
      >
        <i className="fa fa-home"></i>
        <span className="d-none d-xl-inline d-lg-none p-1"> Home</span>
      </Link>
      <Link
        className={`list-group-item
        ${active === "Explore" ? "active" : ""}`}
        to="/tuiter/explore"
      >
        <i className="fa fa-hashtag"></i>
        <span className="d-none d-xl-inline d-lg-none p-1"> Explore</span>
      </Link>
      <Link
        className={`list-group-item
        ${active === "Notifications" ? "active" : ""}`}
        to="/"
      >
        <i className="fa fa-bell"></i>
        <span className="d-none d-xl-inline d-lg-none p-1"> Notifications</span>
      </Link>
      <Link
        className={`list-group-item
        ${active === "Messages" ? "active" : ""}`}
        to="/"
      >
        <i className="fa fa-envelope"></i>
        <span className="d-none d-xl-inline d-lg-none p-1"> Messages</span>
      </Link>
      <Link
        className={`list-group-item
        ${active === "Bookmarks" ? "active" : ""}`}
        to="/"
      >
        <i className="fa fa-bookmark"></i>
        <span className="d-none d-xl-inline d-lg-none p-1"> Bookmarks</span>
      </Link>
      <Link
        className={`list-group-item
        ${active === "Lists" ? "active" : ""}`}
        to="/"
      >
        <i className="fa fa-list"></i>
        <span className="d-none d-xl-inline d-lg-none p-1"> Lists</span>
      </Link>
      <Link
        className={`list-group-item
        ${active === "Profile" ? "active" : ""}`}
        to="/"
      >
        <i className="fa fa-user"></i>
        <span className="d-none d-xl-inline d-lg-none p-1"> Profile</span>
      </Link>
      <Link
        className={`list-group-item
        ${active === "More" ? "active" : ""}`}
        to="/"
      >
        <i className="fa fa-circle"></i>
        <span className="d-none d-xl-inline d-lg-none p-1"> More</span>
      </Link>
      <div className="d-grid mt-2">
        <Link
          to="tweet.html"
          className="btn btn-primary btn-block rounded-pill"
        >
          Tweet
        </Link>
      </div>
    </div>
  );
};
export default NavigationSidebar;
