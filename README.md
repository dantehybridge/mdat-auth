# Vite + React + TypeScript + MSAL Authentication App

This project is a simple authentication flow using **Microsoft Entra ID (Azure AD)** with the **MSAL** libraries in a **Vite + React + TypeScript** environment. It is styled with **Tailwind CSS**, loaded via **CDN**, and implements role-based access control.

## 🔐 Purpose

This application demonstrates how to integrate **Microsoft Entra ID (formerly Azure AD)** for authentication using MSAL, manage user sessions, and control access based on roles.

---

## 🧭 Routes Overview

| Route         | Description                                                                 |
|---------------|-----------------------------------------------------------------------------|
| `/`           | Entry point with a "Sign In" button that redirects to Entra ID.             |
| `/config`     | Handles the redirect from Entra ID after login or logout. Validates token and role. |
| `/unauth`     | Shown when the user is authenticated but doesn't have the required roles. |
| `/logout`     | Shown after a successful logout, includes a "Sign In Again" button.         |

---

## 🧠 Authentication Flow

1. **User visits `/`**:
   - A **Sign In** button triggers MSAL login.
   - User is redirected to Entra ID.

2. **Entra ID redirects to `/config`**:
   - MSAL parses the response.
   - If authentication succeeds:
     - User roles are extracted from the token.
     - If role is `ROOT` or `NOOB` → Redirect to **external application**.
     - Otherwise → Redirect to `/unauth`.

3. **If on `/unauth`**:
   - Displays an "Access Denied" message.
   - Clears session and prevents access.

4. **User clicks logout → Entra ID → redirects to `/config`**:
   - If it's a logout, `/config` redirects to `/logout`.

5. **`/logout`**:
   - Shows logout confirmation.
   - Provides a "Sign In Again" button linking to `/`.

---

## ⚙️ Technologies Used

- **Vite**
- **React**
- **TypeScript**
- **MSAL.js** (`@azure/msal-browser` and `@azure/msal-react`)
- **Tailwind CSS (via CDN)**

---

## 🚀 Getting Started

```bash
# 1. Clone the repository
git clone https://github.com/dantehybridge/mdat-auth.git
cd mdat-auth

# 2. Install dependencies
pnpm install

# 3. Run the local server
pnpm start

# 4. Visit http://localhost:8246 in your browser
```

## 📦 Environment Variables
Make sure to configure the following environment variables in a .env file:
``` js
// These values must match the ones Entra ID defined when you created the SPA registration.

VITE_CLIENT_ID={your-client-id}
VITE_TENANT_ID={your-tenant-id}

VITE_CLOUD_URL=https://{CloudFront}/config
VITE_LOCAL_URL=http://localhost:{port}/config
```

## 📁 Folder Structure
```bash
src/
│
├── pages/
│   ├── config.page.tsx  # "/config"
│   ├── unauth.page.tsx  # "/unauth"
│   └── logout.page.tsx  # "/logout"
│
├── utils/
│   └── auth.ts
│   └── msal.ts
│
├── App.tsx
└── main.tsx
```

## 🧪 Role Handling
Roles are checked from the ID token or access token using MSAL after login. Only users with either of these roles are redirected:

- ROOT > has all actions
- NOOB > has few actions

All others are considered unauthorized.

## 🧼 Session Storage Keys
On successful login, the session sets values like:
```js
sessionStorage.setItem("u", JSON.stringify(userInfo));
sessionStorage.setItem("r", JSON.stringify(userRole));
```
These are cleared on logout or unauthorized access.

---
PS: be kind on this poor developer; here's a GIF showing the inside of its mind:

![](https://c.tenor.com/Pl24l-isDrMAAAAd/tenor.gif)