"use client";

import React, { useState } from "react";
import { FiEye } from "react-icons/fi";

const SelectCollection = () => {
  const [activeCategory, setActiveCategory] = useState("Plain T-Shirts");
  const [dropdownOpen, setDropdownOpen] = useState(false); // For mobile dropdown visibility

  const categories = [
    {
      name: "Plain T-Shirts",
      products: [
        { id: 1, name: "Plain White Tee", img: "/images/image1.jpg" },
        { id: 2, name: "Plain Black Tee", img: "/images/image1.jpg" },
        { id: 3, name: "Plain Black Tee", img: "/images/image1.jpg" },
        { id: 4, name: "Plain Black Tee", img: "/images/image1.jpg" },
      ],
    },
    {
      name: "Printed T-Shirts",
      products: [
        { id: 1, name: "Graphic Tee 1", img: "/images/new-launch.jpg" },
        { id: 2, name: "Graphic Tee 2", img: "/images/new-launch.jpg" },
        { id: 3, name: "Graphic Tee 2", img: "/images/new-launch.jpg" },
        { id: 4, name: "Graphic Tee 2", img: "/images/new-launch.jpg" },
      ],
    },
    {
      name: "Oversized T-Shirts",
      products: [
        { id: 1, name: "Oversized Tee 1", img: "/images/new-launch2.jpg" },
        { id: 2, name: "Oversized Tee 2", img: "/images/new-launch2.jpg" },
        { id: 3, name: "Oversized Tee 2", img: "/images/new-launch2.jpg" },
        { id: 4, name: "Oversized Tee 2", img: "/images/new-launch2.jpg" },
      ],
    },
    {
      name: "Kids T-Shirts",
      products: [
        { id: 1, name: "Kids Tee 1", img: "/images/new-launch3.jpg" },
        { id: 2, name: "Kids Tee 2", img: "/images/new-launch3.jpg" },
        { id: 3, name: "Kids Tee 2", img: "/images/new-launch3.jpg" },
        { id: 4, name: "Kids Tee 2", img: "/images/new-launch3.jpg" },
      ],
    },
  ];

  const currentCategory = categories.find(
    (category) => category.name === activeCategory
  );

  return (
    <div className="w-full py-10 px-5">
      <h2 className="text-3xl font-bold text-center mb-6">Select Collection</h2>
      
      {/* Dropdown for mobile */}
      <div className="sm:hidden mb-8">
        <button
          className="py-2 px-4 rounded-lg bg-gray-200 w-full text-left"
          onClick={() => setDropdownOpen(!dropdownOpen)}
        >
          {activeCategory}
        </button>
        {dropdownOpen && (
          <div className="mt-2 bg-white shadow-lg rounded-lg w-full">
            {categories.map((category) => (
              <button
                key={category.name}
                className={`py-2 px-4 w-full text-left ${
                  activeCategory === category.name
                    ? "underline decoration-2 text-black"
                    : "hover:text-gray-800 text-gray-600"
                }`}
                onClick={() => {
                  setActiveCategory(category.name);
                  setDropdownOpen(false); // Close the dropdown on selection
                }}
              >
                {category.name}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Categories for Desktop */}
      <div className="hidden sm:flex justify-center gap-4 mb-8">
        {categories.map((category) => (
          <button
            key={category.name}
            className={`py-2 px-4 rounded-lg ${
              activeCategory === category.name
                ? "underline decoration-2 text-black"
                : "hover:text-gray-800 text-gray-600"
            }`}
            onClick={() => setActiveCategory(category.name)}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Product Display */}
      <div className="relative">
        <div className="flex overflow-hidden space-x-4 justify-center items-center">
          {currentCategory?.products?.slice(0, 6).map((product) => (
            <div
              key={product.id}
              className="w-40 h-40 relative bg-gray-200 rounded-lg hover:bg-gray-300 transition group"
            >
              <img
                src={product.img}
                alt={product.name}
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex justify-center items-center opacity-0 group-hover:opacity-100 transition">
                <FiEye className="text-white text-3xl" />
              </div>
            </div>
          ))}
        </div>

        {/* {currentCategory?.products?.length > 6 && (
          <button className="mt-4 block mx-auto px-6 py-2 bg-black text-white rounded-lg">
            View All
          </button>
        )} */}
      </div>
    </div>
  );
};

export default SelectCollection;
