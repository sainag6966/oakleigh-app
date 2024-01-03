import NextImage from '@/reuseComps/NextImage'

function CopyRightInfo() {
  const copyRightIcons = '/Images/copyRightImg.svg'
  return (
    <div className="relative flex h-[180px] w-full flex-col items-center justify-center gap-5 pl-0 font-sans text-[14px] lg:h-[87px] lg:flex-row lg:justify-between lg:px-12 lg:text-[17px] dxl:px-[140px]">
      <p>© Oakleigh Watches - 2023</p>
      <p className="lg:order-last">
        Site Designed & Developed by <u>CDA</u>
      </p>
      <NextImage src={copyRightIcons} width="234" height="37" alt="copyRight" />
      {/* <p className="hidden lg:block">Site Designed & Developed by CDA</p> */}
      <div className="absolute left-[2%] h-full w-[98%] border-l-[1px] border-t-[1px] border-copyRightBorder xl:dxl:w-[96%] dxl:left-[4%]"></div>
    </div>
  )
}
export default CopyRightInfo
