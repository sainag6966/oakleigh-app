import Image from 'next/image'

function BrandDropdown() {
  const ImageSrc = '/Images/Sample/twoAdBlock1.svg'
  const title1 = 'Lorem Ipsum'
  const title2 = 'Shop Now'
  const brandList = [
    'Breitling',
    'Bremont',
    'Cartier',
    'Heuer',
    'Rolex',
    'Omega',
    'Tagheuer',
    'Longines',
    'Tudor',
    'Panera',
    'Oris',
    'something',
  ]
  return (
    <div className="absolute z-[1] h-full w-full border-t-[1px] border-colorBlack bg-colorBlack bg-opacity-75">
      <div className="absolute top-0 z-[2] flex h-auto w-full items-start justify-between gap-[30px] bg-textPrimary  px-20 py-12 text-footerBg dxl:px-[140px] dxl:py-[80px]">
        <div className="relative z-[2] flex h-[180px] flex-col flex-wrap items-start justify-start gap-[16px] xl:h-[240px] dxl:h-[300px] dxl:gap-[30px]">
          {brandList.map((e, index) => {
            return (
              <p
                key={index}
                className="xl:text-display-10 w-[120px] xl:w-[172px] dxl:w-[248px]  dxl:text-display-12"
              >
                {e}
              </p>
            )
          })}
        </div>
        <div className="relative z-[2] h-[180px] w-[264px] shrink-[5] bg-gradient-to-t from-black to-transparent xl:h-[280px] xl:w-[400px] dxl:h-[344px] dxl:w-[526px]">
          <Image
            src={ImageSrc}
            layout="fill"
            alt="AdBlock"
            objectFit="cover"
            quality={100}
            style={{ objectPosition: 'center' }}
            className="mix-blend-overlay"
          />
          <div className="absolute bottom-3 flex w-full flex-col items-center text-textPrimary xl:bottom-6 xl:gap-2">
            <span className="text-display-17 xl:text-display-11 dxl:text-display-13">
              {title1}
            </span>
            <u>
              <span className="font-sans text-display-1 xl:text-display-4 dxl:text-display-17">
                {title2}
              </span>
            </u>
          </div>
        </div>
      </div>
    </div>
  )
}
export default BrandDropdown
