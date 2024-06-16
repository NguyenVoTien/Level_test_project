import { GoogleOAuthProvider } from "@react-oauth/google";
import React from "react";
import Routes from "./Routes";
import CsrfToken from "common/helpers/csrfToken";

function App() {
  return (
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
      <CsrfToken />
      <Routes />
    </GoogleOAuthProvider>
  );
}

export default App;
