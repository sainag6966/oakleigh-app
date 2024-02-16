import { useEffect, useState } from 'react'
import { useStripe } from '@stripe/react-stripe-js'
import { useElements } from '@stripe/react-stripe-js'
import { CardNumberElement } from '@stripe/react-stripe-js'
import { CardCvcElement } from '@stripe/react-stripe-js'
import { CardExpiryElement } from '@stripe/react-stripe-js'
import Toast from '@/reuseComps/ToastMessage'

const options = {
  style: {
    base: {
      fontSize: '17px',
      color: '#31325F',
      letterSpacing: '0.025em',
      fontFamily: 'Source Code Pro, monospace',
      '::placeholder': {
        color: '#d5dce4',
      },
    },
    invalid: {
      color: '#eb1c26',
    },
  },
}

function CardForm({ getStripeResponse, basketData, cardClear }) {
  const stripe = useStripe()
  const elements = useElements()
  const [cardNumberValid, setCardNumberValid] = useState(false)
  const [cardExpValid, setCardexpValid] = useState(false)
  const [cardCvvValid, setCardCvvValid] = useState(false)
  const [cardSetup, setCardSetup] = useState(false)
  const [cardSetupText, setCardSetupText] = useState('')
  const [cardNumberError, setCardNumberError] = useState(false)
  const [cardExpError, setCardexpError] = useState(false)
  const [cardCvvError, setCardCvvError] = useState(false)
  const shippingAddress = basketData?.shipping_address
  const billingAddress = basketData?.billing_address
  const firstName = shippingAddress?.first_name
  const lastName = shippingAddress?.last_name
  const address1 = shippingAddress?.address_1
  const address2 = shippingAddress?.address_2
  const city = shippingAddress?.city
  const postCode = shippingAddress?.postcode
  const country = shippingAddress?.country
  const phone = shippingAddress?.phone
  const email = billingAddress?.email

  const handleCardFormSubmitForm = async (event) => {
    // event.preventDefault();
    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return
    }
    setCardSetup(true)
    setCardSetupText('Setting up the card, please wait...')
    const payload = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardNumberElement),
    })

    // setPayLoadState(payload)
    const ownerInfo = {
      owner: {
        name: firstName, //needed cart api here
        address: {
          line1: address1,
          line2: address2,
          city: city,
          postal_code: postCode,
          country: country,
        },
        phone: phone,
        email: email,
      },
    }
    // const { token, error } = await stripe.createToken(
    //   elements.getElement(CardNumberElement),
    // )
    const paymentId = payload?.paymentMethod?.id
    if (paymentId) {
      setCardSetup(true)
      setCardSetupText('Card setup is done. please proceed to payment')
    }
    // const stripResonse = await stripe
    //   .createSource(elements.getElement(CardNumberElement), ownerInfo)
    //   .then(function (response) {
    //     if (response && response.error) {
    //       setCardNumberError(response.error.message)
    //     } else {
    let checkout = {
      payment_method: 'stripe_cc',
      payment_data: [
        {
          key: 'stripe_cc_token_key',
          value: paymentId,
        },
        {
          key: 'stripe_cc_save_source_key',
          value: false,
        },
        { key: 'wc-stripe_cc-new-payment-method', value: false },
        // {
        //   key: 'paymentRequestType',
        //   value: 'card',
        // },
        { key: 'payment_method', value: 'stripe_cc' },
        // {
        //   key: 'wc-stripe-new-payment-method',
        //   value: false,
        // },
        // {
        //   key: 'billing_email',
        //   value: email ? email : 'Guest',
        // },
        // {
        //   key: 'billing_first_name',
        //   value: firstName ? firstName : '',
        // },
        // {
        //   key: 'billing_last_name',
        //   value: lastName ? lastName : '',
        // },
      ],
    }
    getStripeResponse(checkout)
    // let data = []
    // data['stripe'] = stripe
    // setPaymentSuccessData(data)
    // dispatch(updateCheckout(checkout));
    // dispatch(updateStripeToken(checkout));
    // dispatch(getStripeToken(response.source.id));
    // }
    // })
  }

  useEffect(() => {
    if (cardClear) {
      elements.getElement(CardNumberElement).clear()
      elements.getElement(CardExpiryElement).clear()
      elements.getElement(CardCvcElement).clear()
    }
  }, [cardClear])

  useEffect(() => {
    cardNumberValid &&
      cardExpValid &&
      cardCvvValid &&
      firstName &&
      postCode &&
      handleCardFormSubmitForm()
  }, [cardNumberValid, cardExpValid, cardCvvValid])

  // useEffect(() => {
  //   if (cardClear) {
  //     elements.getElement(CardNumberElement).clear()
  //     elements.getElement(CardExpiryElement).clear()
  //     elements.getElement(CardCvcElement).clear()
  //   }
  // }, [cardClear])

  return (
    <>
      <form className="flex flex-col gap-3 dxl:gap-5">
        <label>
          <CardNumberElement
            className="bg-search p-2 dxl:p-4"
            placeholder=""
            options={options}
            // onReady={() => {
            //   console.log('CardNumberElement [ready]')
            // }}
            onChange={(event) => {
              event?.complete
                ? setCardNumberValid(true)
                : setCardNumberValid(false)
              event && event.error && setCardNumberError(event.error.message)
              console.log('CardNumberElement [change]', event)
            }}
            // onBlur={() => {
            //   console.log('CardNumberElement [blur]')
            // }}
            // onFocus={() => {
            //   console.log('CardNumberElement [focus]')
            // }}
          />
        </label>
        <label>
          <CardExpiryElement
            className="bg-search p-2 dxl:p-4"
            options={options}
            // onReady={() => {
            //   console.log('CardNumberElement [ready]')
            // }}
            onChange={(event) => {
              event && event.complete
                ? setCardexpValid(true)
                : setCardexpValid(false)
              event && event.error && setCardexpError(event.error.message)
              console.log('CardNumberElement [change]', event)
            }}
            // onBlur={() => {
            //   console.log('CardNumberElement [blur]')
            // }}
            // onFocus={() => {
            //   console.log('CardNumberElement [focus]')
            // }}
          />
        </label>
        <label>
          <CardCvcElement
            className="bg-search p-2 dxl:p-4"
            options={options}
            // onReady={() => {
            //   console.log('CardNumberElement [ready]')
            // }}
            onChange={(event) => {
              event && event.complete
                ? setCardCvvValid(true)
                : setCardCvvValid(false)
              event && event.error && setCardCvvError(event.error.message)
              console.log('CardNumberElement [change]', event)
            }}
            // onBlur={() => {
            //   console.log('CardNumberElement [blur]')
            // }}
            // onFocus={() => {
            //   console.log('CardNumberElement [focus]')
            // }}
          />
        </label>
      </form>
      {cardSetup && (
        <section className="mt-2">
          <Toast
            message={cardSetupText}
            showToast={cardSetup}
            setShowToast={setCardSetup}
          />
        </section>
      )}
    </>
  )
}
export default CardForm
