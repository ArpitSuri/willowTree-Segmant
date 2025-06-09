import React, { useState } from 'react';
import { Target, Lightbulb, Users, Smartphone, Wrench, Shield, ArrowRight, Sparkles } from 'lucide-react';

const companyName = "Acme Apps"; // Replace this with dynamic value if needed

const angles = [
    {
        title: "Improve Business Performance with Advanced App Solutions",
        targeting: "Companies with existing outdated apps",
        value: `Showcase ${companyName}'s unique blend of technology and creativity that modernizes app interfaces, thereby improving user experience and driving up engagement.`,
        icon: Sparkles,
        gradient: "from-purple-500 to-purple-700",
        accentColor: "purple-400"
    },
    {
        title: "From Idea to Execution: We Turn Your App Vision into Reality",
        targeting: "Companies planning to start their own app project but unsure where to begin",
        value: `Highlight ${companyName}'s expertise in transforming ideas into functional apps. Use case studies or testimonials from satisfied clients for social proof.`,
        icon: Lightbulb,
        gradient: "from-purple-600 to-purple-800",
        accentColor: "purple-500"
    },
    {
        title: "No Technical Skills? No Problem!",
        targeting: "Businesses without in-house technical teams",
        value: `${companyName} handles all technical aspects of app development, allowing businesses to focus on their core operations.`,
        icon: Users,
        gradient: "from-purple-400 to-purple-600",
        accentColor: "purple-300"
    },
    {
        title: "Stay Competitive with a Mobile First Approach",
        targeting: "B2B service companies with no mobile applications",
        value: `Reinforce ${companyName}'s proficiency in mobile app creation that meets the needs of today's mobile-first customers. Highlight any awards or recognitions to strengthen credibility.`,
        icon: Smartphone,
        gradient: "from-purple-700 to-purple-900",
        accentColor: "purple-600"
    },
    {
        title: "Custom-made Apps That Fit Your Business Needs",
        targeting: "Businesses looking for custom app solutions to cater to their specific needs",
        value: `Point to ${companyName}'s ability in delivering personalized, tailored app solutions that align with each business's unique needs and objectives.`,
        icon: Wrench,
        gradient: "from-purple-500 to-purple-700",
        accentColor: "purple-400"
    },
    {
        title: "Secure and Reliable App Development",
        targeting: "Companies concerned about the security of their app data",
        value: `Focus on ${companyName}'s commitment to data protection and security, reinforcing the trustworthiness and safety of their app development services.`,
        icon: Shield,
        gradient: "from-purple-600 to-purple-800",
        accentColor: "purple-500"
    },
];

const SegmantPage = () => {
    const [hoveredCard, setHoveredCard] = useState(null);
    const [selectedCard, setSelectedCard] = useState(null);

    return (
        <div className="min-h-screen bg-gradient-to-br from-black via-purple-950 to-black p-6 relative overflow-hidden">
            {/* Animated background particles */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                {[...Array(30)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-1 h-1 bg-purple-400 rounded-full opacity-30 animate-pulse"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 4}s`,
                            animationDuration: `${1.5 + Math.random() * 2.5}s`
                        }}
                    />
                ))}
            </div>

            {/* Floating geometric elements */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-32 left-20 w-40 h-40 border border-purple-500/10 rounded-full animate-spin-very-slow" />
                <div className="absolute top-20 right-40 w-28 h-28 border border-purple-400/15 rotate-45 animate-pulse-slow" />
                <div className="absolute bottom-40 left-32 w-24 h-24 border border-purple-600/10 rounded-lg animate-float" />
                <div className="absolute bottom-20 right-20 w-36 h-36 border border-purple-300/10 rounded-full animate-spin-reverse" />
            </div>

            <div className="relative max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-20 animate-fade-in">
                    <div className="inline-block mb-6">
                        <div className="bg-gradient-to-r from-purple-600 to-purple-800 text-white px-6 py-2 rounded-full text-sm font-semibold tracking-wide uppercase animate-pulse">
                            Premium Solutions
                        </div>
                    </div>

                    <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-purple-300 via-purple-400 to-purple-500 bg-clip-text text-transparent mb-8 leading-tight">
                        App Development Solutions
                    </h1>

                    <div className="w-40 h-1 bg-gradient-to-r from-purple-400 to-purple-600 mx-auto rounded-full mb-6" />

                    <p className="text-2xl text-purple-300 max-w-4xl mx-auto leading-relaxed">
                        Tailored to Your Business Needs
                    </p>

                    <div className="mt-8 text-purple-400">
                        <p className="text-lg">Transforming Ideas into Digital Excellence</p>
                    </div>
                </div>

                {/* Solutions Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {angles.map((angle, index) => {
                        const IconComponent = angle.icon;
                        const isHovered = hoveredCard === index;
                        const isSelected = selectedCard === index;

                        return (
                            <div
                                key={index}
                                className={`relative bg-black/40 backdrop-blur-lg border border-purple-500/30 rounded-3xl p-8 shadow-2xl transition-all duration-500 cursor-pointer group animate-slide-up ${isHovered ? 'transform hover:scale-105 hover:-translate-y-3' : ''
                                    } ${isSelected ? 'ring-2 ring-purple-400' : ''}`}
                                style={{ animationDelay: `${index * 0.12}s` }}
                                onMouseEnter={() => setHoveredCard(index)}
                                onMouseLeave={() => setHoveredCard(null)}
                                onClick={() => setSelectedCard(selectedCard === index ? null : index)}
                            >
                                {/* Gradient glow effect */}
                                <div className={`absolute inset-0 bg-gradient-to-r ${angle.gradient} rounded-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-xl`} />

                                {/* Animated border */}
                                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${angle.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                                    style={{ padding: '1px' }}>
                                    <div className="w-full h-full bg-black/40 rounded-3xl" />
                                </div>

                                {/* Card content */}
                                <div className="relative z-10">
                                    {/* Icon section */}
                                    <div className="flex items-center justify-between mb-6">
                                        <div className={`w-16 h-16 bg-gradient-to-r ${angle.gradient} rounded-2xl flex items-center justify-center transform transition-all duration-300 ${isHovered ? 'rotate-12 scale-110' : ''
                                            }`}>
                                            <IconComponent className="w-8 h-8 text-white" />
                                        </div>
                                        <div className={`transition-all duration-300 ${isHovered ? 'translate-x-1' : ''}`}>
                                            <ArrowRight className={`w-6 h-6 text-${angle.accentColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                                        </div>
                                    </div>

                                    {/* Title */}
                                    <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors duration-300 leading-tight">
                                        {angle.title}
                                    </h2>

                                    {/* Targeting section */}
                                    <div className="mb-4 p-3 bg-purple-900/30 rounded-xl border border-purple-500/20">
                                        <div className="flex items-center mb-2">
                                            <Target className={`w-4 h-4 text-${angle.accentColor} mr-2`} />
                                            <span className="text-purple-300 text-sm font-semibold tracking-wide uppercase">
                                                Targeting
                                            </span>
                                        </div>
                                        <p className="text-purple-200 text-sm italic">
                                            {angle.targeting}
                                        </p>
                                    </div>

                                    {/* Value proposition */}
                                    <p className="text-purple-100 leading-relaxed group-hover:text-white transition-colors duration-300">
                                        {angle.value}
                                    </p>

                                    {/* Hover indicator */}
                                    <div className={`absolute top-4 right-4 w-3 h-3 bg-${angle.accentColor} rounded-full transition-all duration-300 ${isHovered ? 'scale-150 opacity-100' : 'scale-0 opacity-0'
                                        }`} />

                                    {/* Selection indicator */}
                                    {isSelected && (
                                        <div className="absolute inset-0 rounded-3xl border-2 border-purple-400 animate-pulse" />
                                    )}
                                </div>

                                {/* Corner decorations */}
                                <div className={`absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-${angle.accentColor}/50 rounded-tl-2xl opacity-0 group-hover:opacity-100 transition-all duration-300`} />
                                <div className={`absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-${angle.accentColor}/50 rounded-br-2xl opacity-0 group-hover:opacity-100 transition-all duration-300`} />
                            </div>
                        );
                    })}
                </div>

                {/* Call to Action Section */}
                <div className="text-center animate-fade-in-delayed">
                    <div className="bg-black/50 backdrop-blur-lg border border-purple-500/30 rounded-3xl p-12 max-w-4xl mx-auto shadow-2xl relative overflow-hidden">
                        {/* Background pattern */}
                        <div className="absolute inset-0 opacity-5">
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-purple-800" />
                        </div>

                        <div className="relative z-10">
                            <h3 className="text-4xl font-bold text-white mb-6">
                                Ready to Transform Your Business?
                            </h3>
                            <p className="text-xl text-purple-300 mb-8 max-w-2xl mx-auto">
                                Let's discuss how our tailored app development solutions can drive your business forward
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <button className="bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-500 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 flex items-center justify-center space-x-2">
                                    <span>Start Your Project</span>
                                    <ArrowRight className="w-5 h-5" />
                                </button>

                                <button className="border-2 border-purple-500 text-purple-300 hover:bg-purple-500 hover:text-white font-semibold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105">
                                    View Our Portfolio
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(60px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fade-in-delayed {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes spin-very-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes spin-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }

        @keyframes pulse-slow {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.3; }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        
        .animate-slide-up {
          animation: slide-up 0.7s ease-out;
        }

        .animate-fade-in-delayed {
          animation: fade-in-delayed 1s ease-out 1.5s both;
        }

        .animate-spin-very-slow {
          animation: spin-very-slow 40s linear infinite;
        }

        .animate-spin-reverse {
          animation: spin-reverse 35s linear infinite;
        }

        .animate-float {
          animation: float 4s ease-in-out infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
      `}</style>
        </div>
    );
};

export default SegmantPage;