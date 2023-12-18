import Image from 'next/image'

function PromiseBlock({ trayData }) {
  const promiseIcon = trayData?.top_logo_image
  const promiseImg = trayData?.top_image
  const title = trayData?.top_title
  const bodyText = trayData?.top_body_text

  return (
    <div className="dxl:px-[140px] px-9">
      <div className="dxl:mt-[120px] mt-[60px] flex h-[896px] w-full items-center justify-center bg-footerBg p-5 lg:h-[696px]">
        <div className="dxl:gap-[144px] flex h-full w-full flex-col items-center justify-around gap-8 border-[1px] border-copyRightBorder p-[30px] lg:flex-row lg:gap-12 lg:p-20">
          <div className=" flex w-full flex-col items-start justify-between gap-6 lg:max-w-[50%] lg:justify-center">
            <img
              src={promiseIcon}
              alt="promise"
              className="dxl:w-[52px] dxl:h-[66px] h-[47px] w-[37px]"
            />
            <p className="dxl:text-display-15 text-display-13 text-textPrimary">
              {title}
            </p>
            <div className="dxl:text-display-6 font-sans text-display-3 text-textPrimary">
              {bodyText}
            </div>
          </div>
          <div className="flex h-full w-full items-center justify-center lg:w-1/2">
            <div className="dxl:h-full relative flex h-[294px] w-full items-center justify-center lg:h-[400px]">
              <Image
                src={promiseImg}
                layout="fill"
                alt="oakleighpromise"
                objectFit="cover"
                quality={100}
                style={{ objectPosition: 'center' }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default PromiseBlock
