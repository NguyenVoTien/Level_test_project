//* LIB
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

//*IMPORT
import API from "common/api/api";
import { Button, Text } from "components";
import { Link } from "react-router-dom";

const ChangePass = () => {
  const [password, setPassword] = useState("");
  const [reEnterPassword, setReEnterPassword] = useState("");
  const navigate = useNavigate();

  const handleChangePass = (e) => {
    setPassword(e.target.value);
  };
  const handleChangeReEnterPassword = (e) => {
    setReEnterPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== reEnterPassword) {
      alert("Passwords do not match. Please try again.");
      return;
    }
    let dataChange = { password: password };
    try {
      const response = await API.post("/user/change-pass", dataChange);
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

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-xl font-semibold mb-4">Change Password</h2>
      <form onSubmit={handleSubmit}>
        <Text className="block mb-2">
          Password:
          <input
            type="password"
            value={password}
            onChange={handleChangePass}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </Text>
        <Text className="block mb-2">
          Re-enter Password:
          <input
            type="password"
            onChange={handleChangeReEnterPassword}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </Text>
        <Button
          type="submit"
          className="px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600"
        >
          Send Reset
        </Button>
        <Link className="text-black text-center text-sm" to="/profile">
          Back
        </Link>
      </form>
    </div>
  );
};

export default ChangePass;
