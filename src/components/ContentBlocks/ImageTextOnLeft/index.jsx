import Image from "next/image";
function ImageTextOnLeft() {
  const imgSrc = "/Images/Sample/imageTextBlock.svg";
  return (
    <div className="w-full h-auto pt-[60px] lg:pt-[100px] px-9 lg:px-20 2xl:px-[140px] justify-between flex flex-wrap lg:flex-nowrap gap-6">
      <div className="w-[50%] h-[508px] lg:h-[526px] flex flex-col justify-center items-start pr-40 gap-[30px]">
        <p className="text-display-15">WHY OAKLEIGH LOVES THIS BRAND</p>
        <p className="text-display-6">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit
        </p>
        <div className="w-24 h-8 relative border-[1px] flex justify-center items-center border-black">
          <button
            type="submit"
            className="absolute border-[1px] border-black w-full h-full top-[1px] right-[1px]"
          >
            Shop Now
          </button>
        </div>
      </div>
      <div className="relative w-[50%] h-[508px] lg:h-[526px]">
        <Image
          src={imgSrc}
          layout="fill"
          alt="AdBlock"
          objectFit="cover"
          quality={100}
          style={{ objectPosition: "center" }}
        />
      </div>
    </div>
  );
}
export default ImageTextOnLeft;
