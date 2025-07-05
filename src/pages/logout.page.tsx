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
          Thanks for stopping by — this isn't goodbye, it's just "see you later"!
        </p>
        <p className="text-gray-500 text-sm italic">
          (Like a boomerang, you always come back... <span role="img" aria-label="boomerang">🪃</span>)
        </p>
        <p className="text-gray-500 text-sm">
          Whenever you're ready, hit the button below and <strong>go back to the start</strong> — no time machine needed.
        </p>
        <button
          onClick={() => (window.location.href = "/auth/starts")}
          className="mt-4 bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition font-semibold text-lg"
          aria-label="Go back to the start"
        >
          Go back to the start
        </button>
      </div>
    </div>
  );
}
