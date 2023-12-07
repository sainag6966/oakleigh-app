import NextImage from "@/reuseComps/NextImage";
import Image from "next/image";
function HeaderBanner() {
    const imgSrc = "/Images/headerBanner.svg";
  return <div>
    <Image src={imgSrc} width='1280' height='600' alt='headerBanner' />
  </div>;
}
export default HeaderBanner;
