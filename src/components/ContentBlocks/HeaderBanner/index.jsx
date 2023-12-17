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
      <div className="dxl:max-w-[900px] dxl:gap-10 dxl:px-[144px] absolute top-[80px] flex w-full flex-col gap-9 px-9 text-display-13 text-textPrimary md:px-16 lg:top-[196px] xl:max-w-[740px] xl:px-[100px] xl:text-display-15">
        <div className="dxl:max-w-[980px] max-w-[420px] xl:max-w-[740px]">
          <p>{title}</p>
        </div>
        <div className="relative flex h-12 max-w-[200px] items-center justify-center border-[1px] border-white lg:max-w-[248px]">
          <button className="absolute right-1 top-1 flex h-full w-full items-center justify-center border-[1px] font-sans text-display-4 lg:text-display-17">
            {buttonTitle}
          </button>
        </div>
      </div>
    </div>
  )
}
export default HeaderBanner
