import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useGoogleLogin } from "@react-oauth/google";

import API from "common/api/api";
import { Button, CheckBox, FloatingInput, Img, Line, Text } from "components";

const Login = () => {
  const googleSignIn = useGoogleLogin({
    onSuccess: (res) => {
      console.log("res", res);
      alert("Login successfull. 😍");
    },
  });

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    let data = { identifier: email, password: password };

    try {
      const res = await API.post("/auth/login-identifier", data);
      if (res.data.status === 200) {
        const newUserId = res.data.metadata.id;
        const newAccessToken = res.data.metadata.accessToken;
        if (res.data.metadata && newUserId) {
          localStorage.setItem("userId", newUserId);
          localStorage.setItem("Token", newAccessToken);
          console.log(newUserId);
          navigate("/profile");
        } else {
          console.error("UserId not found in response");
        }
      }
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="bg-white h-[1117px] mx-auto p-[116px] md:p-10 sm:p-5 relative w-full"
      >
        <Img
          className="absolute h-[519px] left-[13%] object-cover top-[14%] w-[28%] md:w-[40%] sm:w-[60%]"
          src="images/img_31612531.png"
          alt="31612531"
        />
        <div className="absolute bg-gray-100 flex flex-col h-max inset-[0] items-end justify-center m-auto outline outline-[1px] outline-black p-3.5 md:p-5 rounded-[16px] w-2/5 md:w-3/5 sm:w-4/5">
          <div className="flex flex-col justify-start mb-8 mr-4 w-[89%] md:w-full">
            <div className="flex flex-col font-cocogoose gap-[18px] items-start justify-start md:ml-0 ml-[199px] w-[67%] md:w-full">
              <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-full">
                <Img
                  className="sm:flex-1 h-[126px] md:h-auto sm:mt-0 mt-3 object-cover w-[39%] sm:w-full"
                  src="images/img_balksz11.png"
                  alt="balkszEleven"
                />
                <div className="h-[23px] sm:ml-0 ml-[137px] relative w-1/5 sm:w-full">
                  <a
                    href="javascript:"
                    className="absolute h-full inset-0 justify-center m-auto text-base text-black w-max"
                  >
                    <Link to="/register" className="text-base font-semibold">
                      Register
                    </Link>
                  </a>
                  <div className="absolute bg-blue-800 bottom-0 h-px left-0 w-[69%]" />
                </div>
                <Img
                  className="h-[18px] sm:ml-0 ml-2 sm:mt-0 mt-0.5 w-[18px]"
                  src="images/img_arrowleft.svg"
                  alt="arrowleft"
                />
              </div>
              <Text
                className="text-4xl sm:text-2xl sm:text-center text-black"
                size="txtCOCOGOOSEDemiBold36"
              >
                bylogin
              </Text>
            </div>
            <Text
              className="leading-[108.10%] mt-4 text-center text-gray-600 text-sm w-full sm:w-full"
              size="txtSourceSansProSemiBold14"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac
              tortor volutpat, vulputate massa non, feugiat tellus. Proin ac
              neque et felis bibendum varius.
            </Text>
            <div className="flex flex-col font-sourcesanspro items-center justify-start mt-7 w-full ">
              <div className="h-[73px] md:h-[89px] mt-7 relative w-full">
                <div className="absolute bottom-0 md:h-[62px] h-[66px] inset-x-0 mx-auto w-full">
                  <div className="absolute bg-gray-100 border border-gray-400 border-solid flex flex-col h-max inset-0 items-start justify-center m-auto p-4 rounded w-full">
                    <input
                      className="absolute bg-gray-100 border border-gray-400 border-solid flex flex-col h-max inset-0 items-start justify-center p-4 rounded w-full"
                      size="txtSourceSansProSemiBold14Gray500"
                      placeholder="Username or Email..."
                      onChange={handleChangeEmail}
                    />
                  </div>
                  <div className="absolute bg-gray-100 h-[7px] left-[4%] top-0 w-[28%]" />
                </div>
                <Text
                  className="absolute left-[12%] text-black text-center text-sm top-0"
                  size="txtSourceSansProSemiBold14Black900"
                >
                  Email
                </Text>
              </div>
              <div className="h-[73px] md:h-[89px] mt-7 relative w-full">
                <div className="absolute bottom-0 md:h-[62px] h-[66px] inset-x-0 mx-auto w-full">
                  <div className="absolute bg-gray-100 border border-gray-400 border-solid flex flex-col h-max inset-0 items-start justify-center m-auto p-4 rounded w-full">
                    <input
                      className="absolute selection:bg-gray-100 border border-gray-400 border-solid flex flex-col h-max inset-0 items-start justify-center p-4 rounded w-full"
                      size="txtSourceSansProSemiBold14Gray500"
                      placeholder="********************"
                      onChange={handleChangePassword}
                    />
                  </div>
                  <div className="absolute bg-gray-100 h-[7px] left-[4%] top-0 w-[28%]" />
                </div>
                <Text
                  className="absolute left-[12%] text-black text-center text-sm top-0"
                  size="txtSourceSansProSemiBold14Black900"
                >
                  Password
                </Text>
              </div>
              <div className="flex flex-row items-start justify-between mt-4 w-full">
                <CheckBox
                  className="font-semibold text-center text-sm"
                  inputClassName="border border-gray-400 h-4 mr-1 w-4"
                  name="rememberme"
                  id="rememberme"
                  label="Remember me"
                />
                <Link
                  className="text-black text-center text-sm"
                  to="/forget/password"
                >
                  Forgot Password?
                </Link>
              </div>
              <Button
                className="cursor-pointer font-semibold mt-3 text-base text-center w-full"
                onClick={handleSubmit}
              >
                Login
              </Button>
            </div>
            <div className="flex sm:flex-col flex-row font-sourcesanspro gap-4 items-center justify-start mt-6 w-full">
              <div
                className="common-pointer bg-blue-500 flex flex-row gap-4 items-center justify-start p-1 w-full sm:w-full"
                onClick={() => googleSignIn()}
              >
                <div className="bg-white flex flex-col items-start justify-end p-1.5 w-1/5">
                  <Img
                    className="h-[26px] object-cover w-[26px]"
                    src="images/img_googleglogo.png"
                    alt="googleglogo"
                  />
                </div>
                <Text
                  className="text-center text-sm text-white w-full"
                  size="txtSourceSansProSemiBold14WhiteA700"
                >
                  Sign in with Google
                </Text>
              </div>
              <div className="bg-indigo-600 flex flex-row gap-4 items-center justify-center p-1 w-full sm:w-full">
                <div className="bg-white flex flex-col items-center justify-end p-1 w-1/5">
                  <Img
                    className="h-[30px] object-cover w-[43%]"
                    src="images/img_facebook2logo.png"
                    alt="facebook2logo"
                  />
                </div>
                <Text
                  className="text-center text-sm text-white w-full"
                  size="txtSourceSansProSemiBold14WhiteA700"
                >
                  Sign in with Facebook
                </Text>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default Login;
