import ProgressiveImageComp from '@/reuseComps/ProgressiveImageComp'
function ImageAndTextBlock() {
  const imgSrc = '/Images/Sample/imageTextBlock.svg'
  return (
    <section className="flex h-auto w-full flex-col justify-between gap-[30px] px-9 pt-[60px] md:flex-row lg:gap-[60px] lg:px-20 lg:pt-[100px] xl:gap-[120px] dxl:gap-[160px] dxl:px-[140px] dxl:pt-[120px]">
      <figure className="aspect-square flex-1">
        {/* <figure className="aspect-[3/4] max-h-[100px] min-w-[80px] max-w-[80px] xl:max-w-[138px] dxl:max-h-[135px] dxl:min-w-[113px]"> */}
        <ProgressiveImageComp src={imgSrc} alt={'productImage'} />
      </figure>

      <section className="flex h-auto w-full flex-1 flex-col items-start justify-center gap-[20px] xl:gap-[30px]">
        <p className="text-display-13 sm:text-display-11 lg:text-display-13 dxl:text-display-15">
          SERVICING YOUR WATCH
        </p>
        <p className="font-sans text-display-3 dxl:text-display-6">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit
        </p>
        <div className="relative flex h-[42px] w-[153px] xl:h-[53px] xl:w-[175px]">
          <div className="absolute bottom-0 h-[39px] w-[150px] border-[0.5px] border-textSecondary xl:h-[50px] xl:w-[172px]"></div>
          <div className="absolute right-0 h-[39px] w-[150px] border-[0.5px] border-textSecondary xl:h-[50px] xl:w-[172px]"></div>
          <div className="relative flex w-full cursor-pointer items-center justify-center font-sans text-display-4 xl:text-display-17">
            Enquire
          </div>
        </div>
      </section>
    </section>
  )
}
export default ImageAndTextBlock
