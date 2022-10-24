import PostList from "../PostList/index.js";
import React from "react";

const HomeComponent = () => {
  return (
    <>
      <div className="row">
        <div
          className="col-10"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="input-group">
            <span
              className="input-group-append"
              style={{
                backgroundColor: "white",
                borderRadius: "25px 0 0 25px",
              }}
            >
              <button className="btn" type="button">
                <i className="fa fa-search"></i>
              </button>
            </span>
            <input
              className="form-control"
              type="search"
              placeholder="Search Twitter"
              style={{ borderRadius: "0 25px 25px 0" }}
            />
          </div>
        </div>
        <div
          className="col-2"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <a href="#">
            <i className="fa fa-inverse fa-cog fa-2x" aria-hidden="true"></i>
          </a>
        </div>
      </div>
      <ul className="nav mb-2 mt-2 nav-tabs">
        <span className="nav-item">
          <a className="nav-link nav-link active" href="./for-you.html">
            <small>For You</small>
          </a>
        </span>
        <span className="nav-item">
          <a className="nav-link" href="./trending.html">
            <small>Trending</small>
          </a>
        </span>
        <span className="nav-item">
          <a className="nav-link " href="#">
            <small>COVID-19</small>
          </a>
        </span>
        <span className="nav-item">
          <a className="nav-link " href="./news.html">
            <small>News</small>
          </a>
        </span>
        <span className="nav-item">
          <a className="nav-link " href="./sports.html">
            <small>Sports</small>
          </a>
        </span>
        <span className="nav-item d-none d-md-inline d-sm-none">
          <a className="nav-link " href="./entertainment.html">
            <small>Entertainment</small>
          </a>
        </span>
      </ul>
      <PostList />
    </>
  );
};
export default HomeComponent;
