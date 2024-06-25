//*LIB
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

//*IMPORT
import API from "common/api/api";
import { Button } from "components";

const UpdateEmailWithOTP = () => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");

  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleOtpChange = (e) => {
    setOtp(e.target.value);
  };

  const handleSendOtp = async (e) => {
    e.preventDefault();
    const dataSendOTP = {
      email: email,
      hidden_emai: email,
      id: Number(localStorage.getItem("userId")),
    };
    try {
      const response = await API.post(
        "/user/send-otp-update-email",
        dataSendOTP
      );

      if (response.dataSendOTP.status === 200) {
        alert("OTP sent successfully. Please check your email.");
      }
    } catch (error) {
      console.error("Error sending OTP:", error);
      setMessage("Failed to send OTP. Please try again.");
    }
  };

  const handleUpdateEmail = async (e) => {
    e.preventDefault();
    const dataUpdateEmail = { email: email, otp: otp };
    try {
      // Gọi API để xác thực OTP và cập nhật email
      const response = await API.post("/user/update-email", dataUpdateEmail);
      if (response.dataUpdateEmail.status === 200) {
        alert("Email updated successfully.");
        navigate("/login");
      }
    } catch (error) {
      console.error("Error updating email:", error);
      setMessage("Failed to update email. Please try again.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-2xl font-bold">Update Email</h2>

      <form className="flex flex-col space-y-4" onSubmit={handleSendOtp}>
        <input
          className="border border-gray-300 p-2 rounded-md"
          type="email"
          value={email}
          onChange={handleEmailChange}
          placeholder="Enter your new email"
          required
        />
        <Button className="bg-blue-500 text-white p-2 rounded-md" type="submit">
          Send OTP
        </Button>
      </form>

      <form
        className="flex flex-col space-y-4 mt-4"
        onSubmit={handleUpdateEmail}
      >
        <input
          className="border border-gray-300 p-2 rounded-md"
          type="text"
          value={otp}
          onChange={handleOtpChange}
          placeholder="Enter OTP"
          required
        />
        <Button className="bg-blue-500 text-white p-2 rounded-md" type="submit">
          Update Email
        </Button>
      </form>
    </div>
  );
};

export default UpdateEmailWithOTP;
