
import React from "react";

interface HowItWorksProps {
  className?: string;
}

const HowItWorks: React.FC<HowItWorksProps> = ({ className = "" }) => {
  const steps = [
    {
      id: 1,
      title: "Enter Your Location",
      description:
        "We deliver where it matters. Just pop in your delivery area or turn on GPS we'll show you what's available near you in seconds.",
      icon: "https://cdn.builder.io/api/v1/image/assets/00f3918735164546ac5c37075df506a7/0f47dd89b14bd82c5b93181d164a130e7a15111e",
      backgroundColor: "bg-[rgba(19,171,120,1)]",
      numberColor: "text-white",
      textColor: "text-white",
      descriptionColor: "text-neutral-200",
    },
    {
      id: 2,
      title: "Add Your Favourites to Cart",
      description:
        "Explore a world of snacks.From spicy noodles to gourmet coffee and international treats, scroll through our curated collection and add what you love.",
      icon: "https://cdn.builder.io/api/v1/image/assets/00f3918735164546ac5c37075df506a7/bd4cb46c1b3fd48ee57dec9143fc6bd2e1be7a15",
      backgroundColor: "bg-[rgba(252,219,87,1)]",
      numberColor: "text-white",
      textColor: "text-black",
      descriptionColor: "text-[rgba(51,51,51,1)]",
    },
    {
      id: 3,
      title: "Pay Securely within system",
      description:
        "Fast checkout, no fuss. Use your preferred method card, digital wallet, or cash on delivery. Every transaction is safe, seamless, and encrypted.",
      icon: "https://cdn.builder.io/api/v1/image/assets/00f3918735164546ac5c37075df506a7/ad183d7da191cc45c4e1b5dbfce13ef489e038ef",
      backgroundColor: "bg-[rgba(209,250,236,1)]",
      numberColor: "text-[rgba(19,171,120,1)]",
      textColor: "text-black",
      descriptionColor: "text-[rgba(26,26,26,1)]",
    },
    {
      id: 4,
      title: "Get It Delivered Super Fast",
      description:
        "We're already on the way. Sit back while your order is packed and zoomed to your door by our swift delivery partners.",
      icon: "https://cdn.builder.io/api/v1/image/assets/00f3918735164546ac5c37075df506a7/b55dd7882bb25d40ff4a8029438367fdbb71c5c1",
      backgroundColor: "bg-[rgba(254,244,205,1)]",
      numberColor: "text-[rgba(252,219,87,1)]",
      textColor: "text-black",
      descriptionColor: "text-[rgba(51,51,51,1)]",
    },
  ];

  return (
    <div className={`self-center min-h-96 w-full max-w-[1520px] ${className}`}>
      <div className="w-full text-black">
        <h2 className="text-[22px] md:text-[28px] font-semibold leading-none tracking-[-0.56px] w-full">
          How It Works
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full gap-5 mt-7">
        {steps.map((step) => (
          <div
            key={step.id}
            className="w-full h-full"
          >
            <div
              className={`${step.backgroundColor} flex w-full h-full flex-col overflow-hidden pl-5 pr-5 pt-7 pb-12 rounded-[10px]`}
            >
              <div
                className={`flex gap-5 md:gap-10 text-5xl md:text-[100px] ${step.numberColor} font-semibold whitespace-nowrap tracking-[1px] leading-[1.3]`}
              >
                <img
                  src={step.icon}
                  alt={`Step ${step.id}`}
                  className="aspect-[1] object-contain w-14 md:w-20 shrink-0"
                />
                <div>{step.id}</div>
              </div>

              <div className="mt-5 md:mt-[22px]">
                <h3
                  className={`${step.textColor} text-lg md:text-xl font-semibold leading-[1.3] tracking-[0.2px]`}
                >
                  {step.title}
                </h3>
                <p
                  className={`${step.descriptionColor} text-sm md:text-base font-normal leading-6 mt-3 md:mt-4`}
                >
                  {step.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
