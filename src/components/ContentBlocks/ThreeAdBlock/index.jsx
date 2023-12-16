import Image from 'next/image'
function ThreeAdBlock({ trayData }) {
  const data = trayData?.ad_list
  return (
    <div className="flex h-auto w-full flex-wrap justify-between gap-6 px-9 pt-[60px] lg:flex-nowrap lg:px-20 lg:pt-[100px]">
      {data.map((e, index) => {
        return (
          <div
            key={index}
            className="dxl:h-[526px] relative h-[356px] w-full bg-gradient-to-t from-black via-transparent to-transparent"
          >
            <Image
              src={e.ab_background_image}
              layout="fill"
              alt="AdBlock"
              objectFit="cover"
              quality={100}
              style={{ objectPosition: 'center' }}
              className="mix-blend-overlay"
            />
            <div className="absolute bottom-6 flex w-full flex-col items-center text-textPrimary">
              <span className="text-display-11">{e.ab_title}</span>
              <u>
                <span className="font-sans text-display-4">
                  {e.ab_button_title}
                </span>
              </u>
            </div>
          </div>
        )
      })}
    </div>
  )
}
export default ThreeAdBlock
