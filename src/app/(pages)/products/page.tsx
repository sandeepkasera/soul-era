import Card from "@/app/components/card";
import productlist from "@/app/assets/data/productlist.json";
import Carousel from '@/app/components/carousel';



const products = () => {
  const slides = [
    "/images/image1.jpg",
    "/images/image2.jpg",
    "/images/image3.jpg"
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="card-list flex flex-wrap justify-center gap-4">
        <Carousel
          slides={slides}
          carouselWidth="60rem"
          autoSlide
          autoSlideInterval={2000}
          controllArrowSize={30}
        />
      </div>

      <div className="card-list flex flex-wrap justify-center gap-4 mt-8">
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
    </div>
  );
};
export default products;
