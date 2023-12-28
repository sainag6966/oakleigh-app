import ImageComp from '../ImageComp'
function InstallmentButton() {
  const klarnaSrc = '/Images/klarnaButton.svg'
  return (
    <section className="flex h-auto w-full justify-between bg-search px-[66px] py-3">
      <section className="h-auto w-auto">
        <figure className="relative z-[0] h-8 w-[50px]">
          <ImageComp src={klarnaSrc} alt={'klarna'} />
        </figure>
      </section>
      <section className="flex w-auto gap-1">
        <p className="text-display-6">Pay in 4 installments of</p>
        <p className="text-display-6 font-semibold">£3,000</p>
      </section>
    </section>
  )
}
export default InstallmentButton
