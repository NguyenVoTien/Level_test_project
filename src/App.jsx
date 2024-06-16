import { GoogleOAuthProvider } from "@react-oauth/google";
import React, { useEffect } from "react";
import Routes from "./Routes";
import API from "common/api/api";

function App() {
  useEffect(() => {
    async function fetchCsrfToken() {
      try {
        const response = await API.get("/key/csrf-token");
        const data = await response.json();
        setCsrfToken(data.csrf_token);
        console.log(response);
      } catch (error) {
        console.error("Error fetching CSRF token:", error);
      }
    }
    fetchCsrfToken();
  }, []);

  return (
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
      <Routes />
    </GoogleOAuthProvider>
  );
}

export default App;
