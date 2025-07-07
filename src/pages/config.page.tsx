import React, { useEffect, useState } from "react";
import { msalInstance } from "../utils/msal";
import {
  setSessionValue,
  saveAccountToSession,
  userHasAuthorizationByRoles,
} from "../utils/auth";

export default function ConfigPage() {
  const [mode, setMode] = useState<"starts" | "logout">("starts");
  const [userName, setUserName] = useState<string | null>(null);

  useEffect(() => {
    const queries = new URLSearchParams(window.location.search);
    const goodbye = queries.get("goodbye");

    if (goodbye) {
      setMode("logout");

      setTimeout(() => {
        msalInstance.logoutRedirect({
          account: msalInstance.getActiveAccount(),
          postLogoutRedirectUri: `${import.meta.env.VITE_CLOUDFRONT_URL}/auth/logout`,
        });
      }, 2000);

      return;
    }

    msalInstance.handleRedirectPromise().then((response) => {
      if (response && response.account) {
        const account = response.account;
        msalInstance.setActiveAccount(account);
        const firstName = account.name?.split(" ")[0] || null;
        setUserName(firstName);

        const rolesMEID = account.idTokenClaims?.roles || [];
        const hasRoleAuthorization = userHasAuthorizationByRoles(rolesMEID);

        if (hasRoleAuthorization) {
          saveAccountToSession(account);
          setSessionValue("a", response.accessToken || "");

          setTimeout(() => {
            window.location.href = `${import.meta.env.VITE_CLOUDFRONT_URL}/`;
          }, 2000);
        } else {
          setSessionValue("n", firstName || "earthling");
          setTimeout(() => {
            window.location.href = `${import.meta.env.VITE_CLOUDFRONT_URL}/auth/unauth`;
          }, 2000);
        }
      }
    });
  }, []);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-2xl shadow-md text-center max-w-md w-full space-y-6">
        {mode === "logout" ? (
          <>
            <h1 className="text-3xl font-bold">Logging out...</h1>
            <p className="text-gray-700 text-lg">
              Just a moment while we pack up your session.
            </p>
            <p className="text-gray-500 text-sm italic">
              Your cookies will miss you 🍪
            </p>
          </>
        ) : (
          <>
            <div className="flex justify-center">
              <svg
                className="animate-spin h-10 w-10 text-blue-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v8H4z"
                />
              </svg>
            </div>
            <h1 className="text-3xl font-bold">
              {userName ? `Welcome, ${userName}!` : "Processing login..."}
            </h1>
            <p className="text-gray-700 text-lg">
              Just a moment while we get things ready for you.
            </p>
            <p className="text-gray-500 text-sm italic">
              Great things come to those who wait... and wait... ⌛
            </p>
          </>
        )}
      </div>
    </div>
  );
}
