import Image from "next/image";
function AboutBlock() {
  const imgsrc = "/Images/Sample/about1.svg";
  return (
    <div className="w-full h-auto pt-[60px] lg:pt-[100px] justify-between flex flex-wrap gap-6">
      <div className="relative w-full flex justify-center lg:justify-start lg:pl-20 h-[956px] 2xl:h-[1080px]">
        <Image
          src={imgsrc}
          layout="fill"
          alt="AdBlock"
          objectFit="cover"
          quality={100}
          style={{ objectPosition: "center" }}
        />
        <div className="absolute w-[90%] sm:w-[60%] lg:w-[720px] xl:w-[800px] 2xl:w-[944px] p-9 h-[596px] lg:h-[400px] xl:h-[524px] gap-8 text-textPrimary top-[72px] lg:top-[120px] bg-black">
          <div className="border-[1px] h-full flex flex-col p-7 items-start justify-around border-copyRightBorder">
            <p className="text-display-13 xl:text-display-15">
              OUR STORY AT OAKLEIGH WATCHES
            </p>
            <p className="text-display-3 xl:text-display-6">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet.
            </p>
            <div className="w-36 h-12 relative border-[1px] flex justify-center items-center border-white max-w-[150px]">
              <button
                type="submit"
                className="absolute border-[1px] w-full h-full top-1 right-1"
              >
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AboutBlock;
