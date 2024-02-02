import GpayButton from '@/reuseComps/GpayButton'
function ExpressCheckout() {
  return (
    <section className="flex h-auto w-full flex-col gap-5 text-display-11 dxl:gap-[25px] dxl:text-display-12">
      <p>Express Checkout</p>
      <GpayButton />
    </section>
  )
}
export default ExpressCheckout
