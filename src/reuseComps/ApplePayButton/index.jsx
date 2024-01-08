import ImageComp from '../ImageComp'

function ApplePayButton() {
  const appleIconSrc = '/Images/appleIcon.svg'
  return (
    <section className="flex items-center gap-2 bg-colorBlack px-3 py-3 text-textPrimary dxl:px-5 dxl:py-4 txl:px-[38px]">
      <p className="w-full text-center text-[10px] font-semibold xl:text-display-1 dxl:text-display-3">
        Pay with
      </p>
      <div className="flex items-center justify-center gap-1">
        <div className="relative z-[0] h-3 w-3 dxl:h-4 dxl:w-4">
          <ImageComp src={appleIconSrc} alt="appleIcon" />
        </div>
        <p className="w-full text-[10px] font-semibold xl:text-display-1 dxl:text-display-3">
          Pay
        </p>
      </div>
    </section>
  )
}
export default ApplePayButton
