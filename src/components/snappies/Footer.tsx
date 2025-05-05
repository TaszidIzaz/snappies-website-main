import React from "react";
import { useNavigate } from "react-router-dom";

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className = "" }) => {
  const navigate = useNavigate();
  
  const companyLinks = ["Home", "How it works", "Delivery Areas", "About Us"];
  const exploreLinks = [
    "Browser Offers",
    "New Promotional Services",
    "All Categories",
    "Upcoming Sales",
  ];
  const usefulLinks = [
    "FAQs",
    "Delivery Information",
    "Return & Refund Policy",
    "Payment Options",
  ];
  
  const handleNavigation = (path: string) => {
    if (path === "Home") {
      navigate("/");
    } else {
      navigate("/maintenance");
    }
  };

  return (
    <footer
      className={`bg-[rgba(19,171,120,1)] self-center flex w-full flex-col items-stretch justify-center ${className} px-[30px] md:px-[100px] lg:px-[200px] py-[60px] max-md:max-w-full max-md:mt-10`}
    >
      <div className="w-full pb-[25px] max-md:max-w-full">
        <div className="flex min-h-[278px] flex-wrap pb-[101px] max-md:max-w-full max-md:pb-[100px]">
          {/* Logo and Social Media */}
          <div className="flex min-w-60 flex-col flex-1 shrink basis-[0%] max-w-[1440px] pr-[76px]">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/00f3918735164546ac5c37075df506a7/8adc0cad7861f4af0ccf4f2b8677c252c9d0b228"
              alt="Snappies Logo"
              className="aspect-[3.39] object-contain w-[220px] max-w-full"
            />

            <h3 className="text-[rgba(252,219,87,1)] text-base font-bold leading-none tracking-[-0.64px] mt-[43px] max-md:mt-10">
              Follow us
            </h3>

            <div className="flex w-[167px] max-w-full items-stretch gap-3.5 mt-[26px]">
              <a 
                href="#" 
                className="flex items-center flex-1"
                onClick={(e) => { e.preventDefault(); navigate("/maintenance"); }}
              >
                <div className="self-stretch flex w-[31px] overflow-hidden my-auto">
                  <div className="flex min-h-[31px] w-[31px] flex-col overflow-hidden items-center justify-center">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/00f3918735164546ac5c37075df506a7/379acd23170822b590d4203a8e75e7396eadc742"
                      alt="Facebook"
                      className="aspect-[1] object-contain w-full"
                    />
                  </div>
                </div>
              </a>

              <a 
                href="#" 
                className="flex items-center flex-1"
                onClick={(e) => { e.preventDefault(); navigate("/maintenance"); }}
              >
                <div className="self-stretch flex w-[31px] overflow-hidden my-auto">
                  <div className="flex min-h-[31px] w-[31px] flex-col overflow-hidden items-center justify-center">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/00f3918735164546ac5c37075df506a7/29a6a51ba4a865c34fd7c74fd802eeccd4690f4e"
                      alt="Instagram"
                      className="aspect-[1] object-contain w-full"
                    />
                  </div>
                </div>
              </a>

              <a 
                href="#" 
                className="flex items-center flex-1"
                onClick={(e) => { e.preventDefault(); navigate("/maintenance"); }}
              >
                <div className="self-stretch flex w-[31px] overflow-hidden my-auto">
                  <div className="flex min-h-[31px] w-[31px] flex-col overflow-hidden items-center justify-center">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/00f3918735164546ac5c37075df506a7/e88a67129cc2306fa44001b7a3679b425faf7276"
                      alt="Twitter"
                      className="aspect-[1] object-contain w-full"
                    />
                  </div>
                </div>
              </a>

              <a 
                href="#" 
                className="flex items-center flex-1"
                onClick={(e) => { e.preventDefault(); navigate("/maintenance"); }}
              >
                <div className="self-stretch flex w-[31px] overflow-hidden my-auto">
                  <div className="flex min-h-[31px] w-[31px] flex-col overflow-hidden items-center justify-center">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/00f3918735164546ac5c37075df506a7/80b7d25f3f52d06f9c6ee579ffe4c5bd62f990b0"
                      alt="Email"
                      className="aspect-[1] object-contain w-full"
                    />
                  </div>
                </div>
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div className="flex min-w-60 flex-col items-stretch text-sm text-white font-normal tracking-[-0.56px] leading-loose flex-1 shrink basis-[76px] max-w-[1440px] pt-[5px] pb-[18px]">
            <h3 className="text-[rgba(252,219,87,1)] text-base font-bold leading-none tracking-[-0.64px]">
              Company
            </h3>

            <nav aria-label="Company links">
              <ul>
                {companyLinks.map((link, index) => (
                  <li
                    key={index}
                    className={
                      index === 0 ? "whitespace-nowrap mt-[23px]" : "mt-2"
                    }
                  >
                    <button 
                      onClick={() => handleNavigation(link)}
                      className="hover:underline text-white text-left bg-transparent border-none p-0 cursor-pointer"
                    >
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Explore Links */}
          <div className="flex min-w-60 flex-col items-stretch flex-1 shrink basis-14 max-w-[1440px] pr-5 py-[3px]">
            <h3 className="text-[rgba(252,219,87,1)] text-base font-bold leading-none tracking-[-0.64px]">
              Explore
            </h3>

            <nav
              aria-label="Explore links"
              className="min-h-[115px] text-sm text-white font-normal tracking-[-0.56px] leading-loose mt-[23px]"
            >
              <ul>
                {exploreLinks.map((link, index) => (
                  <li
                    key={index}
                    className={`${index === 0 ? "h-[22px]" : ""} w-full ${index > 0 ? "mt-2" : ""}`}
                  >
                    <button 
                      onClick={() => navigate("/maintenance")}
                      className="hover:underline text-white text-left bg-transparent border-none p-0 cursor-pointer"
                    >
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Useful Links */}
          <div className="flex min-w-60 flex-col items-stretch flex-1 shrink basis-14 max-w-[1440px] pr-5 py-[3px]">
            <h3 className="text-[rgba(252,219,87,1)] text-base font-bold leading-none tracking-[-0.64px]">
              Useful links
            </h3>

            <nav
              aria-label="Useful links"
              className="min-h-[115px] text-sm text-white font-normal tracking-[-0.56px] leading-loose mt-[26px]"
            >
              <ul>
                {usefulLinks.map((link, index) => (
                  <li
                    key={index}
                    className={`${index === 0 ? "h-[22px] whitespace-nowrap" : ""} w-full ${index > 0 ? "mt-2" : ""}`}
                  >
                    <button 
                      onClick={() => navigate("/maintenance")}
                      className="hover:underline text-white text-left bg-transparent border-none p-0 cursor-pointer"
                    >
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex w-full items-stretch gap-5 text-xs text-white font-normal tracking-[-0.48px] flex-wrap justify-between mt-[27px] max-md:max-w-full">
          <div className="my-auto">Copyright ©2025 Snappies</div>

          <div className="flex min-h-[19px] gap-[33px] text-right flex-wrap max-md:max-w-full">
            <button 
              onClick={() => navigate("/maintenance")}
              className="whitespace-nowrap hover:underline text-white bg-transparent border-none p-0 cursor-pointer"
            >
              Contact
            </button>
            <button 
              onClick={() => navigate("/maintenance")}
              className="hover:underline text-white bg-transparent border-none p-0 cursor-pointer"
            >
              Terms of use
            </button>
            <button 
              onClick={() => navigate("/maintenance")}
              className="hover:underline text-white bg-transparent border-none p-0 cursor-pointer"
            >
              Support
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
