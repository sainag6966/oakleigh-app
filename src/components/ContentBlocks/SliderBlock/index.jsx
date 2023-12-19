import React, { useRef } from 'react'
import SimpleSlider from '@/reuseComps/Slider'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Image from 'next/image'
import { useMediaQuery } from 'react-responsive'

function SliderBlock() {
  const sliderRef = useRef(null)
  const isDesktop = useMediaQuery({ query: '(min-width:900px)' })
  const slidesToShow = 3
  const navButtons = true

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
  const trayData = [
    {
      url: '/Images/Sample/insight1.svg',
      title: 'Rolex 16523 ‘Zenith’ Daytona',
      buttonTitle: 'View Watch',
      description: 'Oyster, 40 mm, Oystersteel and yellow gold',
      price: '12000',
    },
    {
      url: '/Images/Sample/insight2.svg',
      title: 'Zenith Defy EL Primero 21',
      buttonTitle: 'View Watch',
      description: 'Oyster, 40 mm, Oystersteel and yellow gold',
      price: '13000',
    },
    {
      url: '/Images/Sample/insight3.svg',
      title: 'Rolex 226570 Explorer II',
      buttonTitle: 'View Watch',
      description: 'Oyster, 40 mm, Oystersteel and yellow gold',
      price: '14000',
    },
    {
      url: '/Images/Sample/insight4.svg',
      title: 'Rolex 226570 Explorer II',
      buttonTitle: 'View Watch',
      description: 'Oyster, 40 mm, Oystersteel and yellow gold',
      price: '15000',
    },
  ]
  return (
    <div className="flex flex-col items-center justify-center gap-[30px] px-[35px] pt-[60px] text-footerBg lg:px-20 lg:pt-[100px] dxl:gap-10 dxl:px-[140px] dxl:pt-[120px]">
      <div className="flex w-full flex-col items-center justify-center gap-[10px] lg:flex-row lg:justify-between">
        <p className="text-display-12 dxl:text-display-14">
          Currently Available
        </p>
        <u>
          <p className="font-sans text-display-4 dxl:text-display-17">
            View All
          </p>
        </u>
      </div>
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
                className="flex h-auto w-full flex-col px-0 lg:px-3 dxl:px-6"
              >
                <div className="relative flex h-[428px] w-full flex-col items-center justify-between dxl:h-[544px]">
                  <Image
                    src={e.url}
                    layout="fill"
                    alt="AdBlock"
                    objectFit="cover"
                    quality={100}
                    style={{ objectPosition: 'center' }}
                  />
                </div>
                <div className="mt-[24px] flex w-full flex-col items-center justify-center gap-[12px] dxl:mt-[30px] dxl:gap-[15px]">
                  <p className="w-full text-center text-display-11 lg:line-clamp-1 lg:text-display-17 dxl:text-display-12">
                    {e.title}
                  </p>
                  {e.description && (
                    <p className="w-full text-center font-sans text-display-3 text-footerBg dxl:text-display-6">
                      {e.description}
                    </p>
                  )}
                  {e.price && (
                    <p className="w-full text-center font-sans text-[16px] font-semibold dxl:text-[17px]">
                      £{e.price}
                    </p>
                  )}
                  {e.buttonTitle && (
                    <div className="relative flex h-[42px] w-[138px] xl:h-[53px] xl:w-[174px]">
                      <div className="absolute bottom-0 h-[39px] w-[135px] border-[0.5px] border-textSecondary xl:h-[50px] xl:w-[171px]"></div>
                      <div className="absolute right-0 h-[39px] w-[135px] border-[0.5px] border-textSecondary xl:h-[50px] xl:w-[171px]"></div>
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
    </div>
  )
}
export default SliderBlock
