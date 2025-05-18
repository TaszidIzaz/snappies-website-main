"use client";
import React from "react";
import Header from "./Header";
import CategoryList from "./CategoryList";
import ProductGrid from "./ProductGrid";
import PromoBanner from "./PromoBanner";
import HowItWorks from "./HowItWorks";
import SearchTags from "./SearchTags";
import Footer from "./Footer";

const Snappies: React.FC = () => {
  return (
    <div className="bg-white flex flex-col items-stretch">
      <div className="sticky top-0 z-50 max-md:relative bg-white">
        <Header />
      </div>
      <div className="self-center flex w-full max-w-[1520px] flex-col items-stretch mt-5 px-[10px]">
        {/* Categories */}
        <div className="flex justify-center w-full">
          <CategoryList />
        </div>

        {/* First Product Section with Horizontal Scroll */}
        
        <div className="mt-[60px]">
        <div className="w-full text-black">
        <h2 className="text-[22px] md:text-[28px] font-semibold leading-none tracking-[-0.56px] w-full mb-[60px]">
          Top Products
        </h2>
      </div>
          
          <div className="relative" id="main-products">
            {/* Left Arrow */}
            <button 
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-2 shadow-md -ml-2 focus:outline-none hidden md:block" 
              onClick={() => {
                const container = document.querySelector('#main-products > div');
                if (container) {
                  container.scrollBy({ left: -300, behavior: 'smooth' });
                }
              }}
              aria-label="Scroll left"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>

            {/* Mobile scroll indicator */}
            <div className="absolute right-4 top-[-30px] flex items-center gap-2 md:hidden">
              <span className="text-sm text-gray-600">Swipe</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </div>

            <div className="overflow-x-auto hide-scrollbar">
              <ProductGrid
                horizontal={true}
                scrollable={true}
                backgroundColor="bg-[rgba(247,247,247,1)]"
                buttonColor="bg-[rgba(58,183,131,1)]"
              />
            </div>

            {/* Right Arrow */}
            <button 
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-2 shadow-md -mr-2 focus:outline-none hidden md:block" 
              onClick={() => {
                const container = document.querySelector('#main-products > div');
                if (container) {
                  container.scrollBy({ left: 300, behavior: 'smooth' });
                }
              }}
              aria-label="Scroll right"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>

          {/* See All Products Button */}
          <div className="flex justify-center mt-8">
            <button
              onClick={() => window.location.href = '/maintenance'}
              className="bg-[rgba(58,183,131,1)] hover:bg-[rgba(48,163,111,1)] text-white px-8 py-3 rounded-lg transition-colors"
            >
              See All Products
            </button>
          </div>
        </div>

        {/* Grocery Banner */}
        <PromoBanner
          backgroundColor="bg-[rgba(252,219,87,1)]"
          title="Save Big on Groceries"
          description={
            <>
              Use the <span className="font-bold text-black">"choco50" </span>
              code and save up to{" "}
              <span className="font-bold text-black">50%</span>
            </>
          }
          buttonText="See All Deals"
          buttonColor="bg-white"
          buttonTextColor="text-black"
          imageUrl="public/uploads/gro.png"
          className="mt-[60px]"
          imageClassName="scale-[5.5] transform-gpu" // Updated scaling class
        />

        {/* How It Works Section */}
        <div className="self-center flex w-full max-w-[1520px] flex-col items-stretch px-[10px]">
          <HowItWorks className="mt-[60px]" />
        </div>

        {/* Selling Out Fast Banner with Products */}
        <div className="self-center flex w-full max-w-[1520px] flex-col items-stretch px-[10px]">
          <div className="flex w-full flex-col mt-[60px]">
            <PromoBanner
              backgroundColor="bg-[rgba(58,183,131,1)]"
              title="Selling Out Fast"
              description="Don't miss out on these popular items!"
              buttonText="See All Products"
              buttonColor="bg-white"
              buttonTextColor="text-[rgba(58,183,131,1)]"
              tag="Hot Deals"
              className="w-full"
              isHotDeals={true}
            >
            <div className="mt-8 relative" id="fast-container">
              {/* Left Arrow */}
              <button 
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-2 shadow-md -ml-2 focus:outline-none hidden md:block" 
                onClick={() => {
                  // Direct reference to the scrollable element inside this container
                  const container = document.querySelector('#fast-container > div > div');
                  if (container) {
                    container.scrollBy({ left: -300, behavior: 'smooth' });
                  }
                }}
                aria-label="Scroll left"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
              
              {/* Mobile scroll indicator */}
              <div className="absolute right-4 top-[-30px] flex items-center gap-2 md:hidden">
                <span className="text-sm text-gray-600">Swipe</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>

                  <ProductGrid
                    horizontal={true}
                    scrollable={true}
                    backgroundColor="bg-[rgba(255,250,250,1)]"
                    buttonColor="bg-[rgba(58,183,131,1)]"
                  />
                
                {/* Right Arrow */}
                <button 
                  className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-2 shadow-md -mr-2 focus:outline-none hidden md:block" 
                  onClick={() => {
                    // Direct reference to the scrollable element inside this container
                    const container = document.querySelector('#fast-container > div > div');
                    if (container) {
                      container.scrollBy({ left: 300, behavior: 'smooth' });
                    }
                  }}
                  aria-label="Scroll right"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </button>
              </div>
            </PromoBanner>
          </div>
        </div>

        {/* New Products Banner */}
        <div className="self-center flex w-full max-w-[1520px] flex-col items-stretch px-[10px]">
          <div className="flex w-full flex-col mt-[60px]">
            <PromoBanner
              backgroundColor="bg-[#9b87f5]"
              title="New Products"
              description="Check out our latest arrivals"
              buttonText="See All Products"
              buttonColor="bg-white"
              buttonTextColor="text-[#9b87f5]"
              tag="New"
              className="w-full"
              isHotDeals={true}
            >
            <div className="mt-8 relative" id="newprod-container">
              {/* Left Arrow */}
              <button 
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-2 shadow-md -ml-2 focus:outline-none hidden md:block" 
                onClick={() => {
                  // Direct reference to the scrollable element inside this container
                  const container = document.querySelector('#newprod-container > div > div');
                  if (container) {
                    container.scrollBy({ left: -300, behavior: 'smooth' });
                  }
                }}
                aria-label="Scroll left"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
              
              {/* Mobile scroll indicator */}
              <div className="absolute right-4 top-[-30px] flex items-center gap-2 md:hidden">
                <span className="text-sm text-gray-600">Swipe</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
                
                
                  <ProductGrid
                    horizontal={true}
                    scrollable={true}
                    backgroundColor="bg-[rgba(255,250,250,1)]"
                    buttonColor="bg-[#9b87f5]"
                  />
                
                
                {/* Right Arrow */}
                <button 
                  className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-2 shadow-md -mr-2 focus:outline-none hidden md:block" 
                  onClick={() => {
                    // Direct reference to the scrollable element inside this container
                    const container = document.querySelector('#newprod-container > div > div');
                    if (container) {
                      container.scrollBy({ left: 300, behavior: 'smooth' });
                    }
                  }}
                  aria-label="Scroll right"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </button>
              </div>
            </PromoBanner>
          </div>
        </div>

        {/* Chocolates Banner */}
        <div className="self-center flex w-full max-w-[1520px] flex-col items-stretch px-[10px]">
          <div className="flex w-full flex-col mt-[60px]">
            <PromoBanner
              backgroundColor="bg-[rgba(184,118,86,1)]"
              title="Don't Miss this Deal"
              description={
                <>
                  Use the <span className="font-bold text-white">"choco50"</span> code and save up to <span className="font-bold text-white">50%</span>
                </>
              }
              buttonText="See All Products"
              buttonColor="bg-white"
              buttonTextColor="text-[rgba(184,118,86,1)]"
              tag="Chocolates"
              className="w-full"
              isHotDeals={true}
            >
            <div className="mt-8 relative" id="choco-container">
              {/* Left Arrow */}
              <button 
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-2 shadow-md -ml-2 focus:outline-none hidden md:block" 
                onClick={() => {
                  // Direct reference to the scrollable element inside this container
                  const container = document.querySelector('#choco-container > div > div');
                  if (container) {
                    container.scrollBy({ left: -300, behavior: 'smooth' });
                  }
                }}
                aria-label="Scroll left"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
              
              {/* Mobile scroll indicator */}
              <div className="absolute right-4 top-[-30px] flex items-center gap-2 md:hidden">
                <span className="text-sm text-gray-600">Swipe</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
                
                
                  <ProductGrid
                    horizontal={true}
                    scrollable={true}
                    backgroundColor="bg-[rgba(255,250,250,1)]"
                    buttonColor="bg-[rgba(184,118,86,1)]"
                  />
                
                
                {/* Right Arrow */}
                <button 
                  className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-2 shadow-md -mr-2 focus:outline-none hidden md:block" 
                  onClick={() => {
                    // Direct reference to the scrollable element inside this container
                    const container = document.querySelector('#choco-container > div > div');
                    if (container) {
                      container.scrollBy({ left: 300, behavior: 'smooth' });
                    }
                  }}
                  aria-label="Scroll right"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </button>
              </div>
            </PromoBanner>
          </div>
        </div>

        {/* Snacks Banner */}
        <div className="self-center flex w-full max-w-[1520px] flex-col items-stretch px-[10px]">
          <div className="flex w-full flex-col mt-[60px]">
            <PromoBanner
              backgroundColor="bg-[rgba(239,81,78,1)]"
              title="Get all Your Snacks"
              description={
                <>
                  Use the <span className="font-bold text-white">"Snack50"</span> code and save up to <span className="font-bold text-white">50%</span>
                </>
              }
              buttonText="See All Products"
              buttonColor="bg-white"
              buttonTextColor="text-[rgba(239,81,78,1)]"
              tag="Snacks"
              className="w-full"
              isHotDeals={true}
            >
             <div className="mt-8 relative" id="snacks-container">
              {/* Left Arrow */}
              <button 
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-2 shadow-md -ml-2 focus:outline-none hidden md:block" 
                onClick={() => {
                  // Direct reference to the scrollable element inside this container
                  const container = document.querySelector('#snacks-container > div > div');
                  if (container) {
                    container.scrollBy({ left: -300, behavior: 'smooth' });
                  }
                }}
                aria-label="Scroll left"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
              
              {/* Mobile scroll indicator */}
              <div className="absolute right-4 top-[-30px] flex items-center gap-2 md:hidden">
                <span className="text-sm text-gray-600">Swipe</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
                
                  <ProductGrid
                    horizontal={true}
                    scrollable={true}
                    backgroundColor="bg-[rgba(255,250,250,1)]"
                    buttonColor="bg-[rgba(239,81,78,1)]"
                  />
                
                {/* Right Arrow */}
                <button 
                  className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-2 shadow-md -mr-2 focus:outline-none hidden md:block" 
                  onClick={() => {
                    // Direct reference to the scrollable element inside this container
                    const container = document.querySelector('#snacks-container > div > div');
                    if (container) {
                      container.scrollBy({ left: 300, behavior: 'smooth' });
                    }
                  }}
                  aria-label="Scroll right"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </button>
              </div>
            </PromoBanner>
          </div>
        </div>

        {/* Beverages Banner */}
        <div className="self-center flex w-full max-w-[1520px] flex-col items-stretch px-[10px]">
          <div className="flex w-full flex-col mt-[60px]">
            <PromoBanner
              backgroundColor="bg-[rgba(33,150,243,1)]"
              title="Get Your Beverages"
              description="Refresh yourself with our selection of drinks"
              buttonText="See All Products"
              buttonColor="bg-white"
              buttonTextColor="text-[rgba(33,150,243,1)]"
              tag="Beverages"
              className="w-full"
              isHotDeals={true}
            >
              <div className="mt-8 relative" id="beverages-container">
              {/* Left Arrow */}
              <button 
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-2 shadow-md -ml-2 focus:outline-none hidden md:block" 
                onClick={() => {
                  // Direct reference to the scrollable element inside this container
                  const container = document.querySelector('#beverages-container > div > div');
                  if (container) {
                    container.scrollBy({ left: -300, behavior: 'smooth' });
                  }
                }}
                aria-label="Scroll left"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
              
              {/* Mobile scroll indicator */}
              <div className="absolute right-4 top-[-30px] flex items-center gap-2 md:hidden">
                <span className="text-sm text-gray-600">Swipe</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
                
                  <ProductGrid
                    horizontal={true}
                    scrollable={true}
                    backgroundColor="bg-[rgba(232,244,253,1)]"
                    buttonColor="bg-[rgba(33,150,243,1)]"
                  />
                
                {/* Right Arrow */}
                <button 
                  className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-2 shadow-md -mr-2 focus:outline-none hidden md:block" 
                  onClick={() => {
                    // Direct reference to the scrollable element inside this container
                    const container = document.querySelector('#beverages-container > div > div');
                    if (container) {
                      container.scrollBy({ left: 300, behavior: 'smooth' });
                    }
                  }}
                  aria-label="Scroll right"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </button>
              </div>
            </PromoBanner>
          </div>
        </div>

        <SearchTags
          title="Popular Searches"
          tags={[
            "Samyang Chicken Ramen",
            "Davidoff Coffee",
            "Kinder Joy",
            "Nutella & Go",
            "Perrier Water",
            "Munchy's Oat Krunch",
            "Nando's Peri Peri Sauce",
            "Toblerone Dark Chocolate",
            "KitKat 4 Finger",
            "Red Bull Energy Drink",
            "Schweppes Ginger Ale",
            "Biscoff Biscuits",
          ]}
          backgroundColor="bg-[#FEF7DC]"
          className="mt-[60px]"
        />

        <SearchTags
          title="Categories"
          tags={[
            "Chocolates",
            "Instant Noodles",
            "Biscuits & Cookies",
            "Sauces & Pastes",
            "Coffee & Tea",
            "Soft Drinks",
            "Mineral & Sparkling Water",
            "Juices",
            "Dried Fruits & Nuts",
            "Jelly, Gummy & Mints",
            "Canned & Packaged Goods",
            "Tong Dokan (Tobacco & Others)",
            "Other categories",
          ]}
          backgroundColor="bg-[#E7F9F0]"
          className="mt-[60px]"
        />
      </div>

      <Footer className="mt-[60px]" />
    </div>
  );
};

export default Snappies;
