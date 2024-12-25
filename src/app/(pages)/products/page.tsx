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
    <div>
      <div className="card-list flex-row flex-wrap space-x-4 object-cover sm:flex md:flex justify-center gap-4 mt-4">
        <Carousel
          slides={slides}
          carouselWidth="50rem"
          autoSlide
          // effect="fade"
          autoSlideInterval={2000}
          controllArrowSize={30}
        />
      </div>
      <div className="card-list flex-row flex-wrap space-x-4 object-cover sm:flex md:flex justify-center gap-4 mt-4">
        {productlist.map((product) => (
          <Card
            key={product.id}
            id={product.id}
            brand={product.brand}
            name={product.name}
            size={product.size}
            price={product.price}
            image={product.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};
export default products;
