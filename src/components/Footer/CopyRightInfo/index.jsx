import NextImage from '@/reuseComps/NextImage'

function CopyRightInfo() {
  const copyRightIcons = '/Images/copyRightImg.svg'
  return (
    <div className="relative flex h-[180px] w-full flex-col items-center justify-center gap-5 pl-0 font-sans text-[14px] lg:h-[87px] lg:flex-row lg:justify-evenly lg:pl-20 lg:text-[17px]">
      <p>© Oakleigh Watches - 2023</p>
      <p className="lg:order-last">Site Designed & Developed by CDA</p>
      <NextImage src={copyRightIcons} width="234" height="37" alt="copyRight" />
      {/* <p className="hidden lg:block">Site Designed & Developed by CDA</p> */}
      <div className="absolute left-[8%] h-full w-[92%] border-l-[1px] border-t-[1px] border-copyRightBorder"></div>
    </div>
  )
}
export default CopyRightInfo
