import React, { useEffect, useState } from "react";

export default function UnauthPage() {
  const [userName, setUserName] = useState<string | null>(null);

  useEffect(() => {
		setUserName(sessionStorage.getItem("n"));
  }, []);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-2xl shadow-md text-center max-w-md w-full space-y-6">
        <h1 className="text-3xl font-bold text-red-600">
          Access Denied
        </h1>
        <p className="text-gray-700 text-lg">
          {`Sorry, ${userName}, you don't have permission to view this page.`}
        </p>
        <p className="text-gray-500 text-sm italic">
          But hey, every lock has a key. Maybe next time you'll have the right one! <span role="img" aria-label="key">🔑</span>
        </p>
        <button
          onClick={() => (window.location.href = "/auth/starts")}
          className="mt-4 bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition font-semibold text-lg"
          aria-label="Return to login page"
        >
          Go back to the start
        </button>
      </div>
    </div>
  );
}

