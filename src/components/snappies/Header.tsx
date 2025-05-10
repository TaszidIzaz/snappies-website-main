
import React, { useState, useEffect } from "react";
import { ShoppingCart, LogIn } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Header: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [isSuperSaverOn, setIsSuperSaverOn] = useState<boolean>(false);
  const navigate = useNavigate();

  const searchSuggestions = [
    "Ferrero",
    "Samyang Ramen", 
    "Munchy's Crackers",
    "Lipton Ice Tea",
    "Toblerone Chocolate"
  ];

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      setSearchQuery(`Search for "${searchSuggestions[currentIndex]}"`);
      currentIndex = (currentIndex + 1) % searchSuggestions.length;
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleLocationClick = () => {
    navigate("/maintenance");
  };

  const toggleSuperSaver = () => {
    setIsSuperSaverOn(!isSuperSaverOn);
    
  };

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <div className="w-full px-[10px]"
        style={{
          background: 
            window.innerWidth <= 768
              ? "linear-gradient(to bottom, #B2E6D0 15%, #FFFFFF 230px)"
              : "linear-gradient(to bottom, #B2E6D0 5%, #FFFFFF 120px)"
        }}>
      {/* Announcement Bar */}
      <div className="hidden bg-[rgba(252,219,87,1)] sm:flex w-full flex-col text-base justify-center px-[20px] md:px-[70px] py-[17px] rounded-[5px] max-w-[1520px] mx-auto">
        <div className="flex w-full max-w-full items-center gap-5 justify-center">
          <div className="text-black text-sm md:text-base font-normal tracking-[0.32px] self-stretch my-auto max-md:max-w-full">
            Free delivery on orders over <span className="font-semibold">৳499</span> or "Get 10% off on
            your very first order on the platform use <span className="font-semibold">" First10 "</span> !
          </div>
          <div 
            className="text-black text-sm md:text-base font-medium underline self-stretch my-auto cursor-pointer"
            onClick={() => handleNavigation("/maintenance")}
          >
            Learn More
          </div>
        </div>
      </div>
  
      {/* Main Header - Desktop Layout */}
      <div className="hidden lg:flex max-w-[1520px] mx-auto items-center justify-between w-full py-4 gap-4">
        {/* Logo */}
        <div className="flex justify-start">
          <a href="/" className="focus:outline-none">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/00f3918735164546ac5c37075df506a7/f46602e339319d01945cfcc0f98e3b45142d5fcd"
              alt="Snappies Logo"
              className="aspect-[3.39] object-contain w-[220px] self-stretch shrink-0 my-auto"
            />
          </a>
        </div>
  
        {/* Steal Deal and Location - Desktop */}
        <div className="flex items-center gap-4">
          <button 
            onClick={toggleSuperSaver}
            className={`relative border flex items-center justify-between text-base font-normal rounded-full px-2 py-1 w-[150px] h-[60px] border-[rgba(255,255,255,0.3)] transition-colors ${isSuperSaverOn ? 'bg-[rgba(19,171,120,1)] text-white' : 'bg-[rgba(232,232,232,1)]'}`}
          >
            <div 
              className={`absolute flex h-[46px] w-[46px] rounded-full transition-all duration-300 ${isSuperSaverOn ? 'transform translate-x-[84px] bg-[rgba(252,219,87,1)]' : 'bg-white'}`}
            ></div>
            <div className={`w-[82px] text-center transition-all duration-300 ${isSuperSaverOn ? 'transform translate-x-2' : 'transform translate-x-10'}`}>
              Steal Deal
            </div>
          </button>
  
          <button
            onClick={handleLocationClick}
            className="bg-[rgba(252,219,87,1)] flex items-center gap-3 text-black font-medium text-center justify-center w-[170px] my-auto px-2.5 py-[15px] rounded-md focus:outline-none"
          >
            <span className="self-stretch my-auto">Select Location</span>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/00f3918735164546ac5c37075df506a7/f4e5ef400d4dda8dce4e2b8d520221565d3318aa"
              alt="Dropdown"
              className="aspect-[1.72] object-contain w-3 self-stretch shrink-0 my-auto"
            />
          </button>
        </div>
  
        {/* Search Bar - Desktop */}
        <div className="flex-grow mx-8 max-w-[700px]">
          <div className="bg-white border flex w-full items-center gap-3 text-[rgba(153,153,153,1)] font-light tracking-[-0.56px] px-[25px] py-[15px] rounded-md border-[rgba(205,239,225,1)] border-solid">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/00f3918735164546ac5c37075df506a7/ab93f537036c721a356841d3bb739b26598ffd71"
              alt="Search"
              className="aspect-[1] object-contain w-[18px] self-stretch shrink-0 my-auto"
            />
            <input
              type="text"
              placeholder={searchQuery}
              value=""
              onChange={handleSearchChange}
              className="self-stretch my-auto bg-transparent border-none outline-none w-full transition-all duration-300"
              onClick={() => handleNavigation("/maintenance")}
            />
          </div>
        </div>
  
        {/* Cart and Login - Desktop */}
        <div className="flex items-center gap-8">
          <button
            onClick={() => handleNavigation("/maintenance")}
            className="flex flex-col items-center justify-center w-[41px] border-none bg-transparent"
          >
            <ShoppingCart size={30} />
            <div className="text-[13px] mt-1">Cart</div>
          </button>
          <button
            onClick={() => handleNavigation("/maintenance")}
            className="flex flex-col items-center justify-center w-[41px] border-none bg-transparent"
          >
            <LogIn size={30} />
            <div className="text-[13px] mt-1">Login</div>
          </button>
        </div>
      </div>
  
      {/* Main Header - Mobile Layout */}
      <div className="lg:hidden max-w-[1520px] mx-auto flex flex-col w-full py-4 gap-4">
        {/* Logo */}
        <div className="flex justify-center">
          <a href="/" className="focus:outline-none">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/00f3918735164546ac5c37075df506a7/f46602e339319d01945cfcc0f98e3b45142d5fcd"
              alt="Snappies Logo"
              className="aspect-[3.39] object-contain w-[180px] self-stretch shrink-0 my-auto"
            />
          </a>
        </div>
  
        {/* Super Saver & Location Section with mobile-specific layout */}
        <div className="flex justify-between items-center w-full">
          {/* Left Side: Steal Deal and Location */}
          <div className="flex items-center gap-2">
            {/* Super Saver Toggle */}
            <button 
              onClick={toggleSuperSaver}
              className={`relative border flex items-center justify-between text-sm font-normal rounded-full px-1 py-1 w-[105px] h-[45px] border-[rgba(255,255,255,0.3)] transition-colors ${isSuperSaverOn ? 'bg-[rgba(19,171,120,1)] text-white' : 'bg-[rgba(232,232,232,1)]'}`}
            >
              <div 
                className={`absolute flex h-[35px] w-[35px] rounded-full transition-all duration-300 ${isSuperSaverOn ? 'transform translate-x-[60px] bg-[rgba(252,219,87,1)]' : 'bg-white'}`}
              ></div>
              <div className={`w-[45px] text-center transition-all duration-300 ${isSuperSaverOn ? 'font-medium transform translate-x-2' : 'transform translate-x-8'}`}>
                Steal Deal
              </div>
            </button>
  
            {/* Location Selector */}
            <button
              onClick={handleLocationClick}
              className="bg-[rgba(252,219,87,1)] flex items-center gap-2 text-black font-medium justify-center w-[90px] h-[35px] rounded-md focus:outline-none"
            >
              <span className="text-sm">Location</span>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/00f3918735164546ac5c37075df506a7/f4e5ef400d4dda8dce4e2b8d520221565d3318aa"
                alt="Dropdown"
                className="w-3 object-contain"
              />
            </button>
          </div>
  
          {/* Right Side: Cart and Login */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => handleNavigation("/maintenance")}
              className="flex flex-col items-center justify-center w-[25px] h-[40px] border-none bg-transparent"
            >
              <ShoppingCart size={24} />
              <div className="text-[12px] mt-1">Cart</div>
            </button>
            <button
              onClick={() => handleNavigation("/maintenance")}
              className="flex flex-col items-center justify-center w-[25px] h-[40px] border-none bg-transparent"
            >
              <LogIn size={24} />
              <div className="text-[12px] mt-1">Login</div>
            </button>
          </div>
        </div>
  
        {/* Search Bar - Mobile */}
        <div className="w-full">
          <div className="bg-white border flex w-full items-center gap-3 text-[rgba(153,153,153,1)] font-light tracking-[-0.56px] px-[25px] py-[15px] rounded-md border-[rgba(205,239,225,1)] border-solid">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/00f3918735164546ac5c37075df506a7/ab93f537036c721a356841d3bb739b26598ffd71"
              alt="Search"
              className="aspect-[1] object-contain w-[18px] self-stretch shrink-0 my-auto"
            />
            <input
              type="text"
              placeholder={searchQuery}
              value=""
              onChange={handleSearchChange}
              className="self-stretch my-auto bg-transparent border-none outline-none w-full transition-all duration-300"
              onClick={() => handleNavigation("/maintenance")}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Header;
