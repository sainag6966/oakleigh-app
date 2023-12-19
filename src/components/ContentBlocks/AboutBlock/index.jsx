import Image from 'next/image'
function AboutBlock({ trayData }) {
  const imgsrc = '/Images/Sample/about1.svg'
  const imageSrc = trayData?.ab_image
  const title = trayData?.ab_title
  const desc = trayData?.ab_body_text
  const buttonTitle = trayData?.ab_button_title
  return (
    <div className="flex h-auto w-full flex-wrap justify-between gap-6 pt-[60px] lg:pt-[120px]">
      <div className="relative flex h-[956px] w-full justify-center lg:justify-start lg:pl-20 dxl:h-[1080px] dxl:pl-[140px]">
        <Image
          src={imageSrc}
          layout="fill"
          alt="AdBlock"
          objectFit="cover"
          quality={100}
          style={{ objectPosition: 'center' }}
        />
        <div className="absolute top-[72px] h-[596px] w-[90%] gap-8 bg-black p-4 text-textPrimary sm:w-[60%] lg:top-[120px] lg:h-[400px] lg:w-[720px] xl:h-[524px] xl:w-[800px] xl:p-9 dxl:w-[944px]">
          <div className="flex h-full flex-col items-start justify-around border-[1px] border-copyRightBorder p-7">
            <p className="text-display-13 xl:text-display-15">{title}</p>
            <p className="font-sans text-display-3 xl:text-display-6">{desc}</p>
            <div className="relative flex h-[42px] w-[154px] xl:h-[53px] xl:w-[199px]">
              <div className="absolute bottom-0 h-[39px] w-[151px] border-[0.5px] border-textPrimary xl:h-[50px] xl:w-[196px]"></div>
              <div className="absolute right-0 h-[39px] w-[151px] border-[0.5px] border-textPrimary xl:h-[50px] xl:w-[196px]"></div>
              <div className="relative flex w-full items-center justify-center font-sans text-display-4 xl:text-display-17">
                {buttonTitle}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default AboutBlock
