
import React from "react";

interface SearchTagsProps {
  title: string;
  tags: string[];
  backgroundColor: string;
  className?: string;
}

const SearchTags: React.FC<SearchTagsProps> = ({
  title,
  tags,
  backgroundColor,
  className = "",
}) => {
  return (
    <div className={`w-full text-black ${className}`}>
      <h2 className="text-[22px] md:text-[28px] font-semibold leading-none tracking-[-0.56px]">
        {title}
      </h2>

      <div className="flex w-full items-center gap-3 md:gap-5 text-base md:text-lg font-normal text-center tracking-[-0.4px] flex-wrap mt-6 md:mt-10">
        {tags.map((tag, index) => (
          <React.Fragment key={index}>
            <a
              href={`/search?q=${encodeURIComponent(tag)}`}
              className={`${backgroundColor} min-h-[40px] md:min-h-[51px] my-auto px-[9px] py-[10px] md:py-[15px] rounded-[10px] hover:shadow-md transition-shadow text-sm md:text-base`}
            >
              {tag}
            </a>

            {/* Spacer image (except after the last tag) */}
            {index < tags.length - 1 && (
              <img
                src={
                  backgroundColor === "bg-[rgba(255,254,250,1)]"
                    ? "https://cdn.builder.io/api/v1/image/assets/00f3918735164546ac5c37075df506a7/3cb68eb231a64b41110beec6fe80a647519f6a8e"
                    : "https://cdn.builder.io/api/v1/image/assets/00f3918735164546ac5c37075df506a7/5cf00b5ed558cdecbcf2ed691aedd298f60d4af0"
                }
                alt=""
                className="object-contain w-0 self-stretch shrink-0 my-auto"
              />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default SearchTags;
