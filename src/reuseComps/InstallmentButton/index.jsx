import ImageComp from '../ImageComp'
import ProgressiveImageComp from '../ProgressiveImageComp'
function InstallmentButton() {
  const klarnaSrc = '/Images/klarnaButton.svg'
  return (
    <section className="flex h-auto w-full justify-center gap-[14px] bg-search px-3 py-3 lg:justify-evenly lg:gap-0 dxl:px-6 txl:gap-5 txl:px-[66px]">
      <section className="flex h-auto w-auto items-center">
        <figure className="relative z-[0] h-[30px] w-[50px] dxl:h-8 dxl:w-[50px]">
          <ProgressiveImageComp src={klarnaSrc} alt={'klarna'} />
        </figure>
      </section>
      <section className="flex w-auto items-center gap-1">
        <p className="text-display-3 dxl:text-display-6">
          Pay in 4 installments of
        </p>
        <p className=" text-display-3 font-semibold dxl:text-display-6">
          £3,000
        </p>
      </section>
    </section>
  )
}
export default InstallmentButton
