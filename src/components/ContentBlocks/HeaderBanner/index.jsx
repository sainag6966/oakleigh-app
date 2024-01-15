import Image from 'next/image'
import headerBanner from '../../../../public/Images/headerBanner.svg'

function HeaderBanner({ trayData }) {
  const bannerImg = trayData?.hb_background_d_image
  const title = trayData?.hb_title
  const buttonTitle = trayData?.hb_button_title
  return (
    <div className="relative h-[578px] w-full lg:h-[520px]">
      <Image
        src={bannerImg}
        alt="headerBanner"
        layout="fill"
        objectFit="cover"
        quality={100}
        style={{ objectPosition: 'center' }}
      />
      <div className="absolute top-[60px] flex w-full flex-col gap-6 px-9 text-display-13 text-textPrimary md:px-16 lg:top-[196px] xl:min-w-[1000px] xl:max-w-[740px] xl:px-[100px] dxl:max-w-[1000px] dxl:gap-10 dxl:px-[144px] dxl:text-display-15">
        <div className="max-w-[420px] xl:max-w-[740px] dxl:max-w-[980px]">
          <p>{title}</p>
        </div>
        <div className="relative flex h-[53px] w-[215px] xl:w-[263px]">
          <div className="absolute bottom-0 h-[50px] w-[212px] border-[0.5px] border-textPrimary xl:w-[260px]"></div>
          <div className="absolute right-0 h-[50px] w-[212px] border-[0.5px] border-textPrimary xl:w-[260px]"></div>
          <div className="relative flex w-full items-center justify-center font-sans text-display-4 xl:text-display-17">
            {buttonTitle}
          </div>
        </div>
      </div>
    </div>
  )
}
export default HeaderBanner
