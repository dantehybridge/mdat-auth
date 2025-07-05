import React, { useEffect, useState } from "react";

import { msalInstance } from "../utils/msal";
import { setSessionValue, saveAccountToSession, userHasAuthorizationByRoles } from "../utils/auth";

export default function ConfigPage() {
  const [userName, setUserName] = useState<string | null>(null);

  useEffect(() => {
    msalInstance.handleRedirectPromise().then((response) => {
      if (response && response.account) {
        const account = response.account;
        setUserName(account.name?.split(" ")[0] || null);

        msalInstance.setActiveAccount(account);

        const rolesMEID = account.idTokenClaims?.roles || [];
        const hasRoleAuthorization = userHasAuthorizationByRoles(rolesMEID);

        if (hasRoleAuthorization) {
          saveAccountToSession(account);
          setSessionValue("a", response.accessToken || "");

          setTimeout(() => {
            window.location.href = `${import.meta.env.VITE_CLOUDFRONT_URL}/`;
          }, 1500);
        } else {
					setSessionValue("n", account.name?.split(" ")[0] || "earthling");
                    
					window.location.href = `${import.meta.env.VITE_CLOUDFRONT_URL}/auth/unauth`;
        }
      }
    });
  }, []);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center space-y-4">
        <div className="flex justify-center">
          <svg
            className="animate-spin h-8 w-8 text-blue-600"
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

        <p className="text-xl text-gray-700 font-medium">
          {userName ? `Welcome, ${userName}!` : "Processing login..."}
        </p>
        <p className="text-sm text-gray-500">
          Just a moment while we redirect you.
        </p>
      </div>
    </div>
  );
}
