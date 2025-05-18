
import React, { ReactNode } from "react";

interface PromoBannerProps {
  backgroundColor: string;
  title: string;
  description: ReactNode;
  buttonText?: string;
  buttonColor?: string;
  buttonTextColor?: string;
  imageUrl?: string;
  imageClassName?: string;  // Add this line
  tag?: string;
  className?: string;
  children?: ReactNode;
  isHotDeals?: boolean;
}

const PromoBanner: React.FC<PromoBannerProps> = ({
  backgroundColor,
  title,
  description,
  buttonText,
  buttonColor = "",
  buttonTextColor = "",
  imageUrl,
  imageClassName,  // Add this line
  tag,
  className = "",
  children,
  isHotDeals = false,
}) => {
  const isGroceryBanner = backgroundColor === "bg-[rgba(252,219,87,1)]";
  const textColor = isGroceryBanner ? "text-black" : "text-white";
  
  return (
    <div
      className={`${backgroundColor} ${className} relative flex flex-col w-full ${isHotDeals ? 'min-h-[316px]' : 'h-[316px]'} px-[30px] py-8 md:px-[30px] md:py-12 rounded-[15px] overflow-hidden`}
    >
      {tag && (
        <div className="self-start inline-block bg-white z-10 text-[13px] text-[rgba(21,21,21,1)] font-medium whitespace-nowrap text-center px-[19px] py-[7px] rounded-[10px] mb-4">
          {tag}
        </div>
      )}

      <div className={`flex flex-col z-10 ${isHotDeals ? '' : 'flex-grow'}`}>
        <div className="flex-grow">
          <h2 className={`text-[28px] md:text-[32px] font-bold leading-tight tracking-[-0.8px] md:tracking-[-1px] ${textColor} whitespace-nowrap`}>
            {title}
          </h2>
          <div className={`text-base md:text-[16px] font-normal leading-[1.2] tracking-[-0.5px] mt-4 ${textColor}`}>
            {description}
          </div>
          {buttonText && (
            <a
              href="#"
              className={`inline-block ${buttonColor} text-base font-medium ${buttonTextColor} text-center tracking-[-0.4px] mt-6 px-4 py-[10px] rounded-md hover:opacity-90 transition-opacity`}
            >
              {buttonText}
            </a>
          )}
        </div>
      </div>

      {imageUrl && (
        <div className="absolute z-0 right-0 bottom-0 max-w-[50%] h-full flex items-end justify-end">
          <img
            src={imageUrl}
            alt="Background"
            className="object-contain max-h-[200px] w-auto ml-auto opacity-90 md:opacity-100"
          />
        </div>
      )}

      {children}
    </div>
  );
};

export default PromoBanner;
