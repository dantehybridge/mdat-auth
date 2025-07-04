import React, { useEffect, useState } from "react";

export default function UnauthPage() {
  const [userName, setUserName] = useState<string | null>(null);

  useEffect(() => {
    const nameFromSession = sessionStorage.getItem("n");
    if (nameFromSession) {
      setUserName(nameFromSession);
    }
  }, []);

  return (
    <div className="flex items-center justify-center h-screen bg-white">
      <div className="bg-gray-50 p-8 rounded-2xl shadow-md text-center max-w-md w-full space-y-4">
        <h1 className="text-2xl font-semibold text-red-600">
          Access Denied
        </h1>
        <p className="text-gray-700">
          {`Sorry, ${userName}, you don't have permission to view this page.`}
        </p>
        <p className="text-gray-500 text-sm">
          Please log in with an account that has the correct role.
        </p>
        <button
          onClick={() => (window.location.href = "/auth/starts")}
          className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition"
        >
          Go back to the start
        </button>
      </div>
    </div>
  );
}

