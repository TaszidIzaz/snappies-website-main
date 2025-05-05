
import React from "react";
import ProductCard from "./ProductCard";

interface ProductGridProps {
  title?: string;
  seeAllLink?: boolean;
  className?: string;
  horizontal?: boolean;
  scrollable?: boolean;
  backgroundColor?: string;
  buttonColor?: string;
}

const ProductGrid: React.FC<ProductGridProps> = ({
  title,
  seeAllLink = false,
  className = "",
  horizontal = false,
  scrollable = false,
  backgroundColor,
  buttonColor,
}) => {
  // Sample product data - in a real app, this would come from an API
  const products = [
    {
      id: "1",
      name: "Kitkat 4 Fingers Chocolate Covered Wafer Bar 36.5g",
      image:
        "https://cdn.builder.io/api/v1/image/assets/00f3918735164546ac5c37075df506a7/86fa53de9868f1580b5b1fc81e5fdb08c0091705",
      currentPrice: "৳99",
      originalPrice: "৳129",
    },
    {
      id: "2",
      name: "Ferrero Rocher Chocolate Box 200g",
      image:
        "https://cdn.builder.io/api/v1/image/assets/00f3918735164546ac5c37075df506a7/b330209604b9710b4f15928fa6ae95cac2a64480",
      currentPrice: "৳999",
      originalPrice: "৳1299",
    },
    {
      id: "3",
      name: "Leggo's Alfredo Fresh Cream & Cheese Pasta Sauce 490g",
      image:
        "https://cdn.builder.io/api/v1/image/assets/00f3918735164546ac5c37075df506a7/812677e348cd3d4ffdf1d8e9039aade3940df135",
      currentPrice: "৳549",
      originalPrice: "৳799",
    },
    {
      id: "4",
      name: "Munchy's Oat Krunch - Dark Chocolate 208g",
      image:
        "https://cdn.builder.io/api/v1/image/assets/00f3918735164546ac5c37075df506a7/994410574f2a3d1e648c0de2862833fba235dc77",
      currentPrice: "৳549",
      originalPrice: "৳799",
    },
    {
      id: "5",
      name: "Leggo's Bolognese with Chunky Tomato, Garlic & Herbs Pasta Sauce 500g",
      image:
        "https://cdn.builder.io/api/v1/image/assets/00f3918735164546ac5c37075df506a7/d99271ae82c0b99ddd2a91bc7b2c1fc1aefeaedd",
      currentPrice: "৳549",
      originalPrice: "৳1299",
    },
    {
      id: "6",
      name: "Lipton Lemon Ice Tea 300ml",
      image:
        "https://cdn.builder.io/api/v1/image/assets/00f3918735164546ac5c37075df506a7/ec956dea1962526e27b7d71486e735f1d3b86caa",
      currentPrice: "৳549",
      originalPrice: "৳1299",
    },
    {
      id: "7",
      name: "Saporito Tahini 100% Creamed Sesame Sauce 300ml",
      image:
        "https://cdn.builder.io/api/v1/image/assets/00f3918735164546ac5c37075df506a7/23e7b03b439b1cfc7f55f29f227ca1a0da78fe87",
      currentPrice: "৳999",
      originalPrice: "৳1299",
    },
    {
      id: "8",
      name: "Davidoff Espresso 57 Intense Instant Coffee 100g",
      image: "/uploads/81b478e6-b369-44b3-b132-aac894ca20f3.png",
      currentPrice: "৳899",
      originalPrice: "৳1099",
    },
    {
      id: "9",
      name: "M&M's Peanut Chocolate Candies 45g",
      image: "/uploads/f9607f49-68b1-4c1e-9dd2-d89ca53076f2.png",
      currentPrice: "৳149",
      originalPrice: "৳199",
    },
    {
      id: "10",
      name: "Twix Chocolate Cookie Bar 50g",
      image: "/uploads/73977275-1b78-4e1d-ad42-40d300b5fb54.png",
      currentPrice: "৳120",
      originalPrice: "৳150",
    },
    {
      id: "11",
      name: "Cadbury Original Oreo Biscuit 120g",
      image: "/uploads/175cd8fb-dca6-4563-ad7a-a5cf68db5919.png",
      currentPrice: "৳149",
      originalPrice: "৳199",
    },
    {
      id: "12",
      name: "Toblerone Swiss Dark Chocolate with Honey & Almond Nougat 100g",
      image: "/uploads/f6cb5249-813c-4e78-962b-798ed41fe87b.png",
      currentPrice: "৳349",
      originalPrice: "৳499",
    },
    {
      id: "13",
      name: "Kinder Joy Chocolate Egg with Surprise Toy 20g",
      image: "/uploads/bb993c22-c806-4fa1-8a88-8b6ab9d0c813.png",
      currentPrice: "৳129",
      originalPrice: "৳179",
    },
    {
      id: "14",
      name: "Schweppes Tonic Water 330ml",
      image: "/uploads/4d360787-2c37-469c-be21-84e4b91a05ef.png",
      currentPrice: "৳120",
      originalPrice: "৳150",
    },
    {
      id: "15",
      name: "Heinz Chili Sauce 300ml",
      image: "/uploads/e7348166-6faa-45c0-9df1-cf7b1b92fe66.png",
      currentPrice: "৳349",
      originalPrice: "৳429",
    },
    {
      id: "16",
      name: "Tabasco Original Red Pepper Sauce 60ml",
      image: "/uploads/5c3943af-010e-41ac-a87a-c5ce1c8e19ed.png",
      currentPrice: "৳449",
      originalPrice: "৳599",
    },
    {
      id: "17",
      name: "Mars Chocolate Bar 51g",
      image: "/uploads/1cdc0822-0f68-4883-9bd9-797e6866a4dd.png",
      currentPrice: "৳120",
      originalPrice: "৳150",
    },
    {
      id: "18",
      name: "Snickers Chocolate Bar 50g",
      image: "/uploads/c2d21128-9158-4192-8b02-66649fdec782.png",
      currentPrice: "৳120",
      originalPrice: "৳150",
    },
    {
      id: "19",
      name: "Cadbury 5 Star Chocolate Bar 40g",
      image: "/uploads/dae11d33-e501-4f19-b500-71938a35438c.png",
      currentPrice: "৳100",
      originalPrice: "৳130",
    },
    // New products from uploaded images
    // {
    //   id: "20",
    //   name: "Schweppes Tonic Water Can 330ml",
    //   image: "/uploads/4d360787-2c37-469c-be21-84e4b91a05ef.png",
    //   currentPrice: "৳150",
    //   originalPrice: "৳180",
    // },
    {
      id: "21",
      name: "Perrier Sparkling Natural Mineral Water 330ml",
      image: "/uploads/11ccb23e-29eb-497f-afb8-3ecc9dcf42d4.png",
      currentPrice: "৳249",
      originalPrice: "৳299",
    },
    {
      id: "22",
      name: "Evian Natural Mineral Water 1.5L",
      image: "/uploads/0b0de9b2-29ce-42c8-891e-e350318b23d2.png",
      currentPrice: "৳199",
      originalPrice: "৳250",
    },
    {
      id: "23",
      name: "Nutrilife Orange Fruit Juice 160ml",
      image: "/uploads/4f1c9dff-662e-4ec0-8461-e4dd4b18797d.png",
      currentPrice: "৳80",
      originalPrice: "৳100",
    },
    {
      id: "24",
      name: "Nutrilife Pomegranate Fruit Magic 200ml",
      image: "/uploads/07036930-ea87-4eef-b95c-02069aded879.png",
      currentPrice: "৳90",
      originalPrice: "৳120",
    },
    {
      id: "25",
      name: "Lipton Lemon Ice Tea Can 330ml",
      image: "/uploads/053b63a8-3403-4484-b093-95a95ef1cfdc.png",
      currentPrice: "৳140",
      originalPrice: "৳180",
    },
  ];

  // For horizontal layout, limit to 7 products
  const displayProducts = horizontal ? products.slice(0, 7) : products;

  // For variation between product sections, let's shuffle the products 
  // for different sections but keep it deterministic
  const getProductsBySection = () => {
    // Use different segments for different sections
    if (title === "Chocolates" || buttonColor === "bg-[rgba(184,118,86,1)]") {
      return [8, 9, 10, 11, 12, 13, 17, 18, 19].map(id => 
        products.find(p => p.id === id.toString())).filter(Boolean);
    } 
    else if (title === "Beverages" || buttonColor === "bg-[rgba(33,150,243,1)]") {
      // Include new beverage products
      return [6, 14, 21, 22, 23, 24, 25].map(id => 
        products.find(p => p.id === id.toString())).filter(Boolean);
    }
    else if (title === "Snacks" || buttonColor === "bg-[rgba(239,81,78,1)]") {
      return [4, 9, 10, 11, 17, 18, 19].map(id => 
        products.find(p => p.id === id.toString())).filter(Boolean);
    }
    else if (buttonColor === "bg-[rgba(58,183,131,1)]") {
      // Mix of popular products including some new beverages
      return [1, 13, 17, 22, 23, 10, 9].map(id => 
        products.find(p => p.id === id.toString())).filter(Boolean);
    }
    else if (buttonColor === "#9b87f5") {
      // New products section with focus on new beverages
      return [ 21, 23, 24, 25, 8, 12].map(id => 
        products.find(p => p.id === id.toString())).filter(Boolean);
    }
    
    return displayProducts;
  };

  const sectionProducts = horizontal ? getProductsBySection() : displayProducts;
  
  return (
    <div className={`${className} max-w-[1520px] mx-auto px-[10px]`}>
      {title && (
        <div className="flex min-h-[37px] w-full items-center gap-[20px_40px] text-black justify-between flex-wrap">
          <h2 className="text-[22px] md:text-[28px] font-semibold leading-none tracking-[-0.56px] self-stretch my-auto">
            {title}
          </h2>

          {seeAllLink && (
            <a
              href="#"
              className="self-stretch flex items-center gap-2 text-base font-medium leading-none my-auto hover:underline"
            >
              <span className="self-stretch my-auto">See All</span>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/00f3918735164546ac5c37075df506a7/6ef86faebaf88e7d70e588a3f4b771a6ade8ebb5"
                alt="Arrow"
                className="aspect-[0.63] object-contain w-[5px] self-stretch shrink-0 my-auto"
              />
            </a>
          )}
        </div>
      )}

      <div
        className={`${
          scrollable || horizontal || window.innerWidth < 768
            ? "flex overflow-x-auto snap-x snap-mandatory pb-4 hide-scrollbar"
            : "flex flex-wrap justify-center gap-5"
        } w-full items-stretch ${title ? "mt-7" : ""}`}
      >
        {sectionProducts.map((product) => (
          <div 
            key={product.id} 
            className={`${
              scrollable || horizontal || window.innerWidth < 768 
                ? "snap-start flex-shrink-0 mr-5 last:mr-0" 
                : ""
            } w-full h-full sm:w-[calc(50%-10px)] md:w-[calc(33.333%-13.333px)] lg:w-[calc(14.285%-12px)]`}
          >
            <ProductCard
              id={product.id}
              name={product.name}
              image={product.image}
              currentPrice={product.currentPrice}
              originalPrice={product.originalPrice}
              backgroundColor={backgroundColor}
              buttonColor={buttonColor}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
