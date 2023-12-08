import NextImage from "@/reuseComps/NextImage";
function UspBlock() {
  const icon1 = "/Images/Sample/uspIcon1.svg";
  const icon2 = "/Images/Sample/uspIcon2.svg";
  const icon3 = "/Images/Sample/uspIcon3.svg";
  const data = [
    { label: "Free Delivery & Returns", icon: icon1 },
    { label: "Authentic & Certified", icon: icon2 },
    { label: "Serviced & Guaranteed", icon: icon3 },
  ];

  return (
    <div className="bg-uspBlockBackground flex w-full justify-around h-[115px]">
      {data.map((e, index) => {
        return (
          <div key={index} className="flex items-center justify-center gap-8">
            <NextImage src={e.icon} width="40" height="24" alt="uspIcon" />
            <p className="text-[20px]">{e.label}</p>
            {data.length - 1 !== index && (
              <div className="min-w-[70px] h-[0.5px] bg-black"></div>
            )}
          </div>
        );
      })}
    </div>
  );
}
export default UspBlock;
