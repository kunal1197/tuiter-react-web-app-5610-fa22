import "./App.css";
import "./vendors/bootstrap/css/bootstrap.min.css";
import "./vendors/bootstrap/bootstrap.min.css";
import "./vendors/fontawesome/css/font-awesome.min.css";
import Labs from "./labs";
import HelloWorld from "./labs/a6/hello-world";
import Tuiter from "./tuiter/index.js";
import ExploreScreen from "./tuiter/explore/ExploreScreen";
import HomeScreen from "./tuiter/home";
import ProfileScreen from "./tuiter/profile";
import EditProfileScreen from "./tuiter/profile/EditProfileScreen";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path="/*" element={<Labs />} />
          <Route path="/hello" element={<HelloWorld />} />
          <Route path="/tuiter/" element={<Tuiter />}>
            <Route index element={<HomeScreen />} />
            <Route path="explore" element={<ExploreScreen />} />
            <Route path="profile" element={<ProfileScreen />} />
            <Route path="edit-profile" element={<EditProfileScreen />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
