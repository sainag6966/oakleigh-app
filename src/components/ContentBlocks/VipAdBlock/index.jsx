import SimpleSlider from "@/reuseComps/Slider";
import Image from "next/image";

function VipAdBlock() {
  const vipIcon = "/Images/Sample/vipBlock1.svg";
  const data = [
    {
      url: "/Images/Sample/insight1.svg",
      title: "Rolex 16523 ‘Zenith’ Daytona",
      description: "Oyster, 40 mm, Oystersteel and yellow gold",
      buttonTitle: "",
      price:''
    },
    {
      url: "/Images/Sample/insight2.svg",
      title: "Zenith Defy EL Primero 21",
      description: "Oyster, 40 mm, Oystersteel and yellow gold",
      buttonTitle: "",
      price:''
    },
  ];
  return (
    <div className="w-full h-auto pt-[60px] lg:pt-[100px] px-9 xl:px-20 3xl:px-[140px] flex flex-col justify-between lg:flex-row gap-6 ">
      <div className="justify-between gap-6 flex flex-col">
        <div className="w-full h-auto flex flex-col lg:flex-row items-center justify-between">
          <span className="text-display-12 2xl:text-display-14">Watches Coming Soon</span>
          <u>
            <span className="font-sans text-display-4 2xl:text-display-17">
              View All Coming Soon
            </span>
          </u>
        </div>
        {/* <div className="justify-between flex flex-wrap lg:flex-nowrap gap-6">
          {data.map((e, index) => {
            return (
              <div key={index} className="flex flex-col w-full h-auto gap-7">
                <div className="relative lg:w-[260px] xl:w-[340px] 2xl:w-[400px] 3xl:w-[458px] h-[356px] xl:h-[400px] 2xl:h-[480px] 3xl:h-[544px] flex flex-col justify-between items-center">
                  <Image
                    src={e.url}
                    layout="fill"
                    alt="AdBlock"
                    objectFit="cover"
                    quality={100}
                    style={{ objectPosition: "center" }}
                  />
                </div>
                <div className="w-full flex flex-col justify-center gap-4 items-center">
                  <p className="text-display-12">{e.title}</p>
                  <p className="text-display-6 font-sans">{e.subTitle}</p>
                </div>
              </div>
            );
          })}
        </div> */}
        <SimpleSlider trayData={data} navButtons={false} slidesToShow={2}/>
      </div>
      <div className="w-full relative lg:w-[35%] xl:w-[30%] lg:p-5 xl:p-[40px] 2xl:p-[60px] bg-uspBlockBackground flex flex-col justify-around gap-6 items-center">
        <img src={vipIcon} alt="vipIcon"></img>
        <p className="text-display-13 2xl:text-display-15 text-center">JOIN THE VIP CLUB</p>
        <p className="text-display-6 text-center">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua.
        </p>
        <div className="w-48 h-8 relative border-[1px] flex justify-center items-center border-black">
          <button
            type="submit"
            className="absolute border-[1px] border-black w-full h-full top-[1px] right-[1px]"
          >
            JOIN NOW FOR FREE
          </button>
        </div>
        <u>
          <span className="font-sans text-display-4">Find Out More</span>
        </u>
        <div className="absolute top-[-1px] left-[-1px] w-5 h-5 bg-textPrimary"/>
        <div className="absolute top-[-1px] right-[-1px] w-5 h-5 bg-textPrimary"/>
        <div className="absolute bottom-[-1px] left-[-1px] w-5 h-5 bg-textPrimary"/>
        <div className="absolute bottom-[-1px] right-[-1px] w-5 h-5 bg-textPrimary"/>
      </div>
    </div>
  );
}
export default VipAdBlock;
