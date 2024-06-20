import { GoogleOAuthProvider } from "@react-oauth/google";
import React, { useEffect, useState } from "react";
import Routes from "./Routes";
import API from "common/api/api";

function App() {
  // const [csrfToken, setCsrfToken] = useState("");

  // useEffect(() => {
  //   async function fetchCsrfToken() {
  //     try {
  //       const response = await API.get("/key/csrf-token");
  //       const newCsrfToken = response.data.metadata;
  //       setCsrfToken(newCsrfToken);
  //       localStorage.setItem("csrfToken", newCsrfToken);
  //       console.log(newCsrfToken);
  //     } catch (error) {
  //       console.error("Error fetching CSRF token:", error);
  //     }
  //   }
  //   fetchCsrfToken();
  // }, []);

  return (
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
      <Routes />
    </GoogleOAuthProvider>
  );
}

export default App;
