import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons"; // Import cart icon

const DSNavbar = () => {
    const [isBookmarked, setIsBookmarked] = useState(false);

    const toggleBookmark = () => {
        setIsBookmarked(!isBookmarked);
    };

    return (
        <div className="bg-gray-100 shadow-md">
            <div className="container mx-auto max-w-4xl flex items-center justify-between p-4">
                {/* Search Bar */}
                <div className="flex items-center bg-white rounded-full shadow-sm px-4 py-2 w-full max-w-md">
                    <input
                        type="text"
                        placeholder="Search Best Digital Services And More"
                        className="flex-grow outline-none text-gray-600 text-sm placeholder-gray-400"
                    />
                    <button className="text-yellow-500">
                        <i className="fas fa-search"></i>
                    </button>
                </div>

                {/* Icons Container */}
                <div className="flex items-center gap-4 space-x-4 ml-2 lg:space-x-2">
                    {/* Bookmark Icon */}
                    <button onClick={toggleBookmark} className="text-yellow-500 text-xl">
                        {isBookmarked ? (
                            <i className="fas fa-bookmark"></i>
                        ) : (
                            <i className="far fa-bookmark"></i>
                        )}
                    </button>

                    {/* Cart Icon */}
                    <Link to="/dscart"> {/* Link to DSCart route */}
                        <button className="text-blue-500 text-xl"> {/* Blue color for cart */}
                            <FontAwesomeIcon icon={faShoppingCart} /> {/* Use FontAwesome cart icon */}
                        </button>
                    </Link>

                    {/* Removed Flame Icon */}
                </div>
            </div>
        </div>
    );
};

export default DSNavbar;