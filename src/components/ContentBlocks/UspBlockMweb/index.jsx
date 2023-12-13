import NextImage from "@/reuseComps/NextImage";
import { useMediaQuery } from "react-responsive";

function UspBlockMweb() {
  const icon1 = "/Images/Sample/uspIcon1.svg";
  const icon2 = "/Images/Sample/uspIcon2.svg";
  const icon3 = "/Images/Sample/uspIcon3.svg";
  const isDesktop = useMediaQuery({ query: '(min-width:900px)' });
  const data = [
    { label: "Free Delivery & Returns", icon: icon1 },
    { label: "Authentic & Certified", icon: icon2 },
    { label: "Serviced & Guaranteed", icon: icon3 },
  ];

  return (
    <div className="bg-uspBlockBackground flex w-full items-center justify-evenly h-[115px]">
      {data.map((e, index) => {
        return (
            <>
            <div className="flex items-center justify-center gap-5 w-auto">
              <NextImage src={e.icon} width="40" height="24" alt="uspIcon" />
              <p className="text-[20px]">{e.label}</p>
            </div>
            {data.length - 1 !== index && (
              <div className="min-w-[30px] h-[0.5px] bg-black grow-[0.1]"></div>
            )} 
            </>
        );
      })}
    </div>
  );
}
export default UspBlockMweb;
