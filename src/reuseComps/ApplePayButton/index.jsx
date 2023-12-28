import ImageComp from '../ImageComp'

function ApplePayButton() {
  const appleIconSrc = '/Images/appleIcon.svg'
  return (
    <section className="flex gap-2 bg-colorBlack px-[38px] py-4 text-textPrimary">
      <p className="w-full text-display-3 font-semibold">Pay with</p>
      <div className="flex items-center justify-center">
        <div className="relative z-[2] h-4 w-4">
          <ImageComp src={appleIconSrc} alt="appleIcon" />
        </div>
        <p className="w-full text-display-3 font-semibold">Pay</p>
      </div>
    </section>
  )
}
export default ApplePayButton
