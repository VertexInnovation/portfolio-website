import "./index.css";
import App from "./App.tsx";
import React from "react";
import ReactDOM from "react-dom/client";
import { GoogleOAuthProvider } from "@react-oauth/google";

<<<<<<< HEAD
const clientId = import.meta.env.VITE_CLIENTID;
=======
const clientId=import.meta.env.VITE_CLIENTID;
>>>>>>> b7c54e0def33e9566d0727ab7d4daf6128ce0b42

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId={clientId}>
      <App />
    </GoogleOAuthProvider>
  </React.StrictMode>
);
