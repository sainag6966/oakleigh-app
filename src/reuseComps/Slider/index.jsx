import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";

const SimpleSlider = ({ trayData, navButtons, slidesToShow }) => {
  const sliderRef = useRef(null);
  const isDesktop = useMediaQuery({ query: "(min-width:900px)" });

  const settings = {
    dots: isDesktop ? false : true,
    infinite: true,
    speed: 500,
    slidesToShow: isDesktop ? slidesToShow : 1,
    slidesToScroll: 1,
  };

  return (
    <div
      className={`relative w-full mx-auto px-0 ${
        navButtons ? "lg:px-16" : "lg:px-0"
      }`}
    >
      <Slider ref={sliderRef} {...settings}>
        {trayData.map((e, index) => {
          return (
            <div
              key={index}
              className="flex flex-col w-full h-auto px-0 lg:px-1"
            >
              <div className="relative w-full flex flex-col justify-between items-center h-[400px] 2xl:h-[526px]">
                <Image
                  src={e.url}
                  layout="fill"
                  alt="AdBlock"
                  objectFit="cover"
                  quality={100}
                  style={{ objectPosition: "center" }}
                />
              </div>
              <div className="w-full flex flex-col justify-center items-center gap-2 mt-[20px]">
                <p className="w-full text-center text-display-17 line-clamp-1">
                  {e.title}
                </p>
                {e.description && (
                  <p className="w-full text-center font-sans text-display-3 text-footerBg">
                    {e.description}
                  </p>
                )}
                {e.price && (
                  <p className="w-full text-center font-sans">£{e.price}</p>
                )}
                {e.buttonTitle && (
                  <div className="w-24 h-8 relative border-[1px] flex justify-center items-center border-black">
                    <button
                      type="submit"
                      className="absolute border-[1px] border-black w-full h-full top-[1px] right-[1px]"
                    >
                      {e.buttonTitle}
                    </button>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </Slider>
      {isDesktop && navButtons && (
        <button
          className="w-10 h-10 absolute flex items-center justify-center top-1/2 left-2 transform -translate-y-[310%] text-black border-black border-[1px] p-2 rounded-[50%]"
          onClick={() => sliderRef.current.slickPrev()}
        >
          <img className="w-4 h-4" src="/Images/leftArrow.svg" alt="prev" />
        </button>
      )}
      {isDesktop && navButtons && (
        <button
          className="w-10 h-10 absolute flex items-center justify-center top-1/2 right-2 transform -translate-y-[310%] text-black border-black border-[1px] p-2 rounded-[50%]"
          onClick={() => sliderRef.current.slickNext()}
        >
          <img className="w-4 h-4" src="/Images/rightArrow.svg" alt="next" />
        </button>
      )}
    </div>
  );
};

export default SimpleSlider;
