import type { AccountInfo } from "@azure/msal-browser";

const STORAGE_KEYS = {
  ID_TOKEN: "t",
  USERNAME: "u",
  ID_ROLES: "r",
};

export function saveAccountToSession(account: AccountInfo): void {
  if (!account) return;
  setSessionValue(STORAGE_KEYS.ID_TOKEN, account.idToken || "");
  setSessionValue(STORAGE_KEYS.USERNAME, account.username || "");
  setSessionValue(STORAGE_KEYS.ID_ROLES, JSON.stringify(account.idTokenClaims?.roles ?? []));
}

export function setSessionValue(key: string, value: string): void {
  if (typeof window !== "undefined") sessionStorage.setItem(key, value);
}
