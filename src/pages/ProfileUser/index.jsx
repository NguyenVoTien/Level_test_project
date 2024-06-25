import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import API from "common/api/api";
import { Text } from "components";

const ProfilePage = () => {
  const [user, setUser] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Thêm state này

  const navigate = useNavigate();

  const userId = localStorage.getItem("userId");

  const redirectToUpdateProfile = () => {
    navigate("/update/profile");
  };

  const redirectToUpdateEmail = () => {
    navigate("/update/email");
  };

  const redirectToChangePassword = () => {
    navigate("/Change/password");
  };

  const redirectToTwoFactorEnabled = () => {
    navigate("/Change/password");
  };
  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      const response = await API.post("/user/logout", dataChange);
      if (response.dataChange.status === 200) {
        alert("Register successfull. please check mail😍");
        // Navigate to login page after successful verification
        navigate("/login");
      } else {
        alert("Registration failed. Please try again.");
      }
    } catch (error) {
      console.error("Error during verification:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        setIsLoading(false);
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
            <Text className="text-lg font-semibold">
              Name: <span className="font-normal">{item.username}</span>
            </Text>
            <Text className="text-lg font-semibold">
              Email: <span className="font-normal">{item.email}</span>
            </Text>
            <Text className="text-lg font-semibold">
              Phone: <span className="font-normal">{item.phone}</span>
            </Text>
            <Text className="text-lg font-semibold">
              FullName: <span className="font-normal">{item.fullname}</span>
            </Text>
            <Button
              onClick={redirectToUpdateProfile}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Update Profile
            </Button>
            <Button
              onClick={redirectToUpdateEmail}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Update Email
            </Button>
            <Button
              onClick={redirectToChangePassword}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Change Password
            </Button>
            <Button
              onClick={redirectToTwoFactorEnabled}
              className="bg-blue-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
              Two Factor Enabled
            </Button>
            <Button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
              Logout
            </Button>
          </div>
        ))
      ) : (
        <div className="text-center p-4">No user data found.</div>
      )}
    </div>
  );
};

export default ProfilePage;
