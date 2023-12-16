import Image from 'next/image'
function AboutBlock({ trayData }) {
  const imgsrc = '/Images/Sample/about1.svg'
  const imageSrc = trayData?.ab_image
  const title = trayData?.ab_title
  const desc = trayData?.ab_body_text
  const buttonTitle = trayData?.ab_button_title
  return (
    <div className="flex h-auto w-full flex-wrap justify-between gap-6 pt-[60px] lg:pt-[100px]">
      <div className="dxl:h-[1080px] relative flex h-[956px] w-full justify-center lg:justify-start lg:pl-20">
        <Image
          src={imageSrc}
          layout="fill"
          alt="AdBlock"
          objectFit="cover"
          quality={100}
          style={{ objectPosition: 'center' }}
        />
        <div className="dxl:w-[944px] absolute top-[72px] h-[596px] w-[90%] gap-8 bg-black p-9 text-textPrimary sm:w-[60%] lg:top-[120px] lg:h-[400px] lg:w-[720px] xl:h-[524px] xl:w-[800px]">
          <div className="flex h-full flex-col items-start justify-around border-[1px] border-copyRightBorder p-7">
            <p className="text-display-13 xl:text-display-15">{title}</p>
            <p className="text-display-3 xl:text-display-6">{desc}</p>
            <div className="relative flex h-12 w-36 max-w-[150px] items-center justify-center border-[1px] border-white">
              <button
                type="submit"
                className="absolute right-1 top-1 h-full w-full border-[1px]"
              >
                {buttonTitle}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default AboutBlock
