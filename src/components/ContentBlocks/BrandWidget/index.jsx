import NextImage from "@/reuseComps/NextImage";
import Image from "next/image";
function BrandWidget() {
  const data = [
    "/Images/Sample/brand1.svg",
    "/Images/Sample/brand2.svg",
    "/Images/Sample/brand3.svg",
    "/Images/Sample/brand4.svg",
    "/Images/Sample/brand5.svg",
  ];
  return (
    <div className="w-full h-auto px-[80px] pt-[100px] flex justify-between items-center">
      {data.map((e) => {
        return (
          <div className="min-w-20 max-w-[150px] h-auto">
            <Image src={e} width="5" height="2" layout="responsive" alt="brandLogo" />
          </div>
        );
      })}
      <u>
        <p>View All Brands</p>
      </u>
    </div>
  );
}
export default BrandWidget;
