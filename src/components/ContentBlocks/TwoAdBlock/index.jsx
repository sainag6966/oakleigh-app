import Image from "next/image";
function TwoAdBlock() {
  const data = [
    "/Images/Sample/twoAdBlock1.svg",
    "/Images/Sample/twoAdBlock2.svg",
  ];
  return (
    <div className="w-full h-auto pt-[100px] px-[80px] justify-between flex gap-3">
      {data.map((e) => {
        return (
          <div className="relative">
            <Image src={e} width="540" height="450" layout="responsive" alt="AdBlock" />
            <p className="absolute">Shop All</p>
          </div>
        );
      })}
    </div>
  );
}
export default TwoAdBlock;
