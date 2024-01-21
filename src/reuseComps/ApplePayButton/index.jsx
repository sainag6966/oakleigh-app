import ImageComp from '../ImageComp'
import ProgressiveImageComp from '../ProgressiveImageComp'

function ApplePayButton() {
  const appleIconSrc = '/Images/appleIcon.svg'
  return (
    <section className="flex w-full items-center justify-center gap-1 bg-colorBlack p-1 text-textPrimary lg:p-3 xl:p-[10px]">
      <p className="text-center text-display-1 font-semibold xl:text-display-4 dxl:text-display-6">
        Pay with
      </p>
      <div className="flex items-center justify-center gap-1">
        <div className="relative z-[0] h-5 w-5 dxl:h-4 dxl:w-4">
          <ProgressiveImageComp src={appleIconSrc} alt="appleIcon" />
        </div>
        <p className="w-full text-display-1 font-semibold xl:text-display-4 dxl:text-display-6">
          Pay
        </p>
      </div>
    </section>
  )
}
export default ApplePayButton
