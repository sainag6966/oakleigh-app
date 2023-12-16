import Image from 'next/image'
function ImageTextOnLeft() {
  const imgSrc = '/Images/Sample/imageTextBlock.svg'
  return (
    <div className="dxl:px-[140px] flex h-auto w-full flex-wrap justify-between gap-6 px-9 pt-[60px] lg:flex-nowrap lg:px-20 lg:pt-[100px]">
      <div className="flex h-[508px] w-[50%] flex-col items-start justify-center gap-[30px] pr-40 lg:h-[526px]">
        <p className="text-display-15">WHY OAKLEIGH LOVES THIS BRAND</p>
        <p className="text-display-6">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit
        </p>
        <div className="relative flex h-8 w-24 items-center justify-center border-[1px] border-black">
          <button
            type="submit"
            className="absolute right-[1px] top-[1px] h-full w-full border-[1px] border-black"
          >
            Shop Now
          </button>
        </div>
      </div>
      <div className="relative h-[508px] w-[50%] lg:h-[526px]">
        <Image
          src={imgSrc}
          layout="fill"
          alt="AdBlock"
          objectFit="cover"
          quality={100}
          style={{ objectPosition: 'center' }}
        />
      </div>
    </div>
  )
}
export default ImageTextOnLeft
