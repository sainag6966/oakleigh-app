import Image from "next/image";
function ThreeAdBlock() {
  const data = [
    {
      url: "/Images/Sample/threeAdBlock1.svg",
      title: "Part Exchange",
      buttonTitle: "Read More",
    },
    {
      url: "/Images/Sample/threeAdBlock2.svg",
      title: "Sustainability",
      buttonTitle: "Read More",
    },
    {
      url: "/Images/Sample/threeAdBlock3.svg",
      title: "Showroom",
      buttonTitle: "Read More",
    },
  ];
  return (
    <div className="w-full h-auto pt-[60px] lg:pt-[100px] px-9 lg:px-20 justify-between flex flex-wrap lg:flex-nowrap gap-6">
      {data.map((e) => {
        return (
          <div className="relative w-full h-[356px] 2xl:h-[526px]">
            <Image
              src={e.url}
              layout="fill"
              alt="AdBlock"
              objectFit="cover"
              quality={100}
              style={{ objectPosition: "center" }}
            />
            <div className="absolute w-full text-textPrimary flex flex-col items-center bottom-6">
              <span className="text-display-11">{e.title}</span>
              <u>
                <span className="font-sans text-display-4">
                  {e.buttonTitle}
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
