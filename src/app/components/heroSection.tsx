import React from "react";
import Image from "next/image";
import Link from "next/link";

interface HeroSectionProps {
  desktopImg: string;
  mobileImg: string;
  link: string;
  altText: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ desktopImg, mobileImg, link, altText }) => {
  return (
    <section
      id="sf__hero-section"
      className="w-full relative bg-gray-200 mb-10"
      style={{ "--content-color": "white" } as React.CSSProperties}
    >
      <div className="relative">
        {/* Desktop Background Image */}
        <div className="hidden md:block overflow-hidden">
          <Image
            src={desktopImg}
            alt={altText}
            width={1400}
            height={760}
            sizes="100vw"
            className="h-auto"
            priority
          />
        </div>
        {/* Mobile Background Image */}
        <div className="block md:hidden">
          <Image
            src={mobileImg}
            alt={altText}
            width={750}
            height={760}
            sizes="100vw"
            className="h-auto"
            loading="lazy"
          />
        </div>
        {/* Link Wrapper */}
        <Link href={link} className="absolute inset-0"></Link>
      </div>
      {/* Hero Content */}
      {/* <div className="absolute inset-0 flex justify-center items-center">
        <div className="text-center">
          <h1 className="text-white text-3xl md:text-5xl font-bold">Explore Oversized T-Shirts</h1>
          <p className="text-white text-lg mt-4">Comfort and style for every season.</p>
          <Link
            href={link}
            className="mt-6 inline-block bg-purple-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-purple-800 transition"
          >
            Shop Now
          </Link>
        </div>
      </div> */}
    </section>
  );
};

export default HeroSection;
