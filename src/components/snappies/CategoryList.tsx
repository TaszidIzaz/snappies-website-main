
import React from "react";
import { useNavigate } from "react-router-dom";

interface CategoryItem {
  id: number;
  name: string;
  image: string;
  twoLines?: boolean;
}

const CategoryList: React.FC = () => {
  const navigate = useNavigate();
  
  const categories: CategoryItem[] = [
    {
      id: 1,
      name: "Chocolates",
      image:
        "https://cdn.builder.io/api/v1/image/assets/00f3918735164546ac5c37075df506a7/f784e893eda5f3cfca0d7026a3b21a021f1f8e6b",
    },
    {
      id: 2,
      name: "Instant Noodles",
      image:
        "https://cdn.builder.io/api/v1/image/assets/00f3918735164546ac5c37075df506a7/da60c7cba67595fe4112954cbe86814b045ecb50",
      twoLines: true,
    },
    {
      id: 3,
      name: "Sauces & Spreads",
      image:
        "https://cdn.builder.io/api/v1/image/assets/00f3918735164546ac5c37075df506a7/07f227931e6a1e58de4465f008c85fbc60694eb6",
      twoLines: true,
    },
    {
      id: 4,
      name: "Coffee",
      image:
        "https://cdn.builder.io/api/v1/image/assets/00f3918735164546ac5c37075df506a7/6d017749546cd2f5b8f42a33ad485a25024323bc",
    },
    {
      id: 5,
      name: "Soft Drinks",
      image:
        "https://cdn.builder.io/api/v1/image/assets/00f3918735164546ac5c37075df506a7/5917ff392516f42fe0b8ab58c622ebcb20856c64",
    },
    {
      id: 6,
      name: "Juice & Tea",
      image:
        "https://cdn.builder.io/api/v1/image/assets/00f3918735164546ac5c37075df506a7/3e98fe7d825c54b87a83872f0af8bdbcf0902739",
    },
    {
      id: 7,
      name: "Snacks",
      image:
        "https://cdn.builder.io/api/v1/image/assets/00f3918735164546ac5c37075df506a7/27664a3631d432f2fdb46bf284e2f291aac59987",
    },
    {
      id: 8,
      name: "Gummy & Mints",
      image:
        "https://cdn.builder.io/api/v1/image/assets/00f3918735164546ac5c37075df506a7/34b6b6a3abae260644b392daa69ccc630602bbf2",
      twoLines: true,
    },
    {
      id: 9,
      name: "Tong Dokan",
      image:
        "https://cdn.builder.io/api/v1/image/assets/00f3918735164546ac5c37075df506a7/c2b3021332159b86dcac086d6cbd103423a3b446",
    },
  ];

  const handleCategoryClick = (e: React.MouseEvent, categoryId: number) => {
    e.preventDefault();
    navigate("/maintenance");
  };

  return (
    <div className="flex w-full justify-center">
      <div className="w-full max-w-[1520px]">
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-10 gap-4 mx-auto">
          {categories.map((category) => (
            <a
              key={category.id}
              href="#"
              onClick={(e) => handleCategoryClick(e, category.id)}
              className="bg-white border flex-shrink-0 overflow-hidden text-[15px] text-black font-medium text-center leading-[1.3] w-full rounded-[5px] border-[rgba(247,247,247,1)] border-solid hover:shadow-md transition-shadow"
            >
              <img
                src={category.image}
                alt={category.name}
                className="aspect-[1.33] object-contain w-full rounded-t-[5px]"
              />
              <div
                className={`${
                  category.twoLines
                    ? "w-full gap-2.5 overflow-hidden px-0.5 py-1.5 leading-5"
                    : "w-full min-h-[52px] gap-2.5 overflow-hidden px-[7px] py-4"
                }`}
              >
                {category.name}
              </div>
            </a>
          ))}

          {/* Others Category with Special Styling */}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); navigate("/maintenance"); }}
            className="bg-white border flex-shrink-0 overflow-hidden w-full h-[152px] rounded-[5px] border-[rgba(247,247,247,1)] border-solid hover:shadow-md transition-shadow"
          >
            <div className="bg-[rgba(247,247,247,1)] flex flex-col overflow-hidden items-stretch justify-center px-[11px] py-[13px] rounded-t-[5px]">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/00f3918735164546ac5c37075df506a7/dacb5df5066dfa4ce0a57c238b6fda4ff455230f"
                alt="Others"
                className="aspect-[1.75] object-contain w-full"
              />
            </div>
            <div className="self-stretch w-full min-h-[52px] gap-2.5 overflow-hidden text-[15px] text-black font-medium whitespace-nowrap text-center leading-[1.3] px-[7px] py-4">
              Others
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CategoryList;
