import Image from 'next/image'
import headerBanner from '../../../../public/Images/headerBanner.svg'

function HeaderBanner({ trayData }) {
  const bannerImg = trayData.hb_background_d_image
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
      <div className="dxl:max-w-[700px] dxl:text-display-15 absolute left-[8%] top-[80px] flex max-w-[440px] flex-col gap-4 text-display-13 text-textPrimary lg:top-1/2 lg:-translate-y-1/2">
        <p>THE HOME OF PRE-OWNED LUXURY WATCHES</p>
        <div className="relative flex h-12 max-w-[200px] items-center justify-center border-[1px] border-white lg:max-w-[248px]">
          <button className="absolute right-1 top-1 flex h-full w-full items-center justify-center border-[1px] text-[18px]">
            Discover Our Range
          </button>
        </div>
      </div>
    </div>
  )
}
export default HeaderBanner
