// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Loader from "../components/Loader";

// const Home = () => {
//     const [link, setLink] = useState("");
//     const [loading, setLoading] = useState(false);
//     const navigate = useNavigate();

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         setLoading(true);
//         setTimeout(() => {
//             setLoading(false);
//             navigate("/segments");
//         }, 1500);
//     };

//     if (loading) return <Loader message="Scraping the content..." />;

//     return (
//         <form
//             onSubmit={handleSubmit}
//             className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md mx-auto mt-20"
//         >
//             <h1 className="text-2xl font-bold mb-4 text-center">Enter URL to Scrape</h1>
//             <input
//                 type="text"
//                 placeholder="https://example.com"
//                 value={link}
//                 onChange={(e) => setLink(e.target.value)}
//                 className="w-full p-3 border rounded mb-4"
//                 required
//             />
//             <button
//                 type="submit"
//                 className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition"
//             >
//                 Scrape
//             </button>
//         </form>
//     );
// };

// export default Home;


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../components/Loader";
import { toast } from "react-toastify";

const Home = () => {
    const [link, setLink] = useState("");
    const [loading, setLoading] = useState(false);
    const [isFocused, setIsFocused] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            // Simulate navigation - in real app, use navigate("/segments");
            navigate("/segments");
            toast.success("Scraping completed! Navigating to segments...");
        }, 1500);
    };

    // Loading component simulation
    if (loading) return (
        <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-950 flex items-center justify-center">
            <div className="text-center">
                <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-purple-400 mb-4"></div>
                <p className="text-purple-300 text-lg">Scraping the content...</p>
            </div>
        </div>
    );

    return (
        <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-950 flex items-center justify-center p-4 relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-1/2 -right-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute -bottom-1/2 -left-1/2 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-400/5 rounded-full blur-2xl animate-pulse delay-500"></div>
            </div>

            {/* Floating particles */}
            <div className="absolute inset-0 pointer-events-none">
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-1 h-1 bg-purple-400/30 rounded-full animate-pulse"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 3}s`,
                            animationDuration: `${2 + Math.random() * 3}s`
                        }}
                    ></div>
                ))}
            </div>

            <div className="relative z-10 w-full max-w-md mx-auto">
                <form
                    onSubmit={handleSubmit}
                    className="bg-black/40 backdrop-blur-xl border border-purple-500/20 p-8 rounded-2xl shadow-2xl transform transition-all duration-500 hover:scale-[1.02] hover:shadow-purple-500/20 hover:shadow-2xl"
                >
                    {/* Header with gradient text */}
                    <div className="text-center mb-8">
                        <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 via-purple-300 to-white bg-clip-text text-transparent mb-2 animate-pulse">
                            Enter URL to Scrape
                        </h1>
                        <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-purple-300 mx-auto rounded-full"></div>
                    </div>

                    {/* Input container with animated border */}
                    <div className="relative mb-6">
                        <div className={`absolute inset-0 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl blur-sm transition-opacity duration-300 ${isFocused ? 'opacity-75' : 'opacity-0'}`}></div>
                        <input
                            type="text"
                            placeholder="https://example.com"
                            value={link}
                            onChange={(e) => setLink(e.target.value)}
                            onFocus={() => setIsFocused(true)}
                            onBlur={() => setIsFocused(false)}
                            className="relative w-full p-4 bg-gray-900/90 border border-purple-500/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 backdrop-blur-sm"
                            required
                        />

                        {/* Input icon */}
                        <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-purple-400">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                            </svg>
                        </div>
                    </div>

                    {/* Submit button with hover animations */}
                    <button
                        type="submit"
                        className="group relative w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-300 hover:from-purple-500 hover:to-purple-600 cursor-pointer hover:shadow-lg hover:shadow-purple-500/25 active:scale-95 overflow-hidden"
                    >
                        {/* Button background animation */}
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                        {/* Button content */}
                        <div className="relative flex items-center justify-center">
                            <span className="mr-2">Scrape</span>
                            <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </div>

                        {/* Ripple effect */}
                        <div className="absolute inset-0 rounded-xl opacity-0 group-active:opacity-100 bg-white/10 transition-opacity duration-150"></div>
                    </button>

                    {/* Decorative elements */}
                    <div className="mt-6 flex justify-center space-x-2">
                        {[...Array(3)].map((_, i) => (
                            <div
                                key={i}
                                className="w-2 h-2 bg-purple-400/30 rounded-full animate-pulse"
                                style={{ animationDelay: `${i * 0.2}s` }}
                            ></div>
                        ))}
                    </div>
                </form>

                {/* Bottom decorative text */}
                <div className="text-center mt-8">
                    <p className="text-purple-300/60 text-sm">
                        Powered by advanced web scraping technology
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Home;