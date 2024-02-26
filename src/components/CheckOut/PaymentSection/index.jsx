import { useEffect, useState } from 'react'
import { useStripe } from '@stripe/react-stripe-js'
import Toast from '@/reuseComps/ToastMessage'
import PaymentModes from '@/components/CheckOut/PaymentModes'
import CheckBox from '@/reuseComps/CheckBox'
import ProgressiveImageComp from '@/reuseComps/ProgressiveImageComp'

function PaymentSection({
  basketData,
  getStripeResponse,
  cardClear,
  setPaymentMethod,
}) {
  const stripe = useStripe()
  const [showToast, setShowToast] = useState(false)
  const [toastMessage, setToastMessage] = useState('')
  const [isChecked, setIsChecked] = useState(true)
  const [selectedPayment, setSelectedPayment] = useState('stripe_cc')
  const { billing_address } = basketData
  const gateWayIcon = '/Images/gatewayIcons.svg'
  const klarnaBtn = '/Images/klarnaButton.svg'

  useEffect(() => {
    if (selectedPayment === 'stripe_cc') {
      return
    }
    handleKlarnaPayment()
  }, [selectedPayment])

  const handleKlarnaPayment = async () => {
    const payload = await stripe.createPaymentMethod({
      type: 'klarna',
      // card: elements.getElement(CardNumberElement),
      billing_details: {
        name: billing_address?.first_name,
        email: billing_address?.email,
        phone: billing_address?.phone,
        address: {
          line1: billing_address?.address_1,
          line2: billing_address?.address_2,
          state: billing_address?.state,
          city: billing_address?.city,
          postal_code: billing_address?.postcode,
          country: billing_address?.country,
        },
      },
    })
    const klarnaData = {
      payment_method: 'eh_klarna_stripe',
      klarnaId: payload?.paymentMethod?.id,
    }
    getStripeResponse(klarnaData)
  }

  const handlePaymentMethod = (type) => {
    setPaymentMethod(type)
    setSelectedPayment(type)
  }

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
          <section
            className="flex items-center gap-2 dxl:gap-4"
            onClick={() => {
              handlePaymentMethod('stripe_cc')
            }}
          >
            <CheckBox
              isChecked={selectedPayment === 'stripe_cc' ? true : false}
              setIsChecked={setIsChecked}
            />
            <p className="text-display-5 dxl:text-display-16">Credit Card</p>
          </section>
          <section className="h-[20px] w-[100px] dxl:h-[30px] dxl:w-[150px]">
            <ProgressiveImageComp src={gateWayIcon} alt="gatewayIcon" />
          </section>
        </section>
        {selectedPayment === 'stripe_cc' && (
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
        )}
      </section>
      <section>
        <section className="flex items-center justify-between">
          <section
            className="flex items-center gap-2 dxl:gap-4"
            onClick={() => {
              handlePaymentMethod('klarna')
            }}
          >
            <CheckBox
              isChecked={selectedPayment === 'klarna' ? true : false}
              setIsChecked={setIsChecked}
            />
            <p className="text-display-5 dxl:text-display-16">Klarna</p>
          </section>
          <section className="h-[30px] w-[50px]">
            <ProgressiveImageComp src={klarnaBtn} alt="klarnaBtn" />
          </section>
        </section>
      </section>
    </section>
  )
}
export default PaymentSection
