"use client";
import React, { useState } from "react";

const shirts = [
    { id: 1, image: "/images/new-launch.webp", originalPrice: 2000, discountedPrice: 1500 },
    { id: 2, image: "/images/new-launch2.webp", originalPrice: 2500, discountedPrice: 2000 },
    { id: 3, image: "/images/new-launch3.webp", originalPrice: 1800, discountedPrice: 1400 },
    { id: 4, image: "/images/new-launch.webp", originalPrice: 2000, discountedPrice: 1700 },
    { id: 5, image: "/images/new-launch2.webp", originalPrice: 3000, discountedPrice: 2500 },
    { id: 6, image: "/images/new-launch3.webp", originalPrice: 1500, discountedPrice: 1200 },
    { id: 7, image: "/images/new-launch.webp", originalPrice: 2800, discountedPrice: 2300 },
    { id: 8, image: "/images/new-launch3.webp", originalPrice: 3200, discountedPrice: 2700 },
    { id: 9, image: "/images/new-launch2.webp", originalPrice: 2000, discountedPrice: 1500 },
    { id: 10, image: "/images/new-launch.webp", originalPrice: 2500, discountedPrice: 2000 },
];

export default function NewLaunch() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const itemsPerPage = 6;

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? shirts.length - itemsPerPage : prevIndex - itemsPerPage));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex + itemsPerPage >= shirts.length ? 0 : prevIndex + itemsPerPage
        );
    };

    const visibleShirts = shirts.slice(currentIndex, currentIndex + itemsPerPage);

    return (
        <section className="w-full py-8 px-4">
            <h2 className="text-3xl font-bold text-center mb-6">New Launch</h2>
            <div className="relative flex items-center justify-center">
                {/* Shirt Items */}
                <div className="w-full max-w-7xl overflow-x-auto flex-nowrap flex gap-4">
                    {visibleShirts.map((shirt) => (
                        <div
                            key={shirt.id}
                            className="flex flex-col items-center border rounded-md p-4 shadow-md bg-white min-w-[200px] flex-shrink-0"
                        >
                            <img
                                src={shirt.image}
                                alt={`Shirt ${shirt.id}`}
                                className="w-40 h-40 object-cover mb-3"
                            />
                            <div className="text-lg font-semibold text-gray-700">
                                ₹{shirt.discountedPrice}
                                <span className="text-sm text-gray-500 line-through ml-2">
                                    ₹{shirt.originalPrice}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Navigation Buttons Below Products */}
            <div className="flex justify-center gap-4 mt-6">
                <button
                    onClick={handlePrev}
                    className="px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded-full"
                >
                    &#8592; {/* Left Arrow */}
                </button>
                <button
                    onClick={handleNext}
                    className="px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded-full"
                >
                    &#8594; {/* Right Arrow */}
                </button>
            </div>
        </section>
    );
}
