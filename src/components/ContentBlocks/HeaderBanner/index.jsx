import Image from "next/image";
import headerBanner from "../../../../public/Images/headerBanner.svg";

function HeaderBanner() {
  return (
    <div className="relative w-full h-[578px] lg:h-[520px]">
      <Image
        src={headerBanner}
        alt="headerBanner"
        layout="fill"
        objectFit="cover"
        quality={100}
        style={{ objectPosition: "center" }}
      />
      <div className="absolute max-w-[440px] 2xl:max-w-[700px] flex flex-col gap-4 top-[80px] lg:top-1/2 left-[8%] lg:-translate-y-1/2 text-display-13 2xl:text-display-15 text-textPrimary">
        <p>THE HOME OF PRE-OWNED LUXURY WATCHES</p>
        <div className="max-w-[200px] lg:max-w-[248px] h-12 relative border-[1px] flex justify-center items-center border-white">
          <button className="absolute text-[18px] flex items-center justify-center border-[1px] w-full h-full top-1 right-1">
            Discover Our Range
          </button>
        </div>
      </div>
    </div>
  );
}
export default HeaderBanner;
