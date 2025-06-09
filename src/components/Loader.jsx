import React from 'react';

const Loader = ({ message = "Processing..." }) => (
    <div className="text-center">
        <div className="w-12 h-12 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
        <p className="text-xl font-medium">{message}</p>
    </div>
);

export default Loader;
