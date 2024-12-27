import React from 'react';

const HeroSection = () => {
  return (
    <section
      id="hero-section"
      className="relative w-full"
    >
      {/* Desktop Background */}
      <div
        className="hidden md:block overflow-hidden"
      >
        <img
          src="//soulandpeace.com/cdn/shop/files/Soul_Peace_-_India_Brand_Vocalforlocal.jpg?v=1614408663&width=1500"
          srcSet="
            //soulandpeace.com/cdn/shop/files/Soul_Peace_-_India_Brand_Vocalforlocal.jpg?v=1614408663&width=375 375w,
            //soulandpeace.com/cdn/shop/files/Soul_Peace_-_India_Brand_Vocalforlocal.jpg?v=1614408663&width=550 550w,
            //soulandpeace.com/cdn/shop/files/Soul_Peace_-_India_Brand_Vocalforlocal.jpg?v=1614408663&width=750 750w,
            //soulandpeace.com/cdn/shop/files/Soul_Peace_-_India_Brand_Vocalforlocal.jpg?v=1614408663&width=1100 1100w,
            //soulandpeace.com/cdn/shop/files/Soul_Peace_-_India_Brand_Vocalforlocal.jpg?v=1614408663&width=1500 1500w
          "
          width="1280"
          height="638"
          loading="lazy"
          sizes="100vw"
          className="object-cover w-full h-full"
          alt="Soul and Peace"
        />
      </div>

      {/* Mobile Background */}
      <div
        className="block md:hidden"
      >
        <img
          src="/images/made-india.jpg"
          width="1280"
          height="638"
          loading="lazy"
          sizes="100vw"
          className="object-cover w-full h-full"
          alt="Soul and Peace"
        />
      </div>
    </section>
  );
};

export default HeroSection;
