import axios from "axios";

const RandomIdDevice = () => {
  return Math.floor(Math.random() * Date.now()).toString(16);
};

const setDeviceIdInLocalStorage = () => {
  let deviceId = localStorage.getItem("device-id");
  if (!deviceId) {
    deviceId = RandomIdDevice();
    localStorage.setItem("device-id", deviceId);
  }

  return deviceId;
};

const API = axios.create({
  baseURL: "http://103.82.195.138:8000/v1",
  headers: {
    "X-Device-Id": setDeviceIdInLocalStorage(),
    "X-Csrf-Token": localStorage.getItem("csrfToken"),
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

// Assuming API is your Axios instance
API.interceptors.request.use(
  (config) => {
    // Retrieve the token from localStorage or any other storage you use
    const token = localStorage.getItem("Token");
    if (token) {
      // If the token exists, add it to the request headers
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Your existing response interceptor for handling responses and errors
API.interceptors.response.use(
  (response) => {
    // Your existing response handling
    return response;
  },
  (error) => {
    // Your existing error handling
    if (error.response && error.response.status === 400) {
      localStorage.removeItem("Token");
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export default API;
