import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Breadcrumbs from '@/components/BreadCrumbs'
import axios from 'axios'
import ProgressiveImageComp from '@/reuseComps/ProgressiveImageComp'
import ExpressCheckout from './ExpressCheckout'
import Toast from '@/reuseComps/ToastMessage'
import PaymentModes from '@/components/CheckOut/PaymentModes'
import { useStripe } from '@stripe/react-stripe-js'

function checkoutPage() {
  const stripe = useStripe()
  const [stripeData, setStripeData] = useState({})
  const [showToast, setShowToast] = useState(false)
  const router = useRouter()
  const [paymentCompleted, setPaymentCompleted] = useState(false)
  const [toastMessage, setToastMessage] = useState('')
  const oakleighLogo = '/Images/oakleighLogo.svg'

  const ownerObj = {
    billing_address: {
      first_name: 'Peter',
      last_name: 'Venkman',
      company: '',
      address_1: '550 Central Park West',
      address_2: 'Corner Penthouse Spook Central',
      city: 'New York',
      state: 'NY',
      postcode: '10023',
      country: 'US',
      email: 'admin@example.com',
      phone: '555-2368',
    },
    shipping_address: {
      first_name: 'Peter',
      last_name: 'Venkman',
      company: '',
      address_1: '550 Central Park West',
      address_2: 'Corner Penthouse Spook Central',
      city: 'New York',
      state: 'NY',
      postcode: '10023',
      country: 'US',
    },
    customer_note: 'Test notes on order.',
    create_account: false,
    payment_method: 'cheque',
    payment_data: [],
    extensions: {
      'some-extension-name': {
        'some-data-key': 'some data value',
      },
    },
  }

  const formArr = {
    billing_address: ownerObj.billing_address,
    shipping_address: ownerObj.shipping_address,
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
      setPaymentCompleted(false)
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
      let verificationLink =
        result?.payment_result?.payment_details?.[4]?.value.replace(
          'cms/cms',
          'cms',
        )
      console.log(verificationLink, '!! res str')
      if (clientSecret) {
        // const { stripe } = await paymentSuccessData

        const { paymentIntent: retrievePayment } =
          await stripe.retrievePaymentIntent(clientSecret)

        if (retrievePayment.status == 'requires_action') {
          const nextAction = await stripe.handleNextAction({
            clientSecret: clientSecret,
          })

          if (nextAction && nextAction.paymentIntent) {
            console.log(nextAction.paymentIntent.status, '!! res str')
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
        console.log('!! res res')
        stripeProcess(result)
      } else {
        processOrder(result)
      }
    }
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
        'https://oakleigh.cda-development3.co.uk/cms/wp-json/wc/store/checkout',
        {
          method: 'POST',
          headers,
          credentials: 'include',
          body: JSON.stringify(formArr),
        },
      )

      if (response.ok) {
        const data = await response.json()
        setPaymentCompleted(true)
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

      // Check if loginToken is available
      if (loginToken) {
        headers['Authorization'] = `Bearer ${loginToken}`
      }
      try {
        // setLoading(true)
        // const username = 'lejac53041@tanlanav.com'
        // const password = 'GPYM l0x4 kojE iW1e 2JhR Enj2'
        const response = await fetch(
          'https://oakleigh.cda-development3.co.uk/cms/wp-json/wc/store/v1/checkout',
          {
            method: 'get',
            headers,
            credentials: 'include',
          },
        )
        const responseData = await response.json()
        if (responseData) {
          // setLoading(false)
        }
        setData(responseData)
        if (!responseData.ok) {
          // Handle non-successful responses (e.g., 404, 500)
          console.error(`API request failed with status ${response.status}`)
        }
      } catch (error) {
        // setLoading(false)
      }
    }
    fetchData()
  }, [])

  return (
    <main className="relative flex h-auto w-full flex-col items-start justify-start gap-5 px-9 pt-[34px]">
      <figure className="max-h-[34px] max-w-[180px]">
        <ProgressiveImageComp src={oakleighLogo} alt={'oakleighlogo'} />
      </figure>
      <section>
        <Breadcrumbs />
      </section>
      <ExpressCheckout />
      <PaymentModes getStripeResponse={getStripeResponse} />
      <button
        className="border-[1px] bg-orange-500 p-2"
        onClick={handlePayment}
      >
        Proceed To Payment
      </button>
      {showToast && (
        <div className="absolute left-[30%] top-0 h-auto w-full">
          <Toast
            message={toastMessage}
            showToast={showToast}
            setShowToast={setShowToast}
          />
        </div>
      )}
    </main>
  )
}
export default checkoutPage
