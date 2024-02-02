import ProgressiveImageComp from '../ProgressiveImageComp'
function GpayButton() {
  const gIcon = '/Images/gpayIcon.svg'
  return (
    <section className="flex h-[40px] w-[150px] items-center justify-center rounded-full bg-colorBlack lg:h-[50px] lg:w-[196px]">
      <section className="w-[24px] lg:w-[32px]">
        <ProgressiveImageComp src={gIcon} alt="gpay" />
      </section>
      <p className="font-sans text-display-17 font-normal text-textPrimary">
        Pay
      </p>
    </section>
  )
}
export default GpayButton
