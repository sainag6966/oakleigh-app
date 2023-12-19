import React, { useRef } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Image from 'next/image'
import styles from '../../../src/styles/slider.module.css'
import { useMediaQuery } from 'react-responsive'

const SimpleSlider = ({ trayData, navButtons, slidesToShow }) => {
  const sliderRef = useRef(null)
  const isDesktop = useMediaQuery({ query: '(min-width:900px)' })

  const settings = {
    dots: isDesktop ? false : true,
    infinite: true,
    speed: 500,
    slidesToShow: isDesktop ? slidesToShow : 1,
    slidesToScroll: 1,
    appendDots: (dots) => (
      <div
        style={{
          position: 'relative',
          display: 'block',
          marginTop: '20px',
          top: '0px',
        }}
      >
        {dots.map((dot, index) => (
          <span key={index} className="custom-dot">
            {dot}
          </span>
        ))}
      </div>
    ),
  }

  return (
    <div
      className={`relative mx-auto w-full px-0 ${
        navButtons ? 'lg:px-16' : 'lg:px-0'
      }`}
    >
      <Slider ref={sliderRef} {...settings}>
        {trayData.map((e, index) => {
          return (
            <div
              key={index}
              className="flex h-auto w-full flex-col px-0 lg:px-1"
            >
              <div className="relative flex h-[485px] w-full flex-col items-center justify-between dxl:h-[526px]">
                <Image
                  src={e.url}
                  layout="fill"
                  alt="AdBlock"
                  objectFit="cover"
                  quality={100}
                  style={{ objectPosition: 'center' }}
                />
              </div>
              <div className="mt-[30px] flex w-full flex-col items-center justify-center gap-[30px] lg:items-start">
                <p className="w-full text-center text-display-11 lg:line-clamp-2 lg:min-h-[70px] lg:text-start  lg:text-display-17 xl:min-h-[80px] dxl:text-display-12">
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
                  <div className="relative flex h-[49px] w-[143px] xl:h-[53px] xl:w-[175px]">
                    <div className="absolute bottom-0 h-[46px] w-[140px] border-[0.5px] border-textSecondary xl:h-[50px] xl:w-[172px]"></div>
                    <div className="absolute right-0 h-[46px] w-[140px] border-[0.5px] border-textSecondary xl:h-[50px] xl:w-[172px]"></div>
                    <div className="relative flex w-full items-center justify-center font-sans text-display-4 xl:text-display-17">
                      {e.buttonTitle}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )
        })}
      </Slider>
      {isDesktop && navButtons && (
        <button
          className="absolute left-2 top-1/2 flex h-10 w-10 -translate-y-[310%] transform items-center justify-center rounded-[50%] border-[1px] border-black p-2 text-black"
          onClick={() => sliderRef.current.slickPrev()}
        >
          <img className="h-4 w-4" src="/Images/leftArrow.svg" alt="prev" />
        </button>
      )}
      {isDesktop && navButtons && (
        <button
          className="absolute right-2 top-1/2 flex h-10 w-10 -translate-y-[310%] transform items-center justify-center rounded-[50%] border-[1px] border-black p-2 text-black"
          onClick={() => sliderRef.current.slickNext()}
        >
          <img className="h-4 w-4" src="/Images/rightArrow.svg" alt="next" />
        </button>
      )}
    </div>
  )
}

export default SimpleSlider
