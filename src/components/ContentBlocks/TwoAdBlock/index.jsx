import Image from "next/image";
function TwoAdBlock() {
  const data = [
    {
      url: "/Images/Sample/twoAdBlock1.svg",
      title: "Shop All Watches",
      buttonTitle: "Shop Now",
    },
    {
      url: "/Images/Sample/twoAdBlock2.svg",
      title: "Vintage & Rare Finds",
      buttonTitle: "Shop Now",
    },
  ];
  return (
    <div className="w-full h-auto pt-[60px] lg:pt-[100px] px-9 lg:px-20 justify-between flex flex-wrap lg:flex-nowrap gap-6">
      {data.map((e, index) => {
        return (
          <div key={index} className="relative w-full h-[508px] lg:h-[526px]">
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
export default TwoAdBlock;
