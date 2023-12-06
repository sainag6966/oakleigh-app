import NextImage from "@/reuseComps/NextImage";

function CopyRightInfo() {
  const copyRightIcons = "/Images/copyRightImg.svg";
  return (
    <div className="flex flex-col pl-0 lg:pl-20 lg:flex-row gap-4 h-[180px] lg:h-[87px] relative items-center justify-center lg:justify-evenly w-full font-sans text-[14px] lg:text-[17px]">
      <p>© Oakleigh Watches - 2023</p>
      <p className="block lg:hidden">Site Designed & Developed by CDA</p>
      <NextImage src={copyRightIcons} width="234" height="37" alt="copyRight" />
      <p className="hidden lg:block">Site Designed & Developed by CDA</p>
      <div className="absolute w-[92%] border-t-[1px] border-copyRightBorder border-l-[1px] left-[8%] h-full"></div>
    </div>
  );
}
export default CopyRightInfo;
