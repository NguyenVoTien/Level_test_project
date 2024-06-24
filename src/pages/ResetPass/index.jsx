import API from "common/api/api";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ResetPasswordPage = () => {
  const [password, setPassword] = useState("");
  const [reEnterPassword, setReEnterPassword] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
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
    let dataReset = { password: password };
    try {
      const response = await API.post("/user/change-pass", dataReset);
      console.log(response.dataReset);
      alert("Reset password successfull. 😍");
      navigate("/profile");
    } catch (error) {
      console.error("Failed to reset password", error);
      alert("Failed to reset password. Please try again.");
    }
  };

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-xl font-semibold mb-4">Reset Password</h2>
      <form onSubmit={handleSubmit}>
        <label className="block mb-2">
          Password:
          <input
            type="password"
            value={password}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </label>
        <label className="block mb-2">
          Re-enter Password:
          <input
            type="password"
            onChange={handleChangeReEnterPassword}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </label>
        <button
          type="submit"
          className="px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600"
        >
          Send Reset
        </button>
      </form>
    </div>
  );
};

export default ResetPasswordPage;
