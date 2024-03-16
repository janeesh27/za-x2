import React from 'react';

const Header = () => {
    return (
        <div className="p-5 bg-transparent text-center fixed top-0 z-[100000] w-screen">
            <ul className="text-[18px] mx-auto flex justify-center items-center gap-10 mt-3">
                <li>Our Story</li>
                <li>Itinerary </li>
                <li>Gallery</li>
            </ul>
        </div>
    );
};

export default Header;
