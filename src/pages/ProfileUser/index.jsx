import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import API from "common/api/api";

const ProfilePage = () => {
  const [user, setUser] = useState("");

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const res = await API.get(
          `/user/profile/${localStorage.getItem("userId")}`
        );
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
      }
    };

    fetchUserData();
  }, []);

  // if (!user) {
  //   return <div className="text-center">Loading...</div>;
  // }

  return (
    <div className="flex flex-col items-center justify-center">
      {user.length > 0 ? (
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
          </div>
        ))
      ) : (
        <div className="text-center p-4">Loading...</div>
      )}
    </div>
  );
};

export default ProfilePage;
