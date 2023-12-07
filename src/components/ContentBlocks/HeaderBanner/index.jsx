import NextImage from "@/reuseComps/NextImage";
import Image from "next/image";
import sampleTest from '../../../../public/Images/sampleTest.png'
function HeaderBanner() {
  const imgSrc = "/Images/sampleTest.png";
  return (
    <div>
      <Image src={sampleTest} width="2560" height="300" alt="headerBanner" placeholder="blur"/>
    </div>
  );
}
export default HeaderBanner;
