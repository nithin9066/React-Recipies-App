import { useEffect, useState } from "react";

export default function Offline() {
    const [online, setOnline] = useState(navigator.onLine);

    useEffect(() => {
        const handleOnline = () => setOnline(true);
        const handleOffline = () => setOnline(false);

        window.addEventListener("online", handleOnline);
        window.addEventListener("offline", handleOffline);

        return () => {
            window.removeEventListener("online", handleOnline);
            window.removeEventListener("offline", handleOffline);
        };
    }, []);

    return (
        !online && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 shadow-md fixed z-10 left-0 top-0 w-full">
                <h5 className="text-lg font-semibold flex items-center">
                    <span className="mr-2">⚠️</span> You're Offline
                </h5>
            </div>
        )
    );
}
