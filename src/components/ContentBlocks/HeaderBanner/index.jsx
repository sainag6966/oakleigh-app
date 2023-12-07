import NextImage from "@/reuseComps/NextImage";
import Image from "next/image";
function HeaderBanner() {
  const imgSrc = "/Images/sampleTest.png";
  return (
    <div>
      <Image src={imgSrc} width="2560" height="300" alt="headerBanner"/>
    </div>
  );
}
export default HeaderBanner;
