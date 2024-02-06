import ProgressiveImageComp from '@/reuseComps/ProgressiveImageComp'
import Breadcrumbs from '@/components/BreadCrumbs'
import CheckoutItems from '@/components/CheckOut/CheckoutItems'
import ShippingPage from '@/components/CheckOut/ShippingPage'
import CheckBox from '@/reuseComps/CheckBox'

function BillingBlock() {
  const leftIcon = '/Images/leftArrow.svg'
  return (
    <section className="flex h-auto w-full flex-col gap-6 font-sans ">
      <section className="flex h-auto w-full flex-col gap-3">
        <p className="font-cormorant text-display-11 dxl:text-display-12">
          Billing Address
        </p>
        <p className="text-display-3 dxl:text-display-6">
          Select the address that matches your card or payment method
        </p>
        <section className="flex flex-col gap-1 text-display-3 dxl:text-display-6">
          <section className="flex items-center gap-2">
            <CheckBox />
            <p>Same as shipping address</p>
          </section>
          <section className="flex items-center gap-2">
            <CheckBox />
            <p>Use a different billing address</p>
          </section>
        </section>
      </section>
      <section className="flex h-auto w-full flex-col gap-3">
        <p className="font-cormorant text-display-11 dxl:text-display-12">
          Remember Me
        </p>
        <section className="flex items-center gap-2 text-display-3 dxl:text-display-6">
          <CheckBox />
          <p>Save my information for a faster checkout</p>
        </section>
      </section>
      <p className="text-display-3 dxl:text-display-6">
        By clicking below and completing your order, you agree to purchase your
        item(s) from Oakleigh Watches as merchant of record for this
        transaction, on Oakleigh Watches <u>Terms & Conditions</u> and{' '}
        <u>Privacy Policy</u>.
      </p>
      <section className="flex h-auto w-full items-center justify-between dxl:mt-[5px]">
        <section className="flex flex-1 items-center justify-start gap-1">
          <section className="h-3 w-3 dxl:mt-[3px] dxl:h-4 dxl:w-4">
            <ProgressiveImageComp src={leftIcon} alt="left" />
          </section>
          <p className="font-sans text-display-4 leading-4 dxl:text-display-17">
            <u>Return To Shipping</u>
          </p>
        </section>
        <section
          className="relative mt-1 flex h-[42px] w-full flex-1 font-sans lg:max-w-[180px] dxl:h-[53px] dxl:max-w-[279px]"
          onClick={() => {
            router.push('/basket/checkoutPage')
          }}
        >
          <div className="absolute bottom-0 h-[39px] w-[98.5%] border-[0.8px] border-textSecondary bg-textSecondary sm:w-[99%] dxl:h-[50px]" />
          <div className="absolute right-0 h-[39px] w-[98.5%] border-[0.8px] border-textSecondary sm:w-[99%] dxl:h-[50px]" />
          <div className="absolute bottom-[3px] left-[1.5%] right-[1.5%] h-[36px] w-[97%] border-b-[0.5px] border-l-[0.5px] border-textPrimary sm:left-[1%] sm:right-[1%] sm:w-[98%] dxl:h-[47px]" />
          <div className="relative flex w-full items-center justify-center text-display-1 text-textPrimary sm:text-display-4 dxl:text-display-17">
            Pay Now
          </div>
        </section>
      </section>
    </section>
  )
}

function Payment() {
  const oakleighLogo = '/Images/oakleighLogo.svg'
  const leftIcon = '/Images/leftArrow.svg'
  return (
    <main className="relative flex h-auto w-full flex-col items-start justify-start gap-5 px-9 py-[34px] lg:gap-8 lg:px-12 lg:pb-0 lg:pt-[50px] xl:px-16 dxl:px-[143px]">
      <figure
        className="max-h-[34px] max-w-[180px] dxl:min-h-[60px] dxl:min-w-[304px]"
        onClick={() => {
          router.push('/')
        }}
      >
        <ProgressiveImageComp src={oakleighLogo} alt={'oakleighlogo'} />
      </figure>
      <section>
        <Breadcrumbs />
      </section>
      <section className="flex h-auto w-full flex-col gap-8 lg:flex-row lg:justify-between lg:gap-10 xl:gap-16">
        <section className="self-stretch bg-search lg:order-2 lg:flex-1">
          <CheckoutItems />
        </section>
        <section className="flex flex-col gap-4 lg:flex-1 lg:pb-64 dxl:gap-[50px]">
          <ShippingPage />
          <BillingBlock />
        </section>
      </section>
    </main>
  )
}
export default Payment
