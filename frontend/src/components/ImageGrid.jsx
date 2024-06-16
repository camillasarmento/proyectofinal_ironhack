// eslint-disable-next-line no-unused-vars
import React from 'react';

import image1 from '../assets/image1.png';
import image2 from '../assets/image2.png';
import image3 from '../assets/image3.jpg';
import image4 from '../assets/image4.jpg';
import image5 from '../assets/image5.jpg';
import image6 from '../assets/image6.jpg'; // Add more image imports as needed
import image7 from '../assets/image7.jpeg';
import image8 from '../assets/image8.jpeg';
import image9 from '../assets/image9.png';

export function ImageGrid() {
    const items = [
        {
            id: 1,
            src: image1,
        },
        {
            id: 2,
            src: image2,
        },
        {
            id: 3,
            src: image3,
        },
        {
            id: 4,
            src: image4,
        },
        {
            id: 5,
            src: image5,
        },
        {
            id: 6,
            src: image6,
        },
        {
            id: 7,
            src: image7,
        },
        {
            id: 8,
            src: image8,
        },
        {
            id: 9,
            src: image9,
        },
    ];

    return (
        <>
            <div
                name=""
                className="bg-gradient-to-b from-black to-gray-800 w-full text-white min-h-screen text-center md:text-left"
            >
                <div className="max-w-screen-lg p-6 mx-auto flex flex-col justify-center w-full h-full">
                    <div className="pb-8">
                        {/* Add Title or Subtitle */}
                    </div>

                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 sm:px-3">
                        {items.map(({ id, src }) => (
                            <div
                                key={id}
                                className="shadow-md shadow-gray-600 rounded-lg overflow-hidden bg-black"
                            >
                                <div className="w-full h-64">
                                    <img
                                        src={src}
                                        alt=""
                                        className="w-full h-full object-cover rounded-md duration-200 hover:scale-105"
                                    />
                                </div>
                                <div className="flex items-center justify-center">
                                    {/* Add buttons or additional content if needed */}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default ImageGrid;
