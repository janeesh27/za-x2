import React from 'react';

const Toaster = ({ message, type }) => {
    const getMessageClasses = () => {
        switch (type) {
            case 'success':
                return 'text-[pink]'; 
            case 'error':
                return 'text-[#ff0000]'; 
            default:
                return 'text-black'; 
        }
    };

    return message && type ? (
        <div
            className={`text-sm p-4 mb-4 border rounded-lg absolute top-5 left-5 transition-all duration-1000 ease-in ${
                message ? 'opacity-100' : 'opacity-0'
            } ${getMessageClasses()}`}
        >
            <span>{message}</span>
        </div>
    ) : null;
};

export default Toaster;
