import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import API from "common/api/api";

const ProfilePage = () => {
  const [user, setUser] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Thêm state này

  const navigate = useNavigate();

  const userId = localStorage.getItem("userId");

  const redirectToUpdateProfile = () => {
    navigate("/update/profile");
  };

  const redirectToResetPassword = () => {
    navigate("/password/reset");
  };

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        setIsLoading(true); // Bắt đầu tải dữ liệu
        const res = await API.get(`/user/profile/${userId}`);
        if (res.data.status === 200) {
          setUser(
            Array.isArray(res.data.metadata)
              ? res.data.metadata
              : [res.data.metadata]
          );
        } else {
          console.error("User not found in response");
        }
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setIsLoading(false); // Kết thúc tải dữ liệu
      }
    };

    fetchUserData();
  }, [userId]);

  return (
    <div className="flex flex-col items-center justify-center">
      {isLoading ? (
        <div className="text-center p-4">Loading...</div>
      ) : user.length > 0 ? (
        user.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-4 mb-4 w-full max-w-md"
          >
            <p className="text-lg font-semibold">
              Name: <span className="font-normal">{item.username}</span>
            </p>
            <p className="text-lg font-semibold">
              Email: <span className="font-normal">{item.email}</span>
            </p>
            <p className="text-lg font-semibold">
              Phone: <span className="font-normal">{item.phone}</span>
            </p>
            <button
              onClick={redirectToUpdateProfile}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Update Profile
            </button>
            <button
              onClick={redirectToResetPassword}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Reset Password
            </button>
          </div>
        ))
      ) : (
        <div className="text-center p-4">No user data found.</div>
      )}
    </div>
  );
};

export default ProfilePage;
