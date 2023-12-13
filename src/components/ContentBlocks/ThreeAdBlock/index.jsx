import Image from "next/image";
function ThreeAdBlock({trayData}) {
  const data = trayData?.ad_list;
  return (
    <div className="w-full h-auto pt-[60px] lg:pt-[100px] px-9 lg:px-20 justify-between flex flex-wrap lg:flex-nowrap gap-6">
      {data.map((e, index) => {
        return (
          <div key={index} className="relative w-full h-[356px] 2xl:h-[526px]">
            <Image
              src={e.ab_background_image}
              layout="fill"
              alt="AdBlock"
              objectFit="cover"
              quality={100}
              style={{ objectPosition: "center" }}
            />
            <div className="absolute w-full text-textPrimary flex flex-col items-center bottom-6">
              <span className="text-display-11">{e.ab_title}</span>
              <u>
                <span className="font-sans text-display-4">
                  {e.ab_button_title}
                </span>
              </u>
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default ThreeAdBlock;
