import Image from "next/image";
import SimpleSlider from "@/reuseComps/Slider";

function InsightBlock({trayData}) {
  const data = [
    {
      url: "/Images/Sample/insight1.svg",
      title: "A Look At The Breitling Navitimer 806 A Unique Timeless Piece",
      buttonTitle: "Read This",
      description:"",
      price:""
    },
    {
      url: "/Images/Sample/insight2.svg",
      title: "What Watch Face Diameter Would Best Fit My Wrist?",
      buttonTitle: "Read This",
      description:"",
      price:""
    },
    {
      url: "/Images/Sample/insight3.svg",
      title: "Top 10 Watch Care Tips",
      buttonTitle: "Read This",
      description:"",
      price:""
    },
    {
      url: "/Images/Sample/insight4.svg",
      title: "IS The Age Of Your Watch Important When You Sell?",
      buttonTitle: "Read This",
      description:"",
      price:""
    },
  ];
  return (
    <div className="w-full h-auto pt-[60px] lg:pt-[120px] px-9 lg:px-20 2xl:px-[140px] justify-between gap-6 flex flex-col">
      <div className="w-full h-auto flex flex-col lg:flex-row items-center justify-between">
        <span className="text-display-12">Our Latest Insights</span>
        <u>
          <span className="font-sans text-display-4">View All Insights</span>
        </u>
      </div>
      {/* <div className="justify-between flex flex-wrap lg:flex-nowrap gap-6">
        {data.map((e, index) => {
          return (
            <div key={index} className="flex flex-col w-full h-auto justify-center items-center lg:items-start text-center lg:text-start">
              <div className="relative w-full flex flex-col justify-between items-center h-[356px] 2xl:h-[526px]">
                <Image
                  src={e.url}
                  layout="fill"
                  alt="AdBlock"
                  objectFit="cover"
                  quality={100}
                  style={{ objectPosition: "center" }}
                />
              </div>
              <p className="w-full h-16 sm:h-10 lg:h-20 xl:h-14">{e.title}</p>
              <div className="w-24 h-8 relative border-[1px] flex justify-center items-center border-black">
                <button
                  type="submit"
                  className="absolute border-[1px] border-black w-full h-full top-[1px] right-[1px]"
                >
                  {e.buttonTitle}
                </button>
              </div>
            </div>
          );
        })}
      </div> */}
      <SimpleSlider trayData={data} navButtons={false} slidesToShow={4}/>
    </div>
  );
}
export default InsightBlock;
