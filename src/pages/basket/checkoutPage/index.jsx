import Breadcrumbs from '@/components/BreadCrumbs'
import ProgressiveImageComp from '@/reuseComps/ProgressiveImageComp'
import ExpressCheckout from './ExpressCheckout'

function checkoutPage() {
  const oakleighLogo = '/Images/oakleighLogo.svg'
  return (
    <section className="flex h-auto w-full flex-col items-start justify-start gap-5 px-9 pt-[34px]">
      <figure className="max-h-[34px] max-w-[180px]">
        <ProgressiveImageComp src={oakleighLogo} alt={'oakleighlogo'} />
      </figure>
      <section>
        <Breadcrumbs />
      </section>
      <ExpressCheckout />
    </section>
  )
}
export default checkoutPage
