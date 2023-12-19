import Image from 'next/image'

function PromiseBlock({ trayData }) {
  const promiseIcon = trayData?.top_logo_image
  const promiseImg = trayData?.top_image
  const title = trayData?.top_title
  const bodyText = trayData?.top_body_text

  return (
    <div className="px-9 dxl:px-[140px]">
      <div className="mt-[60px] flex h-auto w-full items-center justify-center bg-footerBg p-5 lg:h-[696px] dxl:mt-[120px]">
        <div className="flex h-full w-full flex-col items-center justify-around gap-8 border-[1px] border-copyRightBorder p-[30px] lg:flex-row lg:gap-12 lg:p-20 dxl:gap-[144px]">
          <div className=" flex w-full flex-col items-start justify-between gap-6 lg:max-w-[50%] lg:justify-center">
            <img
              src={promiseIcon}
              alt="promise"
              className="h-[47px] w-[37px] dxl:h-[66px] dxl:w-[52px]"
            />
            <p className="text-display-13 text-textPrimary dxl:text-display-15">
              {title}
            </p>
            <div className="font-sans text-display-3 text-textPrimary dxl:text-display-6">
              <div
                className="list-disc"
                dangerouslySetInnerHTML={{
                  __html: `<ul style="list-disc">${bodyText}</ul>`,
                }}
              />
            </div>
          </div>
          <div className="flex h-full w-full items-center justify-center lg:w-1/2">
            <div className="relative flex h-[294px] w-full items-center justify-center lg:h-[400px] dxl:h-full">
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
