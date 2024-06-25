import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import API from "common/api/api";
import { Text, Button } from "components"; // Assuming Button is also exported from "components"

const ProfilePage = () => {
  const [user, setUser] = useState(null); // Changed to null if user is expected to be an object
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();

  const userId = localStorage.getItem("userId");

  const redirectToUpdateProfile = () => navigate("/update/profile");
  const redirectToUpdateEmail = () => navigate("/update/email");
  const redirectToChangePassword = () => navigate("/change/password");
  const redirectToTwoFactorEnabled = () => navigate("/enable/twofactor"); // Corrected path

  const handleLogout = async (e) => {
    e.preventDefault();
    const dataChange = {}; // Define dataChange based on your needs
    try {
      const response = await API.post("/user/logout", dataChange);
      if (response.status === 200) {
        // Assuming response structure is corrected
        alert("Logout successful.");
        navigate("/login");
      } else {
        alert("Logout failed. Please try again.");
      }
    } catch (error) {
      console.error("Error during logout:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  useEffect(() => {
    const fetchUserData = async () => {
      if (!userId) {
        console.log("userId is not valid:", userId);
        setIsLoading(false);
        return;
      }
      try {
        setIsLoading(true);
        const res = await API.get(`/user/profile/${userId}`);
        if (res.status === 200) {
          // Assuming response structure is corrected
          setUser(res.data.metadata);
        } else {
          console.error("User not found in response");
        }
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserData();
  }, [userId]);

  if (isLoading) {
    return <div className="text-center p-4">Loading...</div>;
  }

  if (!user) {
    return <div className="text-center p-4">No user data found.</div>;
  }

  // Adjusted rendering logic for a single user object
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="bg-white shadow-md rounded-lg p-4 mb-4 w-full max-w-md">
        <Text className="text-lg font-semibold">
          Name: <span className="font-normal">{user.username}</span>
        </Text>
        <Text className="text-lg font-semibold">
          Email: <span className="font-normal">{user.email}</span>
        </Text>
        <Text className="text-lg font-semibold">
          Phone: <span className="font-normal">{user.phone}</span>
        </Text>
        <Text className="text-lg font-semibold">
          FullName: <span className="font-normal">{user.fullname}</span>
        </Text>
        <div className="flex flex-wrap justify-center space-x-2 space-y-2 mt-4">
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
      </div>
    </div>
  );
};

export default ProfilePage;
