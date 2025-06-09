// // import React, { useEffect, useState } from "react";
// // import { useParams, useNavigate } from "react-router-dom";
// // import { segmentData } from "../data";
// // import Loader from "../components/Loader";

// // const Detail = () => {
// //     const { id } = useParams();
// //     const navigate = useNavigate();
// //     const [loading, setLoading] = useState(true);
// //     const segment = segmentData[parseInt(id)];

// //     useEffect(() => {
// //         setTimeout(() => setLoading(false), 1000);
// //     }, []);

// //     if (!segment) return <p>Segment not found.</p>;
// //     if (loading) return <Loader message="Fetching segment data..." />;

// //     return (
// //         <div className="bg-white p-8 rounded-xl shadow-lg max-w-3xl w-full mx-auto mt-20">
// //             <h2 className="text-2xl font-bold mb-2 text-indigo-700">{segment.title}</h2>
// //             <p className="text-sm mb-2 text-gray-500">
// //                 🎯 <span className="italic">Target:</span> {segment.targeting}
// //             </p>
// //             <p className="text-gray-800 whitespace-pre-line">{segment.value}</p>
// //             <button
// //                 onClick={() => navigate("/segments")}
// //                 className="mt-6 bg-gray-200 hover:bg-gray-300 text-sm px-4 py-2 rounded"
// //             >
// //                 ⬅ Back to Segments
// //             </button>
// //         </div>
// //     );
// // };

// // export default Detail;


// import React, { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { segmentData } from "../data";
// import Loader from "../components/Loader";

// const Detail = () => {
//     const [loading, setLoading] = useState(true);
//     const [isVisible, setIsVisible] = useState(false);
//     const navigate = useNavigate();
//     const { id } = useParams(); // Using useParams to get the segment ID

//     // Mock segment data and ID for demonstration
// //     const segmentData = [
// //         {
// //             title: "Young Professionals",
// //             targeting: "Age 25-35, Urban areas, College-educated",
// //             value: `This segment represents ambitious young professionals who are establishing their careers and building their financial foundation. They are typically tech-savvy, value efficiency, and seek products and services that help them advance professionally.

// // Key Characteristics:
// // • High digital engagement and social media usage
// // • Value brands that align with their professional image
// // • Prioritize convenience and time-saving solutions
// // • Interested in career development and networking opportunities
// // • Have disposable income but are mindful of spending

// // Marketing Approach:
// // Focus on professional growth, efficiency, and lifestyle enhancement. Use LinkedIn, Instagram, and professional networking events for outreach. Emphasize quality, innovation, and how your product/service fits into their busy lifestyle.

// // Recommended Channels:
// // - LinkedIn advertising
// // - Professional podcasts
// // - Industry conferences
// // - Social media influencer partnerships
// // - Email marketing with career-focused content

// // This segment responds well to authentic storytelling and peer recommendations. They appreciate brands that understand their ambitions and support their professional journey.`
// //         }
// //     ];

//     const segment = segmentData[parseInt(id)];

//     useEffect(() => {
//         setTimeout(() => {
//             setLoading(false);
//             setTimeout(() => setIsVisible(true), 100);
//         }, 1000);
//     }, []);

//     const handleBack = () => {
//         // Simulate navigation - in real app, use navigate("/segments");
//         navigate("/segments");
//         toast.success("Navigating back to segments...");
//     };

//     if (!segment) {
//         return (
//             <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-950 flex items-center justify-center">
//                 <div className="text-center">
//                     <div className="text-6xl mb-4">🔍</div>
//                     <h2 className="text-2xl font-bold text-white mb-2">Segment Not Found</h2>
//                     <p className="text-purple-300/80">The requested segment could not be located.</p>
//                 </div>
//             </div>
//         );
//     }

//     // Loading component
//     if (loading) return (
//         <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-950 flex items-center justify-center">
//             <div className="text-center">
//                 <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-purple-400 mb-4"></div>
//                 <p className="text-purple-300 text-lg">Scraping the content...</p>
//             </div>
//         </div>
//     );


//     return (
//         <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-950 relative overflow-hidden">
//             {/* Animated background elements */}
//             <div className="absolute inset-0 overflow-hidden">
//                 <div className="absolute top-20 left-20 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse"></div>
//                 <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
//                 <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-purple-400/5 rounded-full blur-2xl animate-pulse delay-500"></div>
//             </div>

//             {/* Floating particles */}
//             <div className="absolute inset-0 pointer-events-none">
//                 {[...Array(12)].map((_, i) => (
//                     <div
//                         key={i}
//                         className="absolute w-1 h-1 bg-purple-400/20 rounded-full animate-pulse"
//                         style={{
//                             left: `${Math.random() * 100}%`,
//                             top: `${Math.random() * 100}%`,
//                             animationDelay: `${Math.random() * 3}s`,
//                             animationDuration: `${2 + Math.random() * 3}s`
//                         }}
//                     ></div>
//                 ))}
//             </div>

//             {/* Main Content */}
//             <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
//                 <div className={`w-full max-w-4xl mx-auto transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
//                     }`}>
//                     {/* Back Button */}
//                     <div className="mb-8">
//                         <button
//                             onClick={handleBack}
//                             className="group flex items-center space-x-2 bg-black/40 backdrop-blur-xl border border-purple-500/20 px-6 py-3 rounded-xl text-purple-300 hover:text-white hover:border-purple-400/40 transition-all duration-300 hover:bg-purple-500/10"
//                         >
//                             <svg className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//                             </svg>
//                             <span className="font-medium">Back to Segments</span>
//                         </button>
//                     </div>

//                     {/* Main Card */}
//                     <div className="bg-black/40 backdrop-blur-xl border border-purple-500/20 rounded-3xl shadow-2xl overflow-hidden">
//                         {/* Header Section */}
//                         <div className="relative p-8 pb-6">
//                             {/* Header background gradient */}
//                             <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-purple-500/10"></div>

//                             <div className="relative flex items-start justify-between">
//                                 <div className="flex-1">
//                                     <div className="flex items-center space-x-4 mb-4">
//                                         <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center">
//                                             <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
//                                             </svg>
//                                         </div>
//                                         <div>
//                                             <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
//                                                 {segment.title}
//                                             </h1>
//                                             <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-purple-300 rounded-full"></div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>

//                             {/* Targeting Section */}
//                             <div className="relative mt-6 p-4 bg-purple-500/10 rounded-xl border border-purple-500/20">
//                                 <div className="flex items-start space-x-3">
//                                     <div className="flex-shrink-0 mt-1">
//                                         <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-purple-500 rounded-lg flex items-center justify-center">
//                                             <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
//                                             </svg>
//                                         </div>
//                                     </div>
//                                     <div>
//                                         <h3 className="text-purple-200 font-semibold mb-1">Target Audience</h3>
//                                         <p className="text-purple-100/90 leading-relaxed">{segment.targeting}</p>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Content Section */}
//                         <div className="p-8 pt-0">
//                             <div className="prose prose-invert max-w-none">
//                                 <div className="bg-gray-900/40 rounded-2xl p-6 border border-purple-500/10">
//                                     <h3 className="text-xl font-semibold text-purple-300 mb-4 flex items-center">
//                                         <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
//                                         </svg>
//                                         Detailed Analysis
//                                     </h3>
//                                     <div className="text-purple-100/90 leading-relaxed whitespace-pre-line text-sm md:text-base">
//                                         {segment.value}
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Footer Section */}
//                         <div className="p-8 pt-0">
//                             <div className="flex flex-col sm:flex-row items-center justify-between p-4 bg-purple-500/5 rounded-xl border border-purple-500/10">
//                                 <div className="flex items-center space-x-2 mb-3 sm:mb-0">
//                                     <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
//                                     <span className="text-purple-300/80 text-sm">Segment Analysis Complete</span>
//                                 </div>
//                                 <div className="flex items-center space-x-4 text-sm text-purple-300/60">
//                                     <span>📊 Data-driven insights</span>
//                                     <span>🎯 Actionable recommendations</span>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                     {/* Bottom decorative elements */}
//                     <div className="text-center mt-8">
//                         <div className="flex justify-center space-x-2">
//                             {[...Array(5)].map((_, i) => (
//                                 <div
//                                     key={i}
//                                     className="w-2 h-2 bg-purple-400/30 rounded-full animate-pulse"
//                                     style={{ animationDelay: `${i * 0.2}s` }}
//                                 ></div>
//                             ))}
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Detail;



// import React, { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { segmentData } from "../data";
// import Loader from "../components/Loader";

// const Detail = () => {
//     const [loading, setLoading] = useState(true);
//     const [isVisible, setIsVisible] = useState(false);
//     const navigate = useNavigate();
//     const { id } = useParams();

//     const segment = segmentData[parseInt(id)];

//     useEffect(() => {
//         setTimeout(() => {
//             setLoading(false);
//             setTimeout(() => setIsVisible(true), 100);
//         }, 1000);
//     }, []);

//     const handleBack = () => {
//         navigate("/segments");
//     };

//     if (!segment) {
//         return (
//             <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-950 flex items-center justify-center">
//                 <div className="text-center">
//                     <div className="text-6xl mb-4">🔍</div>
//                     <h2 className="text-2xl font-bold text-white mb-2">Segment Not Found</h2>
//                     <p className="text-purple-300/80">The requested segment could not be located.</p>
//                 </div>
//             </div>
//         );
//     }

//     // Loading component
//     if (loading) return (
//         <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-950 flex items-center justify-center">
//             <div className="text-center">
//                 <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-purple-400 mb-4"></div>
//                 <p className="text-purple-300 text-lg">Loading segment details...</p>
//             </div>
//         </div>
//     );

//     return (
//         <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-950 relative overflow-hidden">
//             {/* Animated background elements */}
//             <div className="absolute inset-0 overflow-hidden">
//                 <div className="absolute top-20 left-20 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse"></div>
//                 <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
//                 <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-purple-400/5 rounded-full blur-2xl animate-pulse delay-500"></div>
//             </div>

//             {/* Floating particles */}
//             <div className="absolute inset-0 pointer-events-none">
//                 {[...Array(12)].map((_, i) => (
//                     <div
//                         key={i}
//                         className="absolute w-1 h-1 bg-purple-400/20 rounded-full animate-pulse"
//                         style={{
//                             left: `${Math.random() * 100}%`,
//                             top: `${Math.random() * 100}%`,
//                             animationDelay: `${Math.random() * 3}s`,
//                             animationDuration: `${2 + Math.random() * 3}s`
//                         }}
//                     ></div>
//                 ))}
//             </div>

//             {/* Main Content */}
//             <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
//                 <div className={`w-full max-w-4xl mx-auto transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
//                     }`}>
//                     {/* Back Button */}
//                     <div className="mb-8">
//                         <button
//                             onClick={handleBack}
//                             className="group flex items-center space-x-2 bg-black/40 backdrop-blur-xl border border-purple-500/20 px-6 py-3 rounded-xl text-purple-300 hover:text-white hover:border-purple-400/40 transition-all duration-300 hover:bg-purple-500/10"
//                         >
//                             <svg className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//                             </svg>
//                             <span className="font-medium">Back to Segments</span>
//                         </button>
//                     </div>

//                     {/* Main Card */}
//                     <div className="bg-black/40 backdrop-blur-xl border border-purple-500/20 rounded-3xl shadow-2xl overflow-hidden">
//                         {/* Header Section */}
//                         <div className="relative p-8 pb-6">
//                             {/* Header background gradient */}
//                             <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-purple-500/10"></div>

//                             <div className="relative flex items-start justify-between">
//                                 <div className="flex-1">
//                                     <div className="flex items-center space-x-4 mb-4">
//                                         <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center">
//                                             <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
//                                             </svg>
//                                         </div>
//                                         <div>
//                                             <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
//                                                 {segment.title}
//                                             </h1>
//                                             <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-purple-300 rounded-full"></div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>

//                             {/* Targeting Section */}
//                             <div className="relative mt-6 p-4 bg-purple-500/10 rounded-xl border border-purple-500/20">
//                                 <div className="flex items-start space-x-3">
//                                     <div className="flex-shrink-0 mt-1">
//                                         <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-purple-500 rounded-lg flex items-center justify-center">
//                                             <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
//                                             </svg>
//                                         </div>
//                                     </div>
//                                     <div>
//                                         <h3 className="text-purple-200 font-semibold mb-1">Target Audience</h3>
//                                         <p className="text-purple-100/90 leading-relaxed">{segment.targeting}</p>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Content Section */}
//                         <div className="p-8 pt-0">
//                             <div className="prose prose-invert max-w-none">
//                                 <div className="bg-gray-900/40 rounded-2xl p-6 border border-purple-500/10">
//                                     <h3 className="text-xl font-semibold text-purple-300 mb-4 flex items-center">
//                                         <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
//                                         </svg>
//                                         Company Examples & Analysis
//                                     </h3>
//                                     <div className="text-purple-100/90 leading-relaxed whitespace-pre-line text-sm md:text-base">
//                                         {segment.value}
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Footer Section */}
//                         <div className="p-8 pt-0">
//                             <div className="flex flex-col sm:flex-row items-center justify-between p-4 bg-purple-500/5 rounded-xl border border-purple-500/10">
//                                 <div className="flex items-center space-x-2 mb-3 sm:mb-0">
//                                     <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
//                                     <span className="text-purple-300/80 text-sm">Segment Analysis Complete</span>
//                                 </div>
//                                 <div className="flex items-center space-x-4 text-sm text-purple-300/60">
//                                     <span>🏢 Company targets</span>
//                                     <span>🎯 Strategic insights</span>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                     {/* Bottom decorative elements */}
//                     <div className="text-center mt-8">
//                         <div className="flex justify-center space-x-2">
//                             {[...Array(5)].map((_, i) => (
//                                 <div
//                                     key={i}
//                                     className="w-2 h-2 bg-purple-400/30 rounded-full animate-pulse"
//                                     style={{ animationDelay: `${i * 0.2}s` }}
//                                 ></div>
//                             ))}
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Detail;


import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { segmentData } from "../data";
import Loader from "../components/Loader";

const Detail = () => {
    const [loading, setLoading] = useState(true);
    const [isVisible, setIsVisible] = useState(false);
    const navigate = useNavigate();
    const { id } = useParams();

    const segment = segmentData[parseInt(id)];

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
            setTimeout(() => setIsVisible(true), 100);
        }, 1000);
    }, []);

    const handleBack = () => {
        navigate("/segments");
    };

    if (!segment) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-950 flex items-center justify-center">
                <div className="text-center">
                    <div className="text-6xl mb-4">🔍</div>
                    <h2 className="text-2xl font-bold text-white mb-2">Segment Not Found</h2>
                    <p className="text-purple-300/80">The requested segment could not be located.</p>
                </div>
            </div>
        );
    }

    // Loading component
    if (loading) return (
        <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-950 flex items-center justify-center">
            <div className="text-center">
                <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-purple-400 mb-4"></div>
                <p className="text-purple-300 text-lg">Loading segment details...</p>
            </div>
        </div>
    );

    return (
        <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-950 relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 left-20 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-purple-400/5 rounded-full blur-2xl animate-pulse delay-500"></div>
            </div>

            {/* Floating particles */}
            <div className="absolute inset-0 pointer-events-none">
                {[...Array(12)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-1 h-1 bg-purple-400/20 rounded-full animate-pulse"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 3}s`,
                            animationDuration: `${2 + Math.random() * 3}s`
                        }}
                    ></div>
                ))}
            </div>

            {/* Main Content */}
            <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
                <div className={`w-full max-w-4xl mx-auto transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                    }`}>
                    {/* Back Button */}
                    <div className="mb-8">
                        <button
                            onClick={handleBack}
                            className="group flex items-center space-x-2 bg-black/40 backdrop-blur-xl border cursor-pointer border-purple-500/20 px-6 py-3 rounded-xl text-purple-300 hover:text-white hover:border-purple-400/40 transition-all duration-300 hover:bg-purple-500/10"
                        >
                            <svg className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                            <span className="font-medium">Back to Segments</span>
                        </button>
                    </div>

                    {/* Main Card */}
                    <div className="bg-black/40 backdrop-blur-xl border border-purple-500/20 rounded-3xl shadow-2xl overflow-hidden">
                        {/* Header Section */}
                        <div className="relative p-8 pb-6">
                            {/* Header background gradient */}
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-purple-500/10"></div>

                            <div className="relative flex items-start justify-between">
                                <div className="flex-1">
                                    <div className="flex items-center space-x-4 mb-4">
                                        <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center">
                                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                                                {segment.title}
                                            </h1>
                                            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-purple-300 rounded-full"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Targeting Section */}
                            <div className="relative mt-6 p-4 bg-purple-500/10 rounded-xl border border-purple-500/20">
                                <div className="flex items-start space-x-3">
                                    <div className="flex-shrink-0 mt-1">
                                        <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-purple-500 rounded-lg flex items-center justify-center">
                                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-purple-200 font-semibold mb-1">Target Audience</h3>
                                        <p className="text-purple-100/90 leading-relaxed">{segment.targeting}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Content Section */}
                        <div className="p-8 pt-0">
                            <div className="prose prose-invert max-w-none">
                                <div className="bg-gray-900/40 rounded-2xl p-6 border border-purple-500/10">
                                    <h3 className="text-xl font-semibold text-purple-300 mb-6 flex items-center">
                                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                        </svg>
                                        Target Companies ({segment.value.length})
                                    </h3>

                                    <div className="space-y-4">
                                        {segment.value.map((company, index) => (
                                            <div
                                                key={index}
                                                className="bg-black/30 border border-purple-500/20 rounded-xl p-4 hover:border-purple-400/40 transition-all duration-300 hover:bg-purple-500/5"
                                            >
                                                <div className="flex items-start justify-between mb-3">
                                                    <div className="flex items-center space-x-3">
                                                        <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                                                            <span className="text-white font-bold text-sm">
                                                                {company.name.charAt(0)}
                                                            </span>
                                                        </div>
                                                        <div>
                                                            <h4 className="text-white font-semibold text-lg">
                                                                {company.name}
                                                            </h4>
                                                            <a
                                                                href={`https://${company.website}`}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="text-purple-300 hover:text-purple-200 text-sm flex items-center space-x-1 transition-colors duration-200"
                                                            >
                                                                <span>{company.website}</span>
                                                                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                                </svg>
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center space-x-2 bg-purple-500/20 px-3 py-1 rounded-full">
                                                        <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                                                        <span className="text-purple-300 text-xs font-medium">Target</span>
                                                    </div>
                                                </div>

                                                <div className="pl-13">
                                                    <p className="text-purple-100/80 text-sm leading-relaxed">
                                                        {company.reason}
                                                    </p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Footer Section */}
                        <div className="p-8 pt-0">
                            <div className="flex flex-col sm:flex-row items-center justify-between p-4 bg-purple-500/5 rounded-xl border border-purple-500/10">
                                <div className="flex items-center space-x-2 mb-3 sm:mb-0">
                                    <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                                    <span className="text-purple-300/80 text-sm">Segment Analysis Complete</span>
                                </div>
                                <div className="flex items-center space-x-4 text-sm text-purple-300/60">
                                    <span>🏢 {segment.value.length} companies</span>
                                    <span>🎯 Strategic targeting</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom decorative elements */}
                    <div className="text-center mt-8">
                        <div className="flex justify-center space-x-2">
                            {[...Array(5)].map((_, i) => (
                                <div
                                    key={i}
                                    className="w-2 h-2 bg-purple-400/30 rounded-full animate-pulse"
                                    style={{ animationDelay: `${i * 0.2}s` }}
                                ></div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Detail;