import React, { useEffect } from "react";

import { msalInstance } from "../utils/msal";
import { setSessionValue, saveAccountToSession } from "../utils/auth";

export default function ConfigPage() {
    useEffect(() => {
        msalInstance.handleRedirectPromise()
            .then((response) => {
                if (response && response.account) {
                    const account = response.account;
                    msalInstance.setActiveAccount(account);

                    saveAccountToSession(account);
                    setSessionValue("a", response.accessToken || "");

                    setTimeout(() => {
                        window.location.href = `${import.meta.env.CLOUDFRONT_URL}/`;
                    }, 1500);
                }
            })
    }, []);

    return (
        <div className="flex items-center justify-center h-screen">
            <p className="text-gray-600">Processing login...</p>
        </div>
    );
};
