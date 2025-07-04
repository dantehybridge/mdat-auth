import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { MsalProvider } from "@azure/msal-react";

import { msalInstance } from "./utils/msal";

import App from './App.tsx';

async function bootstrap() {
  try {
    await msalInstance.initialize();

    const response = await msalInstance.handleRedirectPromise();

    if (response) {
      msalInstance.setActiveAccount(response.account);
      window.history.replaceState({}, document.title, "/config");
    }
  } catch (error) {
    console.error("MSAL initialization or redirect handling error:", error);
  }

  const root = document.getElementById("root")!;
  createRoot(root).render(
    <StrictMode>
      <MsalProvider instance={msalInstance}>
        <App />
      </MsalProvider>
    </StrictMode>
  );
}

(async () => {
  await bootstrap();
})();
