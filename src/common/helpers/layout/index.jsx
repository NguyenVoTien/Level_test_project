import Navbar from "@/components/Navbar";
import ChangePass from "@/pages/ChangePass";
import UpdateEmail from "@/pages/UpdateEmail";
import Home from "@/pages/Home";
import NotFound from "@/pages/NotFound";
import Verification from "@/pages/Verification";
import ProfilePage from "@/pages/ProfileUser";
import UpdateProfile from "@/pages/UpdateProfile";
import ResetPasswordPage from "@/pages/ResetPass";
import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import About from "@/pages/About";
import ContactPage from "@/pages/Contacts";

const Layout = ({ avatarUrl, handleLogout, children }) => {
  const location = useLocation();
  const noNavbarPaths = ["/login", "/register"];

  return (
    <>
      {!noNavbarPaths.includes(location.pathname) && (
        <Navbar avatarUrl={avatarUrl} />
      )}
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<ContactPage />} />
        <Route path="*" element={<NotFound />} />
        <Route
          path="/create/account/:email/:timeout/:userId/:token"
          element={<Verification />}
        />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/update/profile" element={<UpdateProfile />} />
        <Route
          path="/reset/password/:timeout/:user_id/:token"
          element={<ResetPasswordPage />}
        />
        <Route path="/Change/password" element={<ChangePass />} />
        <Route path="/update/email" element={<UpdateEmail />} />
      </Routes>
    </>
  );
};

export default Layout;
