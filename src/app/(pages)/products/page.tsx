import Link from "next/link";
import Image from "next/image";
import productlist from "@/app/assets/data/productlist.json";

import Carousel from '@/app/components/carousel';
import HeroSection from "@/app/components/heroSection";


const products = () => {
  const slides = [
    "/images/image1.jpg",
    "/images/image2.jpg",
    "/images/image3.jpg"
  ];
  const categories = [
    { name: "T-shirts", imgSrc: "/images/tshirts.jpg" },
    { name: "Oversized T-shirts", imgSrc: "/images/oversized_tees.webp" },
    { name: "Hoodies", imgSrc: "/images/hoodies.webp" },
    { name: "Sweatshirts", imgSrc: "/images/sweatshirt.webp" },
    { name: "Full Sleeve", imgSrc: "/images/full_sleeve_tee.webp" },
    { name: "Polo T-Shirt", imgSrc: "/images/polo_t-shirt.webp" },
    { name: "Crop Top", imgSrc: "/images/crop_top.webp" },
    { name: "Kids", imgSrc: "/images/kids_t-shirt.webp" },
  ];

  return (
    <>
      <div className="Hero">
        <HeroSection
          desktopImg="/images/oversized.jpg"
          mobileImg="/images/oversized.jpg"
          link="/products"
          altText="Oversized T-Shirt"
        />
      </div>
      <div className="wrapper">
        <div className="py-10 px-5">
          <h1 className="text-3xl font-bold text-center mb-8">Shop Products</h1>
          <div className="flex flex-wrap justify-center gap-6 xl:flex-nowrap xl:justify-between max-w-screen-xl mx-auto">
            {categories.map((category, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center space-y-3"
              >
                <div className="w-24 h-24 md:w-32 md:h-32 bg-gray-200 rounded-full overflow-hidden shadow-md">
                  <Image
                    src={category.imgSrc}
                    alt={category.name}
                    width={128}
                    height={128}
                    className="object-cover w-full"
                  />
                </div>
                <h2 className="text-sm md:text-base font-medium">{category.name}</h2>
              </div>
            ))}
          </div>
        </div>
        <div className="Hero">
          <HeroSection
            desktopImg="/images/hero-image2.webp"
            mobileImg="/images/hero-image2.webp"
            link="/products"
            altText="Kids Collection T-Shirt"
          />
        </div>
        <div className="Hero">
          <HeroSection
            desktopImg="/images/made-india.jpg"
            mobileImg="/images/made-india.jpg"
            link="/collections/oversized-t-shirts"
            altText="Oversized T-Shirt"
          />
        </div>
        <div className="newLaunch">
          <section className="w-full py-20 bg-[#111111] text-white">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
              <div className="text-center mb-10">
                <h2 className="text-4xl font-bold mb-4">Introducing Our New Launch</h2>
                <p className="text-lg text-[#A1A1A1]">We are excited to announce something new! Stay tuned for the details.</p>
              </div>
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="w-full md:w-1/2">
                  <h3 className="text-3xl font-semibold mb-4">Our Latest Innovation</h3>
                  <p className="text-lg mb-6">
                    This new product will revolutionize the way you experience our service. With cutting-edge features and improved performance, it is designed to meet your needs.
                  </p>
                  <Link href="/launch-details" className="inline-block text-[#FF6166] font-semibold text-lg py-2 px-6 border-2 border-[#FF6166] rounded-full hover:bg-[#FF6166] hover:text-black transition duration-300">
                    Learn More
                  </Link>
                </div>
                <div className="w-full md:w-1/2">
                  <img
                    src="/images/new-launch.jpg" // Replace with your actual image
                    alt="New Launch"
                    className="w-full rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};
export default products;
