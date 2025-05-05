import React from "react";
import { useNavigate } from "react-router-dom";

interface ProductCardProps {
  id: string;
  name: string;
  image: string;
  currentPrice: string;
  originalPrice: string;
  discount?: string;
  backgroundColor?: string;
  buttonColor?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  image,
  currentPrice,
  originalPrice,
  discount = "39% Off",
  backgroundColor = "bg-[rgba(247,253,250,1)]",
  buttonColor = "bg-[rgba(58,183,131,1)]",
}) => {
  const navigate = useNavigate();

  const handleAddToCart = () => {
    console.log(`Added product ${id} to cart`);
    navigate("/maintenance");
  };

  const needsContainer = image.includes("86fa53de") || image.includes("c9ed595a") || image.includes("23e7b03b");

  return (
    <div className={`${backgroundColor} flex flex-col items-stretch w-full h-full min-h-[200px] rounded-[15px]`}>
      {/* Product Image with Discount Tag */}
      <div className="relative w-full aspect-square">
        {needsContainer ? (
          <div className="bg-white flex w-full h-full flex-col overflow-hidden items-center text-[12px] text-[rgba(21,21,21,1)] font-medium text-center tracking-[-0.4px] justify-center rounded-[15px]">
            <div className="flex flex-col relative w-full h-full pt-px">
              <img
                src={image}
                alt={name}
                className="absolute h-full w-full object-contain inset-0"
              />
              <div className="absolute top-2 left-2 bg-[rgba(252,219,87,1)] px-2 py-[5px] rounded-[8px] z-10 text-[11px]">
                {discount}
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-white flex w-full h-full flex-col overflow-hidden items-stretch text-[12px] text-[rgba(21,21,21,1)] font-medium text-center tracking-[-0.4px] rounded-[15px] relative">
            <div className="absolute top-2 left-2 bg-[rgba(252,219,87,1)] px-2 py-[5px] rounded-[8px] z-10 text-[11px]">
              {discount}
            </div>
            <img
              src={image}
              alt={name}
              className="w-full h-full object-contain p-2"
            />
          </div>
        )}
      </div>

      {/* Product Details */}
      <div className="flex flex-col justify-between p-2 flex-grow">
        <h3 className="text-xs text-black font-medium tracking-[-0.4px] leading-[18px] line-clamp-2 h-[36px]">
          {name}
        </h3>

        <div className="flex w-full items-center justify-between mt-1">
          <div className="flex items-center gap-1">
            <div className="text-black text-sm font-semibold leading-none tracking-[0.3px]">
              {currentPrice}
            </div>
            <div className="text-[#2b1e35] text-[10px] font-normal leading-none line-through">
              {originalPrice}
            </div>
          </div>

          <button
            onClick={handleAddToCart}
            className={`w-14 ${buttonColor} min-h-[26px] text-xs text-white font-medium text-center tracking-[-0.3px] py-[5px] rounded-[8px] focus:outline-none hover:opacity-90 transition-opacity`}
            aria-label={`Add ${name} to cart`}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
