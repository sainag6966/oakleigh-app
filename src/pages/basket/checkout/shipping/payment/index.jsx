import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Toast from '@/reuseComps/ToastMessage'
import { useStripe } from '@stripe/react-stripe-js'
import ProgressiveImageComp from '@/reuseComps/ProgressiveImageComp'
import PaymentSection from '@/components/CheckOut/PaymentSection'
import Breadcrumbs from '@/components/BreadCrumbs'
import CheckoutItems from '@/components/CheckOut/CheckoutItems'
import ShippingPage from '@/components/CheckOut/ShippingPage'
import CheckBox from '@/reuseComps/CheckBox'

function BillingBlock({ handlePayment }) {
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
            <Link href={'/basket/checkout/shipping'}>
              <u>Return To Shipping</u>
            </Link>
          </p>
        </section>
        <section
          className="relative mt-1 flex h-[42px] w-full flex-1 font-sans lg:max-w-[180px] dxl:h-[53px] dxl:max-w-[279px]"
          onClick={() => {
            handlePayment()
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
  const stripe = useStripe()
  const router = useRouter()
  const [stripeData, setStripeData] = useState({})
  const [basketData, setBasketData] = useState([])
  const [showToast, setShowToast] = useState(false)
  const [toastMessage, setToastMessage] = useState('')
  const oakleighLogo = '/Images/oakleighLogo.svg'
  const leftIcon = '/Images/leftArrow.svg'

  const getStripeResponse = (data) => {
    setStripeData(data)
  }

  const handleStripeProcess = (data) => {
    const isSuccessful = function (paymentIntent) {
      if (paymentIntent.status == 'succeeded') {
        return true
      }
      if (paymentIntent.status == 'requires_capture') {
        return true
      }
      return false
    }

    const processOrder = (result) => {
      //   setPaymentCompleted(false)
      // if (result.order_id && result.status == 'processing') {
      //   //setCreateOrderStatus(true)
      //   router.push('/checkout/order-received/' + result.data.order_id)
      //   // setSuccessMessage(true)
      //   // setOrderId(result.data.order_id)
      //   return
      // }
      if (
        result.order_id &&
        result.status == 'pending' &&
        result.payment_method == 'stripe'
      ) {
        //setSuccessMessage(true)
        //setCreateOrderStatus(true)
        //setOrderId(result.data.order_id)
        router.push('/checkout/order-received/' + result.order_id)
      } else {
        setShowToast(true)
        setToastMessage('Payment Failed Please Try Again')
      }
    }

    const stripeProcess = async (result) => {
      let clientSecret = result?.payment_result?.payment_details?.[2]?.value
      console.log(clientSecret, '!!!')
      let verificationLink =
        result?.payment_result?.payment_details?.[4]?.value.replace(
          'cms/cms',
          'cms',
        )
      if (clientSecret) {
        // const { stripe } = await paymentSuccessData

        const { paymentIntent: retrievePayment } =
          await stripe.retrievePaymentIntent(clientSecret)

        if (retrievePayment.status == 'requires_action') {
          const nextAction = await stripe.handleNextAction({
            clientSecret: clientSecret,
          })

          if (nextAction && nextAction.paymentIntent) {
            if (isSuccessful(nextAction.paymentIntent)) {
              processOrder(result)
              verificationLink && axios.get(verificationLink)
            } else {
              // toast.error("Payment failed, the PaymentIntent has a status of " + nextAction.paymentIntent.status);
              // dispatch(clearCardElement());
              setBtnText('Place Order')
            }
          } else {
            if (nextAction && nextAction.error && nextAction.error.message) {
              // toast.error(nextAction.error.message);
              // dispatch(clearCardElement());
            } else {
              // dispatch(clearCardElement());
              // toast.error("failed");
              setBtnText('Place Order')
            }
          }
        } else if (isSuccessful(retrievePayment)) {
          processOrder(result)
          verificationLink && axios.get(verificationLink)
        } else {
          // dispatch(clearCardElement());
          // toast.error("Unhandled PaymentIntent status " + retrievePayment.status);
        }
      }
    }
    if (data?.order_id) {
      let result = data
      let clientSecret = result?.payment_result?.payment_details?.[2]?.value
      if (result.payment_method === 'stripe' && clientSecret) {
        stripeProcess(result)
      } else {
        processOrder(result)
      }
    }
  }

  const formArr = {
    billing_address: basketData.billing_address,
    shipping_address: basketData.shipping_address,
    // create_account: values.create_account && values.create_account[0],
    create_account: false,
    customer_note: 'place order',
    payment_method: stripeData.payment_method,
    payment_data:
      stripeData.payment_method == 'stripe' ? stripeData.payment_data : {},
    // 'terms-field': values.terms_field,
    // billing_vat_number: values.billing_address.vat_number,
    // dpd_uk_delivery_instructions: values.dpd_uk_delivery_instructions,
    // currency: JSON.parse(localStorage.getItem('currentCurrency'))
    //   ? JSON.parse(localStorage.getItem('currentCurrency'))
    //   : 'GBP',
    currency: 'GBP',
  }

  const handlePayment = async () => {
    const nonce = localStorage.getItem('nonce')
    const loginToken = localStorage.getItem('loginToken')
    const headers = {
      'Content-Type': 'application/json',
      'X-Wc-Store-Api-Nonce': nonce,
    }

    // Check if loginToken is available
    if (loginToken) {
      headers['Authorization'] = `Bearer ${loginToken}`
    }
    try {
      const response = await fetch(
        'https://oakleigh.cda-development3.co.uk/cms/wp-json/wc/store/v1/checkout',
        {
          method: 'POST',
          headers,
          credentials: 'include',
          body: JSON.stringify(formArr),
        },
      )

      if (response.ok) {
        const data = await response.json()
        // setPaymentCompleted(true)
        handleStripeProcess(data)
      } else {
        console.error(
          'Failed to add item to the basket. Status:',
          response.status,
        )
        const errorData = await response.json()
      }
    } catch (error) {
      console.error('Error:', error)
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      const nonce = localStorage.getItem('nonce')
      const loginToken = localStorage.getItem('loginToken')
      const headers = { 'Content-Type': 'text/plain', Nonce: nonce }

      if (loginToken) {
        headers['Authorization'] = `Bearer ${loginToken}`
      }
      try {
        // setLoading(true)
        // const username = 'lejac53041@tanlanav.com'
        // const password = 'GPYM l0x4 kojE iW1e 2JhR Enj2'
        const response = await fetch(
          'https://oakleigh.cda-development3.co.uk/cms/wp-json/wc/store/v1/cart',
          {
            method: 'get',
            headers,
            credentials: 'include',
          },
        )
        const responseData = await response.json()
        if (responseData) {
          // setLoading(false)
          setBasketData(responseData)
        }
      } catch (error) {
        // setLoading(false)
      }
    }
    fetchData()
  }, [])

  return (
    <main className="relative flex h-auto w-full flex-col items-start justify-start gap-5 px-9 py-[34px] lg:gap-8 lg:px-12 lg:pb-0 lg:pt-[50px] xl:px-16 dxl:px-[143px]">
      <figure className="max-h-[34px] max-w-[180px] dxl:min-h-[60px] dxl:min-w-[304px]">
        <Link href={'/'}>
          <ProgressiveImageComp src={oakleighLogo} alt={'oakleighlogo'} />
        </Link>
      </figure>
      <section>
        <Breadcrumbs />
      </section>
      <section className="flex h-auto w-full flex-col gap-8 lg:flex-row lg:justify-between lg:gap-10 xl:gap-16">
        <section className="self-stretch bg-search lg:order-2 lg:flex-1">
          <CheckoutItems basketData={basketData} />
        </section>
        <section className="flex flex-col gap-4 lg:flex-1 lg:pb-64 dxl:gap-[50px]">
          <ShippingPage basketData={basketData} />
          <PaymentSection
            basketData={basketData}
            getStripeResponse={getStripeResponse}
          />
          <BillingBlock handlePayment={handlePayment} />
        </section>
      </section>
    </main>
  )
}
export default Payment