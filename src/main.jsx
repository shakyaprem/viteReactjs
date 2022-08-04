import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AppProvider } from "./context/context";
import { AppApiProvider } from './context/appApiContext';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppProvider>
      <AppApiProvider>
        <App />
      </AppApiProvider>
    </AppProvider>
  </React.StrictMode>
);
