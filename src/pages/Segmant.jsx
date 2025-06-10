// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { segmentData } from "../data";

// const Segments = () => {
//     const navigate = useNavigate();

//     const handleClick = (index) => {
//         navigate(`/segment/${index}`);
//     };

//     return (
//         <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             {segmentData.map((seg, index) => (
//                 <div
//                     key={index}
//                     onClick={() => handleClick(index)}
//                     className="cursor-pointer bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
//                 >
//                     <h2 className="text-lg font-bold text-indigo-700 mb-2">{seg.title}</h2>
//                     <p className="text-sm text-gray-500">
//                         🎯 <span className="italic">Target:</span> {seg.targeting}
//                     </p>
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default Segments;


// import React, { useState } from "react";
// import { segmentData } from "../data";
// import { useNavigate } from "react-router-dom";
// import {toast } from "react-toastify";


// const Segments = () => {
//     const [hoveredIndex, setHoveredIndex] = useState(null);
//     const navigate = useNavigate();



//     // Mock data for demonstration
//     // const segmentData = [
//     //     { title: "Young Professionals", targeting: "Age 25-35, Urban areas" },
//     //     { title: "Tech Enthusiasts", targeting: "Interest in technology, gadgets" },
//     //     { title: "Fitness Lovers", targeting: "Active lifestyle, health conscious" },
//     //     { title: "Creative Minds", targeting: "Artists, designers, writers" },
//     //     { title: "Business Leaders", targeting: "Executives, entrepreneurs" },
//     //     { title: "Students", targeting: "Age 18-24, education focused" },
//     //     { title: "Parents", targeting: "Family oriented, age 30-45" },
//     //     { title: "Seniors", targeting: "Age 55+, retirement planning" },
//     //     { title: "Gamers", targeting: "Gaming enthusiasts, esports" }
//     // ];

//     const handleClick = (index) => {
//         // Simulate navigation - in real app, use navigate(`/segment/${index}`);
//      navigate(`/segment/${index}`);
//         toast.success(`Navigating to segment ${index}: ${segmentData[index].title}`);
//     };

//     return (
//         <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-950 relative overflow-hidden">
//             {/* Animated background elements */}
//             <div className="absolute inset-0 overflow-hidden">
//                 <div className="absolute top-10 left-10 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl animate-pulse"></div>
//                 <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
//                 <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-400/5 rounded-full blur-2xl animate-pulse delay-500"></div>
//             </div>

//             {/* Floating particles */}
//             <div className="absolute inset-0 pointer-events-none">
//                 {[...Array(15)].map((_, i) => (
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

//             {/* Header */}
//             <div className="relative z-10 pt-8 pb-12">
//                 <button
//                     onClick={() => navigate("/")}
//                     className="group flex items-center space-x-2 bg-black/40 backdrop-blur-xl border border-purple-500/20 px-6 py-3 rounded-xl text-purple-300 hover:text-white hover:border-purple-400/40 transition-all duration-300 hover:bg-purple-500/10 cursor-pointer"
//                 >
//                     <svg className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//                     </svg>
//                     <span className="font-medium">Back to form</span>
//                 </button>
//                 <div className="max-w-6xl mx-auto px-6">
//                     <div className="text-center mb-12">
//                         <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 via-purple-300 to-white bg-clip-text text-transparent mb-4 animate-pulse">
//                             Audience Segments
//                         </h1>
//                         <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-purple-300 mx-auto rounded-full mb-4"></div>
//                         <p className="text-purple-200/80 text-lg">
//                             Discover your target audience segments
//                         </p>
//                     </div>
//                 </div>
//             </div>

//             {/* Segments Grid */}
//             <div className="relative z-10 max-w-6xl mx-auto p-6">
//                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//                     {segmentData.map((seg, index) => (
//                         <div
//                             key={index}
//                             onClick={() => handleClick(index)}
//                             onMouseEnter={() => setHoveredIndex(index)}
//                             onMouseLeave={() => setHoveredIndex(null)}
//                             className={`group cursor-pointer relative overflow-hidden transform transition-all duration-500 hover:scale-105 ${hoveredIndex === index ? 'z-20' : 'z-10'
//                                 }`}
//                         >
//                             {/* Card glow effect */}
//                             <div className={`absolute inset-0 bg-gradient-to-r from-purple-500/20 to-purple-600/20 rounded-2xl blur-xl transition-opacity duration-300 ${hoveredIndex === index ? 'opacity-100' : 'opacity-0'
//                                 }`}></div>

//                             {/* Main card */}
//                             <div className="relative bg-black/40 backdrop-blur-xl border border-purple-500/20 p-6 rounded-2xl shadow-2xl transition-all duration-300 hover:border-purple-400/40 hover:shadow-purple-500/20">
//                                 {/* Card header with icon */}
//                                 <div className="flex items-start justify-between mb-4">
//                                     <div className="flex-1">
//                                         <h2 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300">
//                                             {seg.title}
//                                         </h2>
//                                     </div>
//                                     <div className="flex-shrink-0 ml-4">
//                                         <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
//                                             <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
//                                             </svg>
//                                         </div>
//                                     </div>
//                                 </div>

//                                 {/* Targeting info */}
//                                 <div className="space-y-3">
//                                     <div className="flex items-start">
//                                         <div className="flex-shrink-0 mr-3 mt-1">
//                                             <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
//                                         </div>
//                                         <div>
//                                             <p className="text-sm text-purple-200/60 font-medium mb-1">
//                                                 Target Audience
//                                             </p>
//                                             <p className="text-purple-100/90 text-sm leading-relaxed">
//                                                 {seg.targeting}
//                                             </p>
//                                         </div>
//                                     </div>
//                                 </div>

//                                 {/* Card footer */}
//                                 <div className="mt-6 pt-4 border-t border-purple-500/20">
//                                     <div className="flex items-center justify-between">
//                                         <span className="text-xs text-purple-300/60 font-medium">
//                                             Segment #{index + 1}
//                                         </span>
//                                         <div className="flex items-center text-purple-300 group-hover:text-white transition-colors duration-300">
//                                             <span className="text-xs font-medium mr-2">View Details</span>
//                                             <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
//                                             </svg>
//                                         </div>
//                                     </div>
//                                 </div>

//                                 {/* Hover overlay */}
//                                 <div className={`absolute inset-0 bg-gradient-to-br from-purple-600/10 to-purple-700/10 rounded-2xl transition-opacity duration-300 ${hoveredIndex === index ? 'opacity-100' : 'opacity-0'
//                                     }`}></div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>

//             {/* Bottom decorative section */}
//             <div className="relative z-10 mt-16 pb-8">
//                 <div className="max-w-6xl mx-auto px-6 text-center">
//                     <div className="flex justify-center space-x-2 mb-4">
//                         {[...Array(5)].map((_, i) => (
//                             <div
//                                 key={i}
//                                 className="w-2 h-2 bg-purple-400/30 rounded-full animate-pulse"
//                                 style={{ animationDelay: `${i * 0.2}s` }}
//                             ></div>
//                         ))}
//                     </div>
//                     <p className="text-purple-300/60 text-sm">
//                         Click on any segment to explore detailed insights
//                     </p>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Segments;



import React, { useState } from "react";
import { segmentData } from "../data";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Segments = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [selectedSegment, setSelectedSegment] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [formData, setFormData] = useState({
        country: '',
        employeeSize: '',
        results: ''
    });
    const navigate = useNavigate();

    const countries = [
        { value: 'us', label: 'United States', unlocked: true },
        { value: 'uk', label: 'United Kingdom', unlocked: false },
        { value: 'ca', label: 'Canada', unlocked: false },
        { value: 'au', label: 'Australia', unlocked: false },
        { value: 'de', label: 'Germany', unlocked: false },
        { value: 'fr', label: 'France', unlocked: false }
    ];

    const employeeSizes = [
        { value: '1-50', label: '1-50 employees', unlocked: true },
        { value: '51-200', label: '51-200 employees', unlocked: false },
        { value: '201-1000', label: '201-1000 employees', unlocked: false },
        { value: '1001-5000', label: '1001-5000 employees', unlocked: false },
        { value: '5000+', label: '5000+ employees', unlocked: false }
    ];

    const resultOptions = [
        { value: '5', label: '5 results', unlocked: true },
        { value: '50', label: '50 results', unlocked: false },
        { value: '100', label: '100 results', unlocked: false },
        { value: '250', label: '250 results', unlocked: false },
        { value: '500', label: '500 results', unlocked: false }
    ];

    const handleClick = (index) => {
        setSelectedSegment(index);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedSegment(null);
        setFormData({
            country: '',
            employeeSize: '',
            results: ''
        });
    };

    const handleInputChange = (field, value, unlocked) => {
        if (unlocked) {
            setFormData(prev => ({
                ...prev,
                [field]: value
            }));
        }
    };

    const handleScrape = () => {
        if (!formData.country || !formData.employeeSize || !formData.results) {
            toast.error("Please fill in all fields");
            return;
        }

        setShowModal(false);
        navigate(`/segment/${selectedSegment}`);
        toast.success(`Scraping data for ${segmentData[selectedSegment].title}`);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-950 relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-10 left-10 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-400/5 rounded-full blur-2xl animate-pulse delay-500"></div>
            </div>

            {/* Floating particles */}
            <div className="absolute inset-0 pointer-events-none">
                {[...Array(15)].map((_, i) => (
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

            {/* Header */}
            <div className="relative z-10 pt-8 pb-12">
                <button
                    onClick={() => navigate("/")}
                    className="group flex items-center space-x-2 bg-black/40 backdrop-blur-xl border border-purple-500/20 px-6 py-3 rounded-xl text-purple-300 hover:text-white hover:border-purple-400/40 transition-all duration-300 hover:bg-purple-500/10 cursor-pointer"
                >
                    <svg className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    <span className="font-medium">Back to form</span>
                </button>
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 via-purple-300 to-white bg-clip-text text-transparent mb-4 animate-pulse">
                            Audience Segments
                        </h1>
                        <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-purple-300 mx-auto rounded-full mb-4"></div>
                        <p className="text-purple-200/80 text-lg">
                            Discover your target audience segments
                        </p>
                    </div>
                </div>
            </div>

            {/* Segments Grid */}
            <div className="relative z-10 max-w-6xl mx-auto p-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {segmentData.map((seg, index) => (
                        <div
                            key={index}
                            onClick={() => handleClick(index)}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            className={`group cursor-pointer relative overflow-hidden transform transition-all duration-500 hover:scale-105 ${hoveredIndex === index ? 'z-20' : 'z-10'
                                }`}
                        >
                            {/* Card glow effect */}
                            <div className={`absolute inset-0 bg-gradient-to-r from-purple-500/20 to-purple-600/20 rounded-2xl blur-xl transition-opacity duration-300 ${hoveredIndex === index ? 'opacity-100' : 'opacity-0'
                                }`}></div>

                            {/* Main card */}
                            <div className="relative bg-black/40 backdrop-blur-xl border border-purple-500/20 p-6 rounded-2xl shadow-2xl transition-all duration-300 hover:border-purple-400/40 hover:shadow-purple-500/20">
                                {/* Card header with icon */}
                                <div className="flex items-start justify-between mb-4">
                                    <div className="flex-1">
                                        <h2 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300">
                                            {seg.title}
                                        </h2>
                                    </div>
                                    <div className="flex-shrink-0 ml-4">
                                        <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
                                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>

                                {/* Targeting info sections */}
                                <div className="space-y-3 mt-2">
                                    <div className="flex items-start">
                                        <div className="flex-shrink-0 mr-3 mt-1">
                                            <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                                        </div>
                                        <div>
                                            <p className="text-sm text-purple-200/60 font-medium mb-1">
                                                Value Proposition
                                            </p>
                                            <p className="text-purple-100/90 text-sm leading-relaxed">
                                                {seg.valueProposition}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-3 mt-2">
                                    <div className="flex items-start">
                                        <div className="flex-shrink-0 mr-3 mt-1">
                                            <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                                        </div>
                                        <div>
                                            <p className="text-sm text-purple-200/60 font-medium mb-1">
                                                Targeting
                                            </p>
                                            <p className="text-purple-100/90 text-sm leading-relaxed">
                                                {seg.targetingCriteria}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-3 mt-2">
                                    <div className="flex items-start">
                                        <div className="flex-shrink-0 mr-3 mt-1">
                                            <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                                        </div>
                                        <div>
                                            <p className="text-sm text-purple-200/60 font-medium mb-1">
                                                Codebase Signals
                                            </p>
                                            <p className="text-purple-100/90 text-sm leading-relaxed">
                                                {seg.signals}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-3 mt-2">
                                    <div className="flex items-start">
                                        <div className="flex-shrink-0 mr-3 mt-1">
                                            <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                                        </div>
                                        <div>
                                            <p className="text-sm text-purple-200/60 font-medium mb-1">
                                                Hook
                                            </p>
                                            <p className="text-purple-100/90 text-sm leading-relaxed">
                                                {seg.hook}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Card footer */}
                                <div className="mt-6 pt-4 border-t border-purple-500/20">
                                    <div className="flex items-center justify-between">
                                        <span className="text-xs text-purple-300/60 font-medium">
                                            Segment #{index + 1}
                                        </span>
                                        <div className="flex items-center text-purple-300 group-hover:text-white transition-colors duration-300">
                                            <span className="text-xs font-medium mr-2">Start Scraping</span>
                                            <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>

                                {/* Hover overlay */}
                                <div className={`absolute inset-0 bg-gradient-to-br from-purple-600/10 to-purple-700/10 rounded-2xl transition-opacity duration-300 ${hoveredIndex === index ? 'opacity-100' : 'opacity-0'
                                    }`}></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal */}
            {showModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center">
                    {/* Backdrop */}
                    <div
                        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                        onClick={handleCloseModal}
                    ></div>

                    {/* Modal Content */}
                    <div className="relative bg-black/90 backdrop-blur-xl border border-purple-500/30 rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl">
                        {/* Close button */}
                        <button
                            onClick={handleCloseModal}
                            className="absolute top-4 right-4 text-purple-300 hover:text-white transition-colors duration-200"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        {/* Modal Header */}
                        <div className="text-center mb-8">
                            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3V1a1 1 0 012 0v2M21 8H3M21 16H3M21 12h-6m6 0a6 6 0 11-12 0 6 6 0 0112 0z" />
                                </svg>
                            </div>
                            <h2 className="text-2xl font-bold text-white mb-2">
                                Configure Scraping
                            </h2>
                            <p className="text-purple-200/70 text-sm">
                                {selectedSegment !== null && segmentData[selectedSegment].title}
                            </p>
                        </div>

                        {/* Form */}
                        <div className="space-y-6">
                            {/* Country Dropdown */}
                            <div>
                                <label className="block text-sm font-medium text-purple-200 mb-2">
                                    Target Country
                                </label>
                                <div className="relative">
                                    <select
                                        value={formData.country}
                                        onChange={(e) => handleInputChange('country', e.target.value, true)}
                                        className="w-full bg-purple-900/20 border border-purple-500/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-400 transition-colors"
                                    >
                                        <option value="">Select a country</option>
                                        {countries.map((country) => (
                                            <option
                                                key={country.value}
                                                value={country.value}
                                                disabled={!country.unlocked}
                                                className={country.unlocked ? 'text-white' : 'text-gray-500'}
                                            >
                                                {country.label} {!country.unlocked && '🔒'}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            {/* Employee Size Dropdown */}
                            <div>
                                <label className="block text-sm font-medium text-purple-200 mb-2">
                                    Company Size
                                </label>
                                <div className="relative">
                                    <select
                                        value={formData.employeeSize}
                                        onChange={(e) => handleInputChange('employeeSize', e.target.value, true)}
                                        className="w-full bg-purple-900/20 border border-purple-500/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-400 transition-colors"
                                    >
                                        <option value="">Select company size</option>
                                        {employeeSizes.map((size) => (
                                            <option
                                                key={size.value}
                                                value={size.value}
                                                disabled={!size.unlocked}
                                                className={size.unlocked ? 'text-white' : 'text-gray-500'}
                                            >
                                                {size.label} {!size.unlocked && '🔒'}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            {/* Results Dropdown */}
                            <div>
                                <label className="block text-sm font-medium text-purple-200 mb-2">
                                    Number of Results
                                </label>
                                <div className="relative">
                                    <select
                                        value={formData.results}
                                        onChange={(e) => handleInputChange('results', e.target.value, true)}
                                        className="w-full bg-purple-900/20 border border-purple-500/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-400 transition-colors"
                                    >
                                        <option value="">Select number of results</option>
                                        {resultOptions.map((result) => (
                                            <option
                                                key={result.value}
                                                value={result.value}
                                                disabled={!result.unlocked}
                                                className={result.unlocked ? 'text-white' : 'text-gray-500'}
                                            >
                                                {result.label} {!result.unlocked && '🔒'}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            {/* Premium Notice */}
                            <div className="bg-purple-900/30 border border-purple-500/30 rounded-xl p-4">
                                <div className="flex items-start space-x-3">
                                    <div className="flex-shrink-0">
                                        <svg className="w-5 h-5 text-yellow-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.732 15.5c-.77.833.192 2.5 1.732 2.5z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-sm text-purple-200/90">
                                            <span className="font-medium">Premium features locked.</span><br />
                                            Upgrade to access more countries, company sizes, and result limits.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex space-x-4 mt-8">
                            <button
                                onClick={handleCloseModal}
                                className="flex-1 bg-gray-700/50 hover:bg-gray-600/50 text-white font-medium py-3 px-4 rounded-xl transition-colors duration-200"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleScrape}
                                className="flex-1 bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white font-medium py-3 px-4 rounded-xl transition-all duration-200 transform hover:scale-105"
                            >
                                Start Scraping
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Bottom decorative section */}
            <div className="relative z-10 mt-16 pb-8">
                <div className="max-w-6xl mx-auto px-6 text-center">
                    <div className="flex justify-center space-x-2 mb-4">
                        {[...Array(5)].map((_, i) => (
                            <div
                                key={i}
                                className="w-2 h-2 bg-purple-400/30 rounded-full animate-pulse"
                                style={{ animationDelay: `${i * 0.2}s` }}
                            ></div>
                        ))}
                    </div>
                    <p className="text-purple-300/60 text-sm">
                        Click on any segment to configure and start scraping
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Segments;