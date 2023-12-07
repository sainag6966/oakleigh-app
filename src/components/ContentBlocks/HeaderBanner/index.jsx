import NextImage from "@/reuseComps/NextImage";
import Image from "next/image";
import headerBanner from '../../../../public/Images/headerBanner.svg'
function HeaderBanner() {
    const imgurl = 'https://oakleigh.cda-development3.co.uk/cms/wp-content/uploads/woocommerce-placeholder.png';
    const src= '/Images/headerBanner.svg'
  return (
    <div>
      <Image src={imgurl} width="1280" height="300" alt="headerBanner"/>
      {/* <img src={src} className="w-full h-auto" alt="headerBanner"/> */}
    </div>
  );
}
export default HeaderBanner;
