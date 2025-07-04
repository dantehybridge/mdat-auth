import { PublicClientApplication } from "@azure/msal-browser";

export const msalSettings = {
    auth: {
        clientId: import.meta.env.VITE_MSAL_CLIENT_ID || "",
        authority: `https://login.microsoftonline.com/${import.meta.env.VITE_MSAL_TENANT_ID}`,
        redirectUri: `http://localhost:8246/config`,
        navigateToLoginRequestUrl: false,
    },
    cache: {
        cacheLocation: "sessionStorage",
        storeAuthStateInCookie: false,
    },
};

export const msalInstance = new PublicClientApplication(msalSettings);

export const loginRequest = {
    scopes: ["openid", "profile", "email", `api://${import.meta.env.VITE_MSAL_CLIENT_ID}/mdat.access.full`]
};
