import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
const NavigationSidebar = () => {
  const [currentPage, setCurrentPage] = useState("home");
  const location = useLocation();
  useEffect(() => {
    const currentUrl = location.pathname;
    const splitted = currentUrl.split("/");
    const page = splitted[splitted.length - 1];
    setCurrentPage(page);
  }, [location]);
  return (
    <div className="list-group">
      <Link to="/tuiter/" className="list-group-item">
        <i className="fa fa-twitter"></i>
      </Link>
      <Link
        className={`list-group-item
        ${currentPage === "" ? "active" : ""}`}
        to="/tuiter/"
      >
        <i className="fa fa-home"></i>
        <span className="d-none d-xl-inline d-lg-none p-1"> Home</span>
      </Link>
      <Link
        className={`list-group-item
        ${currentPage === "explore" ? "active" : ""}`}
        to="/tuiter/explore"
      >
        <i className="fa fa-hashtag"></i>
        <span className="d-none d-xl-inline d-lg-none p-1"> Explore</span>
      </Link>
      <Link
        className={`list-group-item
        ${currentPage === "Notifications" ? "active" : ""}`}
        to="/tuiter/"
      >
        <i className="fa fa-bell"></i>
        <span className="d-none d-xl-inline d-lg-none p-1"> Notifications</span>
      </Link>
      <Link
        className={`list-group-item
        ${currentPage === "Messages" ? "active" : ""}`}
        to="/tuiter/"
      >
        <i className="fa fa-envelope"></i>
        <span className="d-none d-xl-inline d-lg-none p-1"> Messages</span>
      </Link>
      <Link
        className={`list-group-item
        ${currentPage === "Bookmarks" ? "active" : ""}`}
        to="/tuiter/"
      >
        <i className="fa fa-bookmark"></i>
        <span className="d-none d-xl-inline d-lg-none p-1"> Bookmarks</span>
      </Link>
      <Link
        className={`list-group-item
        ${currentPage === "Lists" ? "active" : ""}`}
        to="/tuiter/"
      >
        <i className="fa fa-list"></i>
        <span className="d-none d-xl-inline d-lg-none p-1"> Lists</span>
      </Link>
      <Link
        className={`list-group-item
        ${currentPage === "profile" ? "active" : ""}`}
        to="/tuiter/profile"
      >
        <i className="fa fa-user"></i>
        <span className="d-none d-xl-inline d-lg-none p-1"> Profile</span>
      </Link>
      <Link
        className={`list-group-item
        ${currentPage === "More" ? "active" : ""}`}
        to="/tuiter/"
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
