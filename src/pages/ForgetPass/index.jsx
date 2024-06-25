import API from "common/api/api";
import { Button, Text } from "components";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const ForgetPage = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleResetPass = async (event) => {
    event.preventDefault();
    let data = { email: email };

    try {
      const res = await API.post("/auth/forget", data);
      if (res.data.status === 200) {
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
    <>
      <form onSubmit={handleResetPass}>
        <div className="flex flex-col space-y-4">
          <Text
            htmlFor="email"
            className="block text-sm font-semibold text-gray-900"
          >
            Email
          </Text>
          <input
            id="email"
            type="email"
            className="min-w-0 block w-[50%] sm:w-3/4 md:w-1/2 px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-sm"
            placeholder="Username or Email..."
            onChange={handleChangeEmail}
          />
          <Button
            type="submit"
            className="mt-2 w-[15%] sm:w-1/4 md:w-1/5 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Send Forget Password
          </Button>
        </div>
      </form>
      <Link
        className="mt-2 w-[15%] sm:w-1/4 md:w-1/5 flex 
           justify-center py-2 px-4 border border-transparent rounded-md 
            shadow-sm text-sm font-medium text-gray-600 bg-gray-100
          hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
        to="/login"
      >
        Back
      </Link>
    </>
  );
};

export default ForgetPage;
