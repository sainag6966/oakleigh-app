import NextImage from "@/reuseComps/NextImage";
import Image from "next/image";
import headerBanner from "../../../../public/Images/headerBanner.svg";
import headerBannerMob from "../../../../public/Images/headerBannerMob.svg";

function HeaderBanner() {
  const imgurl =
    "https://oakleigh.cda-development3.co.uk/cms/wp-content/uploads/woocommerce-placeholder.png";
  const src = "/Images/headerBanner.svg";
  return (
    <div className="w-full h-auto relative">
      <Image src={headerBanner} layout="responsive" alt="headerBanner" />
      <div className="absolute flex flex-col gap-4 top-1/2 max-w-[380px] left-[8%] -translate-y-1/2 text-[30px] text-textPrimary">
        <p>THE HOME OF PRE-OWNED LUXURY WATCHES</p>
        <div className="w-1/2 h-12 relative border-[1px] flex justify-center items-center border-white">
          <button className="absolute text-[18px] border-[1px] w-full h-full top-1 right-1">
            Discover Our Range
          </button>
        </div>
      </div>
    </div>
  );
}
export default HeaderBanner;
