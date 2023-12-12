import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";

const SimpleSlider = () => {
  // Create a ref to hold the slider reference
  const sliderRef = useRef(null);
  const isDesktop = useMediaQuery({ query: '(min-width:900px)' })

  const data = [
    {
      url: "/Images/Sample/insight1.svg",
      title: "A Look At The Breitling Navitimer 806 A Unique Timeless Piece",
      buttonTitle: "Read This",
    },
    {
      url: "/Images/Sample/insight2.svg",
      title: "What Watch Face Diameter Would Best Fit My Wrist?",
      buttonTitle: "Read This",
    },
    {
      url: "/Images/Sample/insight3.svg",
      title: "Top 10 Watch Care Tips",
      buttonTitle: "Read This",
    },
    {
      url: "/Images/Sample/insight4.svg",
      title: "IS The Age Of Your Watch Important When You Sell?",
      buttonTitle: "Read This",
    },
  ];

  const settings = {
    dots: isDesktop ? false: true,
    infinite: true,
    speed: 500,
    slidesToShow: isDesktop ? 3 : 1,
    slidesToScroll: 1,
  };

  return (
    <div className="relative w-full mx-auto px-0 lg:px-16">
      <Slider ref={sliderRef} {...settings}>
      {data.map((e, index) => {
          return (
            <div key={index} className="flex flex-col w-full h-auto px-3">
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
              <div className="w-full flex flex-col justify-center items-center">
              <p className="w-full h-16 lg:h-14 text-center">{e.title}</p>
              <div className="w-24 h-8 relative border-[1px] flex justify-center items-center border-black">
                <button
                  type="submit"
                  className="absolute border-[1px] border-black w-full h-full top-[1px] right-[1px]"
                >
                  {e.buttonTitle}
                </button>
              </div>
              </div>
            </div>
          );
        })}
      </Slider>
      {isDesktop && <button
        className="w-10 h-10 absolute flex items-center justify-center top-1/2 left-2 transform -translate-y-1/2 text-black border-black border-[1px] p-2 rounded-[50%]"
        onClick={() => sliderRef.current.slickPrev()}
      >
        <img className="w-4 h-4" src="/Images/leftArrow.svg" alt='prev'/>
      </button>}
      {isDesktop && <button
        className="w-10 h-10 absolute flex items-center justify-center top-1/2 right-2 transform -translate-y-1/2 text-black border-black border-[1px] p-2 rounded-[50%]"
        onClick={() => sliderRef.current.slickNext()}
      >
        <img className="w-4 h-4" src="/Images/rightArrow.svg" alt='next'/>
      </button>}
    </div>
  );
};

export default SimpleSlider;
