import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import Verification from "pages/Verification";
import ProfilePage from "pages/ProfileUser";
import UpdateProfile from "pages/UpdateProfile";
const Register = React.lazy(() => import("pages/Register"));
const Login = React.lazy(() => import("pages/Login"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/create/account/:email/:timeout/:userId/:token"
            element={<Verification />}
          />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/update/profile" element={<UpdateProfile />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
