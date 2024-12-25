"use client"
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useCart } from "../context/cart/cartContext";



interface cardProps {
  id: number;
  brand: string;
  name: string;
  size: string;
  price: number;
  image: string;
}

const Card = ({ id, brand, name, size, price, image }: cardProps) => {
  const {
    cart,
    addTocart,
    remove } = useCart();

  const handleAddToCart = (id: number) => {
    setIsVisible(false)
    addTocart(id)
  }
  const handleRemove = (id: number) => {
    setIsVisible(true)
    remove(id)
  }
  const [isVisible, setIsVisible] = useState<boolean>(true);
  useEffect(() => {
    if (cart.includes(id)) {
      setIsVisible(false)
    }    
  })
  return (
    <div className="bg-white border-white border-2 max-w-sm rounded overflow-hidden shadow-lg flex flex-col m-4">
      <div className="aspect-w-3 aspect-h-4">
        <img
          className=" w-full object-cover"
          src={`/images/${image}`}
          alt={name}
          loading="lazy"
        />
      </div>
      <div className="px-6">
        <div className="font-bold text-gray-600 font-serif text-xl mb-2">
          Shot By- {brand}
        </div>
      </div>
      <div className="px-6">
        <div className="font-bold text-gray-600 font-serif text-xl mb-2">
          {name}
        </div>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          {size}
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          &#8377; {price}
        </span>
      </div>
      {isVisible && (
        <div className="flex justify-center mb-2">
          <button className="flex items-center justify-center bg-gray-900 px-2 py-1  text-sm text-white transition hover:bg-gray-700"
            onClick={() => handleAddToCart(id)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mr-2 h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
            </svg>
            Add to cart
          </button>
        </div>
      )}
      {!isVisible && (
        <div className="flex justify-center mb-2">
          <button className="flex items-center justify-center bg-gray-900 px-2 py-1  text-sm text-white transition hover:bg-gray-700"
            onClick={() => handleRemove(id)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mr-2 h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
            </svg>
            Remove from Cart
          </button>
        </div>
      )}
    </div>
  );
};

export default Card;
