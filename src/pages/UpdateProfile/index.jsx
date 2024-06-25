//* LIB
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

//* IMPORT
import API from "common/api/api";

function UpdateProfile() {
  const navigate = useNavigate();

  const [username, setusername] = useState("");
  const [phone, setPhone] = useState("");
  const [fullname, setFullname] = useState("");
  const [avatar, setAvatar] = useState("");
  const [gender, setGender] = useState("");

  const handleChangeName = (event) => {
    setusername(event.target.value);
  };

  const handleChangePhone = (event) => {
    setPhone(event.target.value);
  };
  const handleChangeFullname = (event) => {
    setFullname(event.target.value);
  };
  const handleChangeAvatar = (event) => {
    setAvatar(event.target.value);
  };
  const handleChangeGender = (event) => {
    setGender(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    let formData = {
      username: username,
      phone: phone,
      fullname: fullname,
      avatar: avatar,
      gender: parseInt(gender, 10),
    };
    try {
      const res = await API.post("/user/update-profile", formData);
      if (res.formData.status === 200) {
        navigate("/profile");
      } else {
        console.error("UserId not found in response");
      }
    } catch (error) {
      console.error("Update error:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <form onSubmit={handleSubmit} className="space-y-4">
        <label className="block">
          Name:
          <input
            type="text"
            onChange={handleChangeName}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </label>
        <label className="block">
          Phone:
          <input
            type="number"
            onChange={handleChangePhone}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </label>
        <label className="block">
          Fullname:
          <input
            type="text"
            onChange={handleChangeFullname}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </label>
        <label className="block">
          Avatar:
          <input
            type="text"
            onChange={handleChangeAvatar}
            placeholder="please insert your avatar url"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </label>
        <label className="block">
          Gender:
          <input
            type="number"
            onChange={handleChangeGender}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </label>
        <button
          type="submit"
          className="px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600"
        >
          Update Profile
        </button>
      </form>
    </div>
  );
}

export default UpdateProfile;
