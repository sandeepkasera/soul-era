import Card from "@/app/components/card";
import productlist from "@/app/assets/data/productlist.json";
import Carousel from '@/app/components/carousel';
import HeroSection from "@/app/components/heroSection";
import Link from "next/link";



const products = () => {
  const slides = [
    "/images/image1.jpg",
    "/images/image2.jpg",
    "/images/image3.jpg"
  ];

  return (
    <div className="container mx-auto py-4">
      <div className="card-list flex flex-wrap justify-center">
        <Carousel
          slides={slides}
          carouselWidth="60rem"
          autoSlide
          autoSlideInterval={2000}
          controllArrowSize={30}
        />
      </div>

      <div className="card-list flex flex-wrap justify-center mt-8">
        {productlist.map((product) => (
          <Card
            key={product.id}
            id={product.id}
            brand={product.brand}
            name={product.name}
            size={product.size}
            price={product.price}
            image={product.images}
          />
        ))}
      </div>
      <div className="Hero">
        <HeroSection />
      </div>
      <div className="newLaunch">
      <section className="w-full py-20 bg-[#111111] text-white">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="text-center mb-10">
                    <h2 className="text-4xl font-bold mb-4">Introducing Our New Launch</h2>
                    <p className="text-lg text-[#A1A1A1]">We're excited to announce something new! Stay tuned for the details.</p>
                </div>
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="w-full md:w-1/2">
                        <h3 className="text-3xl font-semibold mb-4">Our Latest Innovation</h3>
                        <p className="text-lg mb-6">
                            This new product will revolutionize the way you experience our service. With cutting-edge features and improved performance, it's designed to meet your needs.
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
  );
};
export default products;
