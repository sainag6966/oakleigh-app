import Image from 'next/image'
import { useMediaQuery } from 'react-responsive'

function FooterTop({ isFooterVisible }) {
  const data = [
    '/Images/Sample/footer1.svg',
    '/Images/Sample/footer2.svg',
    '/Images/Sample/footer3.svg',
    '/Images/Sample/footer4.svg',
    '/Images/Sample/footer5.svg',
    '/Images/Sample/footer3.svg',
    '/Images/Sample/footer2.svg',
    '/Images/Sample/footer1.svg',
  ]
  const isDesktop = useMediaQuery({ query: '(min-width:900px)' })
  const isTablet = useMediaQuery({ query: '(min-width:600px)' })
  const num = isDesktop ? 5 : isTablet ? 4 : 3
  const row = 1

  return (
    isFooterVisible && (
      <div className="relative mt-[120px] grid h-[152px] w-full grid-flow-col grid-cols-3 grid-rows-1 sm:grid-cols-4 lg:grid-cols-8 dxl:h-[252px]">
        {data.map((e, index) => {
          return (
            <div
              key={index}
              className="relative h-[152px] w-auto dxl:h-[252px]"
            >
              <Image
                src={e}
                layout="fill"
                alt="AdBlock"
                objectFit="cover"
                quality={100}
                style={{ objectPosition: 'center' }}
              />
            </div>
          )
        })}
        <div className="absolute bottom-0 left-0 right-0 ml-auto mr-auto flex h-[50px] w-[248px] items-center justify-center bg-footerBg lg:w-[315px]">
          <p className="text-display-9 text-uspBlockBackground lg:text-display-11">
            @OAKLEIGH WATCHES
          </p>
        </div>
      </div>
    )
  )
}
export default FooterTop
