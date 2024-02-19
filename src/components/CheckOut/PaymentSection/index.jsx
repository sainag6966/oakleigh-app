import { useState } from 'react'
import { useStripe } from '@stripe/react-stripe-js'
import Toast from '@/reuseComps/ToastMessage'
import PaymentModes from '@/components/CheckOut/PaymentModes'
import CheckBox from '@/reuseComps/CheckBox'
import ProgressiveImageComp from '@/reuseComps/ProgressiveImageComp'

function PaymentSection({ basketData, getStripeResponse, cardClear }) {
  const stripe = useStripe()
  const [showToast, setShowToast] = useState(false)
  const [toastMessage, setToastMessage] = useState('')
  const [isChecked, setIsChecked] = useState(false)
  const gateWayIcon = '/Images/gatewayIcons.svg'

  return (
    <section className="flex h-auto w-full flex-col gap-3 font-sans">
      <section className="font-cormorant text-display-11 dxl:text-display-12">
        Payment
      </section>
      <p className="font-sans text-display-3 dxl:text-display-6">
        All transactions are secure and encrypted
      </p>
      <section className="flex h-auto w-full flex-col gap-3 dxl:gap-6">
        <section className="flex items-center justify-between">
          <section className="flex items-center gap-2 dxl:gap-4">
            <CheckBox isChecked={isChecked} setIsChecked={setIsChecked} />
            <p className="text-display-5 dxl:text-display-16">Credit Card</p>
          </section>
          <section className="h-[20px] w-[100px] dxl:h-[30px] dxl:w-[150px]">
            <ProgressiveImageComp src={gateWayIcon} alt="gatewayIcon" />
          </section>
        </section>
        <section className="h-auto w-full">
          <PaymentModes
            getStripeResponse={getStripeResponse}
            basketData={basketData}
            cardClear={cardClear}
          />
          {/* <button
            className="border-[1px] bg-orange-500 p-2"
            onClick={handlePayment}
          >
            Proceed To Payment
          </button> */}
          {showToast && (
            <div className="absolute left-[30%] top-0 h-auto w-full">
              <Toast
                message={toastMessage}
                showToast={showToast}
                setShowToast={setShowToast}
              />
            </div>
          )}
        </section>
      </section>
    </section>
  )
}
export default PaymentSection
