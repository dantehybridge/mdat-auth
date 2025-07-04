export default function UnauthPage() {
    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-2xl shadow-md text-center max-w-md w-full">
                <div className="mb-6">
                    <h1 className="text-2xl font-semibold text-red-600">
                        Unauthorized Access
                    </h1>
                    <p className="text-gray-700 mt-2">
                        You do not have permission to view this page.
                    </p>
                    <p className="text-gray-500 text-sm mt-1">
                        Please log in with an account that has the appropriate role.
                    </p>
                </div>

                <button
                onClick={() => (window.location.href = "/auth/starts")}
                className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition"
                >
                Return to Login
                </button>
            </div>
        </div>
    );
}
