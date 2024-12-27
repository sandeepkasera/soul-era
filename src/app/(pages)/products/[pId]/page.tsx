"use client"
import { useState, useEffect } from 'react';
import productlist from "@/app/assets/data/productlist.json";
import { useParams } from "next/navigation"; // Use 'next/navigation' to get route params in app directory
import { useCart } from "../../../context/cart/cartContext";


type ProductProps = {
  name: string;
  price: number;
  colors: string[];
  images: string[];
  description: string;
};

const ProductCard = () => {
  const params = useParams(); // Get the dynamic parameters from the URL

  // Retrieve the dynamic 'id' parameter from the URL
  const pId = Array.isArray(params.pId) ? parseInt(params.pId[0], 10) : parseInt(params.pId, 10);
  // Find the product by ID
  const product = productlist.find(item => item.id === pId);
  if (!product) {
    return <p>Product not found</p>;
  }

  console.log(product, 'dfd')
  // Fallback to the first image or an empty string if images is empty or undefined
  const [selectedImage, setSelectedImage] = useState(product.images[0] || '/images/image1.jpg');
  const [selectedColor, setSelectedColor] = useState(product.colors[0]|| '');

//   useEffect(() => {
//     // Ensures that the selected image is updated when images prop changes
//     if (images && product.images.length > 0) {
//       setSelectedImage(images[0]);
//     }
//   }, [images]);

const {
    cart,
    addTocart,
    remove } = useCart();

  const handleImageClick = (image: string) => {
    setSelectedImage(image);
  };

  const handleColorClick = (color: string) => {
    setSelectedColor(color);
  };
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const handleAddToCart = (id: number) => {
    setIsVisible(false)
    addTocart(id)
  }
  const handleRemove = (id: number) => {
    setIsVisible(true)
    remove(id)
  }
  
    useEffect(() => {
      if (cart.includes(pId)) {
        setIsVisible(false)
      }    
    })
  
  return (
    <div className="flex flex-col rounded-lg border border-neutral-200 bg-white p-8 md:p-12 lg:flex-row lg:gap-8 dark:border-neutral-800 dark:bg-black">
      <div className="h-full w-full basis-full lg:basis-4/6">
        <form>
          <div className="relative aspect-square h-full max-h-[550px] w-full overflow-hidden">
            <img
              alt={product.name}
              decoding="async"
              className="h-full w-full object-contain"
              src={`/images/${selectedImage}` || '/path/to/placeholder-image.png'} // Use a placeholder image if no image is selected
            />
            <div className="absolute bottom-[15%] flex w-full justify-center">
              <div className="mx-auto flex h-11 items-center rounded-full border border-white bg-neutral-50/80 text-neutral-500 backdrop-blur dark:border-black dark:bg-neutral-900/80">
                <button
                  aria-label="Previous product image"
                  onClick={() => {
                    const currentIndex = product.images.indexOf(selectedImage);
                    const previousIndex = (currentIndex - 1 + product.images.length) % product.images.length;
                    setSelectedImage(product.images[previousIndex]);
                  }}
                  className="h-full px-6 transition-all ease-in-out hover:scale-110 hover:text-black dark:hover:text-white flex items-center justify-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"></path>
                  </svg>
                </button>
                <div className="mx-1 h-6 w-px bg-neutral-500"></div>
                <button
                  aria-label="Next product image"
                  onClick={() => {
                    const currentIndex = product.images.indexOf(selectedImage);
                    const nextIndex = (currentIndex + 1) % product.images.length;
                    setSelectedImage(product.images[nextIndex]);
                  }}
                  className="h-full px-6 transition-all ease-in-out hover:scale-110 hover:text-black dark:hover:text-white flex items-center justify-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>

      <div className="basis-full lg:basis-2/6">
        <div className="mb-6 flex flex-col border-b pb-6 dark:border-neutral-700">
          <h1 className="mb-2 text-5xl font-medium">{product.name}</h1>
          <div className="mr-auto w-auto rounded-full bg-blue-600 p-2 text-sm text-white">
            <p>&#8377;{product.price.toFixed(2)}</p>
          </div>
        </div>

        <form>
          <dl className="mb-8">
            <dt className="mb-4 text-sm uppercase tracking-wide">Color</dt>
            <dd className="flex flex-wrap gap-3">
              {product.colors.map((color) => (
                <button
                  key={color}
                  onClick={() => handleColorClick(color)}
                  className={`flex min-w-[48px] items-center justify-center rounded-full border px-2 py-1 text-sm dark:border-neutral-800 dark:bg-neutral-900 ring-1 ring-transparent transition duration-300 ease-in-out hover:ring-blue-600 ${color === selectedColor ? 'border-blue-600' : ''}`}
                >
                  {color}
                </button>
              ))}
            </dd>
          </dl>
        </form>

        <div className="prose mb-6 text-sm leading-tight dark:text-white/[60%]">{product.description}</div>

        <form>
        {isVisible && (
          <button
            className="relative flex w-full items-center justify-center rounded-full bg-blue-600 p-4 tracking-wide text-white hover:opacity-60"
            onClick={() => handleAddToCart(pId)}
          >
            Add To Cart
          </button>
          )}
          {!isVisible && (
          <button
            className="relative flex w-full items-center justify-center rounded-full bg-blue-600 p-4 tracking-wide text-white hover:opacity-60"
            onClick={() => handleRemove(pId)}
          >
            Remove from Cart
          </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default ProductCard;
