import React from "react";
import ReactDOM from "react-dom/client"; // <-- updated import
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// React 18 way:
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Optional: performance logging
reportWebVitals();
