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

        {/* First Two Product Rows Combined */}
        <div className="mt-[60px]">
          <ProductGrid />
          
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
          imageUrl="https://cdn.builder.io/api/v1/image/assets/00f3918735164546ac5c37075df506a7/0c5d4920d464567651cedcbdcc4b671303ac078c"
          className="mt-[60px]"
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
              <div className="mt-8">
                <ProductGrid
                  horizontal={true}
                  scrollable={true}
                  backgroundColor="bg-[rgba(247,253,250,1)]"
                  buttonColor="bg-[rgba(58,183,131,1)]"
                />
              </div>
            </PromoBanner>
          </div>
        </div>

        {/* New Products Banner */}
        <div className="mt-[60px]">
          <div className="flex w-full flex-col md:flex-row items-center gap-10">
            <PromoBanner
              backgroundColor="bg-[#9b87f5]"
              title="New Products"
              description="Check out our latest arrivals"
              buttonText="See All Products"
              buttonColor="bg-white"
              buttonTextColor="text-[#9b87f5]"
              tag="New"
              className="w-full md:w-[420px] min-h-[316px] flex flex-col justify-between"
            />
            <div className="w-full overflow-x-auto">
              <ProductGrid
                horizontal={true}
                scrollable={true}
                backgroundColor="bg-[rgba(247,253,250,1)]"
                buttonColor="bg-[#9b87f5]"
              />
            </div>
          </div>
        </div>

        {/* Chocolates Banner */}
        <div className="mt-[60px]">
          <div className="flex w-full flex-col md:flex-row items-center gap-10">
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
              className="w-full md:w-[420px] min-h-[316px] flex flex-col justify-between"
            />
            <div className="w-full overflow-x-auto">
              <ProductGrid
                horizontal={true}
                scrollable={true}
                backgroundColor="bg-[rgba(252,249,248,1)]"
                buttonColor="bg-[rgba(184,118,86,1)]"
              />
            </div>
          </div>
        </div>

        {/* Snacks Banner */}
        <div className="mt-[60px]">
          <div className="flex w-full flex-col md:flex-row items-center gap-10">
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
              className="w-full md:w-[420px] min-h-[316px] flex flex-col justify-between"
            />
            <div className="w-full overflow-x-auto">
              <ProductGrid
                horizontal={true}
                scrollable={true}
                backgroundColor="bg-[rgba(255,250,250,1)]"
                buttonColor="bg-[rgba(239,81,78,1)]"
              />
            </div>
          </div>
        </div>

        {/* Beverages Banner */}
        <div className="mt-[60px]">
          <div className="flex w-full flex-col md:flex-row items-center gap-10">
            <PromoBanner
              backgroundColor="bg-[rgba(33,150,243,1)]"
              title="Get Your Beverages"
              description="Refresh yourself with our selection of drinks"
              buttonText="See All Products"
              buttonColor="bg-white"
              buttonTextColor="text-[rgba(33,150,243,1)]"
              tag="Beverages"
              className="w-full md:w-[420px] min-h-[316px] flex flex-col justify-between"
            />
            <div className="w-full overflow-x-auto">
              <ProductGrid
                horizontal={true}
                scrollable={true}
                backgroundColor="bg-[rgba(232,244,253,1)]"
                buttonColor="bg-[rgba(33,150,243,1)]"
              />
            </div>
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
