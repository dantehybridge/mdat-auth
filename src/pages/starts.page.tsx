import { msalInstance, loginRequest } from "../utils/msal";

export default function StartsPage() {
  const handleLogin = () => {
    msalInstance.loginRedirect(loginRequest);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-2xl shadow-md text-center max-w-md w-full space-y-6">
        <h1 className="text-3xl font-bold text-blue-600">
          mdat: auth
        </h1>
        <p className="text-gray-700 text-lg">
          Ready to start your journey? Just one click away from ✨ magic!
        </p>
        <button
          onClick={handleLogin}
          className="mt-4 bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition font-semibold text-lg"
          aria-label="Login with Microsoft"
        >
          Login with Microsoft
        </button>
      </div>
    </div>
  );
}
