import Image from "next/image";
function PromiseBlock() {
  const promiseIcon = "/Images/sample/promiseIcon.svg";
  const promiseImg = "/Images/sample/promiseIcon1.svg";
  return (
    <div className="p-5 w-full mt-16 flex items-center justify-center h-[896px] lg:h-[696px] bg-footerBg">
      <div className="p-5 lg:p-20 w-full h-full flex flex-col justify-around lg:flex-row gap-8 lg:gap-12 border-[1px] border-copyRightBorder">
        <div className="flex flex-col justify-between lg:justify-center items-start gap-6">
          <img src={promiseIcon} alt="promise" />
          <p className="text-textPrimary text-display-13">THE OAKLEIGH PROMISE</p>
          <div className="text-textPrimary text-display-3">
            <p>
              Lorem ipsum dolor sit amet, consetes adipscing elitr, sed diam
              nonumy
            </p>
            <p>
              Lorem ipsum dolor sit amet, consetes adipscing elitr, sed diam
              nonumy
            </p>
            <p>
              Lorem ipsum dolor sit amet, consetes adipscing elitr, sed diam
              nonumy
            </p>
            <p>
              Lorem ipsum dolor sit amet, consetes adipscing elitr, sed diam
              nonumy
            </p>
            <p>
              Lorem ipsum dolor sit amet, consetes adipscing elitr, sed diam
              nonumy
            </p>
          </div>
        </div>
        <div className="w-1/2 h-full flex items-center justify-center">
        <div className="relative w-full flex items-center justify-center h-[294px] lg:h-[400px]">
          <Image
            src={promiseImg}
            layout="fill"
            alt="oakleigh promise"
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
