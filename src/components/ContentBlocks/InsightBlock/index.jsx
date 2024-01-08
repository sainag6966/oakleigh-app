import Image from 'next/image'
import SimpleSlider from '@/reuseComps/Slider'
import { useMediaQuery } from 'react-responsive'

function InsightBlock({ trayData }) {
  const isDesktop = useMediaQuery({ query: '(min-width:900px)' })
  const data = [
    {
      url: '/Images/Sample/insight1.svg',
      title: 'A Look At The Breitling Navitimer 806 A Unique Timeless Piece',
      buttonTitle: 'Read This',
      description: '',
      price: '',
    },
    {
      url: '/Images/Sample/insight2.svg',
      title: 'What Watch Face Diameter Would Best Fit My Wrist?',
      buttonTitle: 'Read This',
      description: '',
      price: '',
    },
    {
      url: '/Images/Sample/insight3.svg',
      title: 'Top 10 Watch Care Tips',
      buttonTitle: 'Read This',
      description: '',
      price: '',
    },
    {
      url: '/Images/Sample/insight4.svg',
      title: 'IS The Age Of Your Watch Important When You Sell?',
      buttonTitle: 'Read This',
      description: '',
      price: '',
    },
  ]
  return (
    <div className="flex h-auto w-full flex-col justify-between gap-[30px] px-9 pt-[60px] text-footerBg lg:px-20 lg:pt-[120px] dxl:gap-[50px] dxl:px-[140px]">
      <div className="flex h-auto w-full flex-col items-center justify-between lg:flex-row">
        <span className="text-display-12 dxl:text-display-14">
          Our Latest Insights
        </span>
        <u>
          <span className="font-sans text-display-4 dxl:text-display-17">
            View All Insights
          </span>
        </u>
      </div>
      {!isDesktop ? (
        <SimpleSlider trayData={data} navButtons={false} slidesToShow={4} />
      ) : (
        <div className="flex w-full items-start justify-between xl:gap-[24px] dxl:gap-[30px]">
          {data?.map((e, index) => {
            return (
              <div
                key={index}
                className="flex h-auto w-full flex-col justify-between self-stretch"
              >
                <div className="flex h-auto w-full flex-col">
                  <div className="relative flex h-[420px] w-auto dxl:h-[526px]">
                    <Image
                      src={e.url}
                      layout="fill"
                      alt="AdBlock"
                      objectFit="cover"
                      quality={100}
                      style={{ objectPosition: 'center' }}
                    />
                  </div>
                  <div className="flex w-full flex-col items-start justify-center gap-[10px] lg:items-start dxl:gap-[30px]">
                    <p className="mt-7 w-full text-center text-display-11 lg:text-start  lg:text-display-17 dxl:text-display-12">
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
                    {/* {e.buttonTitle && (
                    <div className="relative flex h-[49px] w-[143px] xl:h-[53px] xl:w-[175px]">
                      <div className="absolute bottom-0 h-[46px] w-[140px] border-[0.5px] border-textSecondary xl:h-[50px] xl:w-[172px]"></div>
                      <div className="absolute right-0 h-[46px] w-[140px] border-[0.5px] border-textSecondary xl:h-[50px] xl:w-[172px]"></div>
                      <div className="relative flex w-full items-center justify-center font-sans text-display-4 xl:text-display-17">
                        {e.buttonTitle}
                      </div>
                    </div>
                  )} */}
                  </div>
                </div>
                {e.buttonTitle && (
                  <div className="relative mt-7 flex h-[49px] w-[143px] xl:h-[53px] xl:w-[175px]">
                    <div className="absolute bottom-0 h-[46px] w-[140px] border-[0.5px] border-textSecondary xl:h-[50px] xl:w-[172px]"></div>
                    <div className="absolute right-0 h-[46px] w-[140px] border-[0.5px] border-textSecondary xl:h-[50px] xl:w-[172px]"></div>
                    <div className="relative flex w-full items-center justify-center font-sans text-display-4 xl:text-display-17">
                      {e.buttonTitle}
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
export default InsightBlock
