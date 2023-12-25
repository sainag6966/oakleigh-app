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
      <div className="absolute top-0 z-[2] flex h-auto w-full items-start justify-between gap-[30px] bg-textPrimary px-[140px] py-[80px] text-footerBg">
        <div className="relative z-[2] flex h-[300px] flex-col flex-wrap items-start justify-start gap-[30px]">
          {brandList.map((e, index) => {
            return (
              <p key={index} className="w-[248px] text-display-12">
                {e}
              </p>
            )
          })}
        </div>
        <div className="relative z-[2] h-[344px] w-[526px] shrink-[5] bg-gradient-to-t from-black via-transparent to-transparent">
          <Image
            src={ImageSrc}
            layout="fill"
            alt="AdBlock"
            objectFit="cover"
            quality={100}
            style={{ objectPosition: 'center' }}
            className="mix-blend-overlay"
          />
          <div className="absolute bottom-6 flex w-full flex-col items-center gap-2 text-textPrimary">
            <span className="text-display-11 dxl:text-display-13">
              {title1}
            </span>
            <u>
              <span className="font-sans text-display-4 dxl:text-display-17">
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
