import React, { useEffect } from "react";

export default function LogoutPage() {
  useEffect(() => {
    sessionStorage.clear();
  }, []);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-2xl shadow-md text-center max-w-md w-full space-y-6">
        <h1 className="text-3xl font-bold">
          You've been logged out
        </h1>
        <p className="text-gray-700 text-lg">
          That's it! You're officially out. But don't worry — we'll be here when you're ready to come back.
        </p>
        <p className="text-gray-500 text-sm italic">
          It's not goodbye, it's just "until next session". <span role="img" aria-label="waving hand">👋</span>
        </p>
        <button
          onClick={() => (window.location.href = "/auth/starts")}
          className="mt-4 bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition font-semibold text-lg"
        >
          Go back to the start
        </button>
      </div>
    </div>
  );
}
