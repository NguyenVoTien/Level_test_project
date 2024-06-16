import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "components";
import API from "common/api/api";
// Giả sử bạn đã import API từ đâu đó

const Verification = () => {
  const { email, userId, version, token } = useParams();
  const navigate = useNavigate();

  const [verificationStatus, setVerificationStatus] = useState(null);

  useEffect(() => {
    const verifyAccount = async () => {
      try {
        const res = await API.get(
          `/auth/veri-account?user_id=${userId}&token=${token}&email=${email}`
        );

        if (res.data.success) {
          setVerificationStatus("Verification successful. You can now log in.");
          // Navigate to login page after successful verification
          navigate("/login");
        } else {
          setVerificationStatus("Verification failed. Please try again.");
        }
      } catch (error) {
        console.error("Error during verification:", error);
        setVerificationStatus("An error occurred. Please try again later.");
      }
    };

    verifyAccount();
  }, [email, userId, token]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    // This function now doesn't need to do anything since navigation is handled in useEffect
  };

  return (
    <div class="p-4">
      <h3 class="text-lg font-semibold mb-4">
        Chúc Mừng Bạn Đã Đăng Ký Thành Công, mật khẩu tôi sẽ gửi qua gmail, vui
        lòng chọn tiếp tục và check gmail để đăng nhập !!!
      </h3>
      <Button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleSubmit}
      >
        Submit
      </Button>
      {verificationStatus && <p class="mt-2">{verificationStatus}</p>}
    </div>
  );
};

export default Verification;
