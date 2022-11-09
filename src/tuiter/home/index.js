import React from "react";
import TuitList from "../tuits/TuitsList";
import WhatsHappening from "./whats-happening";
const HomeScreen = () => {
  return (
    <div>
      <WhatsHappening />
      <TuitList />
    </div>
  );
};
export default HomeScreen;
