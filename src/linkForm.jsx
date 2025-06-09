import React, { useState } from 'react';
import { Send, Link, CheckCircle, Copy, ExternalLink } from 'lucide-react';

export default function LinkProcessor() {
    const [inputLink, setInputLink] = useState('');
    const [processedLinks, setProcessedLinks] = useState([]);
    const [isProcessing, setIsProcessing] = useState(false);
    const [copiedId, setCopiedId] = useState(null);

    const handleSubmit = async (e) => {
        if (e) e.preventDefault();
        if (!inputLink.trim()) return;

        setIsProcessing(true);

        // Simulate processing delay
        await new Promise(resolve => setTimeout(resolve, 1500));

        const newLink = {
            id: Date.now(),
            original: inputLink,
            processed: inputLink,
            timestamp: new Date().toLocaleTimeString(),
            status: 'processed'
        };

        setProcessedLinks(prev => [newLink, ...prev]);
        setInputLink('');
        setIsProcessing(false);
    };

    const copyToClipboard = async (text, id) => {
        try {
            await navigator.clipboard.writeText(text);
            setCopiedId(id);
            setTimeout(() => setCopiedId(null), 2000);
        } catch (err) {
            console.error('Failed to copy:', err);
        }
    };

    const openLink = (url) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-black via-purple-950 to-black p-6">
            {/* Animated background particles */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-2 h-2 bg-purple-500 rounded-full opacity-30 animate-pulse"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 3}s`,
                            animationDuration: `${2 + Math.random() * 2}s`
                        }}
                    />
                ))}
            </div>

            <div className="relative max-w-4xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12 animate-fade-in">
                    <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-400 via-purple-300 to-purple-500 bg-clip-text text-transparent mb-4 animate-pulse">
                        Get Your Leads
                    </h1>
                    <p className="text-purple-300 text-lg">Submit your links and watch the magic happen</p>
                </div>

                {/* Input Form */}
                <div className="bg-black/40 backdrop-blur-lg border border-purple-500/30 rounded-2xl p-8 mb-8 shadow-2xl transform hover:scale-[1.02] transition-all duration-300">
                    <div className="space-y-6">
                        <div className="relative">
                            <Link className="absolute left-4 top-1/2 transform -translate-y-1/2 text-purple-400 w-5 h-5" />
                            <input
                                type="url"
                                value={inputLink}
                                onChange={(e) => setInputLink(e.target.value)}
                                placeholder="Enter your link here..."
                                className="w-full pl-12 pr-4 py-4 bg-purple-950/50 border border-purple-500/50 rounded-xl text-white placeholder-purple-300 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300"
                                onKeyPress={(e) => e.key === 'Enter' && handleSubmit(e)}
                            />
                        </div>

                        <button
                            onClick={handleSubmit}
                            disabled={isProcessing || !inputLink.trim()}
                            className="w-full bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-500 hover:to-purple-700 disabled:from-purple-800 disabled:to-purple-900 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 disabled:scale-100 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                        >
                            {isProcessing ? (
                                <>
                                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                    <span>Processing...</span>
                                </>
                            ) : (
                                <>
                                    <Send className="w-5 h-5" />
                                    <span>Process Link</span>
                                </>
                            )}
                        </button>
                    </div>
                </div>

                {/* Processed Links */}
                {processedLinks.length > 0 && (
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-purple-300 mb-6 flex items-center">
                            <CheckCircle className="w-6 h-6 mr-2" />
                            Processed Links
                        </h2>

                        {processedLinks.map((link, index) => (
                            <div
                                key={link.id}
                                className="bg-black/40 backdrop-blur-lg border border-purple-500/30 rounded-xl p-6 shadow-lg transform hover:scale-[1.01] transition-all duration-300 animate-slide-in"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className="flex items-center justify-between mb-4">
                                    <span className="text-purple-400 text-sm font-medium">
                                        Processed at {link.timestamp}
                                    </span>
                                    <div className="flex space-x-2">
                                        <button
                                            onClick={() => copyToClipboard(link.processed, link.id)}
                                            className="p-2 bg-purple-600/20 hover:bg-purple-600/40 rounded-lg transition-colors duration-200 group"
                                            title="Copy link"
                                        >
                                            {copiedId === link.id ? (
                                                <CheckCircle className="w-4 h-4 text-green-400" />
                                            ) : (
                                                <Copy className="w-4 h-4 text-purple-300 group-hover:text-white" />
                                            )}
                                        </button>
                                        <button
                                            onClick={() => openLink(link.processed)}
                                            className="p-2 bg-purple-600/20 hover:bg-purple-600/40 rounded-lg transition-colors duration-200 group"
                                            title="Open link"
                                        >
                                            <ExternalLink className="w-4 h-4 text-purple-300 group-hover:text-white" />
                                        </button>
                                    </div>
                                </div>

                                <div className="bg-purple-950/30 rounded-lg p-4 border border-purple-500/20">
                                    <p className="text-purple-200 break-all font-mono text-sm">
                                        {link.processed}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* Empty State */}
                {processedLinks.length === 0 && (
                    <div className="text-center py-12 animate-fade-in">
                        <div className="w-24 h-24 bg-purple-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Link className="w-12 h-12 text-purple-400" />
                        </div>
                        <p className="text-purple-300 text-lg">No links processed yet</p>
                        <p className="text-purple-400 text-sm mt-2">Submit your first link above to get started</p>
                    </div>
                )}
            </div>

            <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slide-in {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
        
        .animate-slide-in {
          animation: slide-in 0.4s ease-out;
        }
      `}</style>
        </div>
    );
}