import ImageComp from '../ImageComp'
function InstallmentButton() {
  const klarnaSrc = '/Images/klarnaButton.svg'
  return (
    <section className="flex h-auto w-full justify-evenly gap-0 bg-search px-3 py-3 dxl:px-6 txl:gap-5 txl:px-[66px]">
      <section className="flex h-auto w-auto items-center">
        <figure className="relative z-[0] h-5 w-10 dxl:h-8 dxl:w-[50px]">
          <ImageComp src={klarnaSrc} alt={'klarna'} />
        </figure>
      </section>
      <section className="flex w-auto items-center gap-1">
        <p className="text-[10px] xl:text-display-3 dxl:text-display-6">
          Pay in 4 installments of
        </p>
        <p className="text-[10px] font-semibold xl:text-display-3 dxl:text-display-6">
          £3,000
        </p>
      </section>
    </section>
  )
}
export default InstallmentButton
