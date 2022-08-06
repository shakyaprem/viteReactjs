import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AppProvider } from "./context/context";
import { AppApiProvider } from './context/appApiContext';
import { AppGitHubUsersProvider } from './api/AppGitHubUsersContext'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppProvider>
      <AppApiProvider>
        <AppGitHubUsersProvider>
          <App />
        </AppGitHubUsersProvider>
      </AppApiProvider>
    </AppProvider>
  </React.StrictMode>
);
