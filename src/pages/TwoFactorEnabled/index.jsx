import React, { useState } from "react";
import axios from "axios";
import API from "common/api/api";

const TwoFactorEnabled = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [loading, setLoading] = useState(false);

  const toggleTwoFactor = async () => {
    setLoading(true);
    try {
      // Giả sử đây là endpoint để kích hoạt/vô hiệu hóa 2FA
      const response = await API.post("/user/enable-tow-factor", {
        enable: !isEnabled,
      });
      if (res.data.status === 200) {
        setIsEnabled(response.data.isEnabled);
        alert("Enabled successfull 😍");
      }
    } catch (error) {
      console.error("Error toggling two-factor authentication", error);
      // Xử lý lỗi ở đây, ví dụ: hiển thị thông báo lỗi
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Two-Factor Authentication</h2>
      <p>Status: {isEnabled ? "Enabled" : "Disabled"}</p>
      <button onClick={toggleTwoFactor} disabled={loading}>
        {loading ? "Processing..." : isEnabled ? "Disable" : "Enable"}{" "}
        Two-Factor Authentication
      </button>
    </div>
  );
};

export default TwoFactorEnabled;
