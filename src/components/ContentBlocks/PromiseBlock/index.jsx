import Image from "next/image";

function PromiseBlock({ trayData }) {
  const promiseIcon = trayData?.top_logo_image;
  const promiseImg = trayData?.top_image;
  const title = trayData?.top_title;
  const bodyText = trayData?.top_body_text;

  return (
    <div className="p-5 w-full mt-16 flex items-center justify-center h-[896px] lg:h-[696px] bg-footerBg">
      <div className="p-5 lg:p-20 w-full h-full flex flex-col items-center justify-around lg:flex-row gap-8 lg:gap-12 border-[1px] border-copyRightBorder">
        <div className=" w-full lg:max-w-[50%] flex flex-col justify-between lg:justify-center items-start gap-6">
          <img src={promiseIcon} alt="promise" />
          <p className="text-textPrimary text-display-13">{title}</p>
          <div className="text-textPrimary text-display-3">
            {bodyText}
          </div>
        </div>
        <div className="w-full lg:w-1/2 h-full flex items-center justify-center">
          <div className="relative w-full flex items-center justify-center h-[294px] lg:h-[400px]">
            <Image
              src={promiseImg}
              layout="fill"
              alt="oakleighpromise"
              objectFit="cover"
              quality={100}
              style={{ objectPosition: "center" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default PromiseBlock;
