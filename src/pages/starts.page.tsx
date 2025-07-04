import { msalInstance, loginRequest } from "../utils/msal";

export default function StartsPage() {
    const handleLogin = () => {
        msalInstance.loginRedirect(loginRequest);
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-2xl font-bold mb-6">mdat: auth</h1>
            <button onClick={handleLogin} className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
                Login with Microsoft
            </button>
        </div>
    );
};
