import React from "react";
import HomeScreen from "./HomeScreen/HomeScreen";
import { Routes, Route } from "react-router";
import ExploreScreen from "./ExploreScreen/ExploreScreen";
const Tuiter = () => {
  return (
    <>
      <Routes>
        <Route index element={<HomeScreen />} />
        <Route path="/home" element={<HomeScreen />} />
        <Route path="/explore" element={<ExploreScreen />} />
      </Routes>
    </>
  );
};
export default Tuiter;
