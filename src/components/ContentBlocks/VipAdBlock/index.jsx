import SimpleSlider from '@/reuseComps/Slider'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Image from 'next/image'
import { useRef } from 'react'
import { useMediaQuery } from 'react-responsive'

function VipAdBlock() {
  const vipIcon = '/Images/Sample/vipBlock1.svg'
  const sliderRef = useRef(null)
  const isDesktop = useMediaQuery({ query: '(min-width:900px)' })
  const slidesToShow = 2
  const navButtons = false

  const settings = {
    dots: isDesktop ? false : true,
    infinite: true,
    speed: 500,
    slidesToShow: isDesktop ? slidesToShow : 1,
    slidesToScroll: 1,
  }
  const trayData = [
    {
      url: '/Images/Sample/insight1.svg',
      title: 'Rolex 16523 ‘Zenith’ Daytona',
      description: 'Oyster, 40 mm, Oystersteel and yellow gold',
      buttonTitle: '',
      price: '',
    },
    {
      url: '/Images/Sample/insight2.svg',
      title: 'Zenith Defy EL Primero 21',
      description: 'Oyster, 40 mm, Oystersteel and yellow gold',
      buttonTitle: '',
      price: '',
    },
  ]
  return (
    <div className="flex h-auto w-full flex-col justify-between gap-6 px-[35px] pt-[60px] lg:flex-row lg:pt-[100px] xl:px-20 txl:px-[140px] ">
      <div className="flex flex-col justify-between gap-[30px] lg:w-[60%]">
        <div className="flex h-auto w-full flex-col items-center justify-between gap-[15px] lg:flex-row">
          <span className="text-display-12 dxl:text-display-14">
            Watches Coming Soon
          </span>
          <u>
            <span className="font-sans text-display-4 dxl:text-display-17">
              View All Coming Soon
            </span>
          </u>
        </div>
        <div className="flex flex-wrap justify-between gap-6 lg:flex-nowrap">
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
                    <div className="relative flex h-[428px] w-full flex-col items-center justify-between dxl:h-[526px]">
                      <Image
                        src={e.url}
                        layout="fill"
                        alt="AdBlock"
                        objectFit="cover"
                        quality={100}
                        style={{ objectPosition: 'center' }}
                      />
                    </div>
                    <div className="mt-[24px] flex w-full flex-col items-center justify-center gap-[12px]">
                      <p className="w-full text-center text-display-11  lg:line-clamp-1 dxl:text-display-12">
                        {e.title}
                      </p>
                      {e.description && (
                        <p className="w-full text-center font-sans text-display-3 text-footerBg lg:text-display-6">
                          {e.description}
                        </p>
                      )}
                      {e.price && (
                        <p className="w-full text-center font-sans">
                          £{e.price}
                        </p>
                      )}
                      {e.buttonTitle && (
                        <div className="relative flex h-12 w-[142px] items-center justify-center border-[1px] border-black">
                          <button
                            type="submit"
                            className="absolute right-[2px] top-[2px] h-full w-full border-[1px] border-black font-sans text-[14px]"
                          >
                            {e.buttonTitle}
                          </button>
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
                <img
                  className="h-4 w-4"
                  src="/Images/leftArrow.svg"
                  alt="prev"
                />
              </button>
            )}
            {isDesktop && navButtons && (
              <button
                className="absolute right-2 top-1/2 flex h-10 w-10 -translate-y-[310%] transform items-center justify-center rounded-[50%] border-[1px] border-black p-2 text-black"
                onClick={() => sliderRef.current.slickNext()}
              >
                <img
                  className="h-4 w-4"
                  src="/Images/rightArrow.svg"
                  alt="next"
                />
              </button>
            )}
          </div>
        </div>
      </div>
      <div className="relative mt-[60px] flex w-full flex-col items-center justify-around gap-6 bg-uspBlockBackground px-[44px] py-[60px] lg:mt-[0px] lg:w-[35%] lg:p-5 xl:w-[30%] xl:p-[40px] dxl:p-[60px]">
        <img src={vipIcon} alt="vipIcon"></img>
        <p className="text-center text-display-13 dxl:text-display-15">
          JOIN THE VIP CLUB
        </p>
        <p className="text-center text-display-6">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua.
        </p>
        <div className="relative flex h-[56px] w-[198px] xl:h-[53px] xl:w-[263px]">
          <div className="absolute bottom-0 h-[53px] w-[195px] border-[0.5px] border-textSecondary xl:h-[50px] xl:w-[260px]"></div>
          <div className="absolute right-0 h-[53px] w-[195px] border-[0.5px] border-textSecondary xl:h-[50px] xl:w-[260px]"></div>
          <div className="relative flex w-full items-center justify-center font-sans text-display-4 xl:text-display-17">
            Join Now For Free
          </div>
        </div>
        <u>
          <span className="font-sans text-display-4">Find Out More</span>
        </u>
        <div className="absolute left-[-1px] top-[-1px] h-5 w-5 bg-textPrimary" />
        <div className="absolute right-[-1px] top-[-1px] h-5 w-5 bg-textPrimary" />
        <div className="absolute bottom-[-1px] left-[-1px] h-5 w-5 bg-textPrimary" />
        <div className="absolute bottom-[-1px] right-[-1px] h-5 w-5 bg-textPrimary" />
      </div>
    </div>
  )
}
export default VipAdBlock
