import Image from "next/image";
import { useMediaQuery } from "react-responsive";

function FooterTop() {
  const data = [
    "/Images/Sample/footer1.svg",
    "/Images/Sample/footer2.svg",
    "/Images/Sample/footer3.svg",
    "/Images/Sample/footer4.svg",
    "/Images/Sample/footer5.svg",
    "/Images/Sample/footer3.svg",
    "/Images/Sample/footer2.svg",
    "/Images/Sample/footer1.svg",
  ];
  const isDesktop = useMediaQuery({ query: "(min-width:900px)" });
  const isTablet = useMediaQuery({ query: "(min-width:600px)" });
  const num = isDesktop ? 5 : isTablet ? 4 : 3;
  const row = 1;

  return (
    <div
      className="w-full h-[152px] mt-[120px] relative grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-8 grid-rows-1 grid-flow-col"
    >
      {data.map((e, index) => {
        return (
          <div key={index} className="relative w-auto h-[152px] lg:h-[152px]">
            <Image
              src={e}
              layout="fill"
              alt="AdBlock"
              objectFit="cover"
              quality={100}
              style={{ objectPosition: "center" }}
            />
          </div>
        );
      })}
      <div className="absolute bottom-0 w-[248px] flex justify-center items-center ml-auto mr-auto left-0 right-0 h-[50px] bg-footerBg">
        <p className="text-display-9 text-uspBlockBackground">
          @OAKLEIGH WATCHES
        </p>
      </div>
    </div>
  );
}
export default FooterTop;
