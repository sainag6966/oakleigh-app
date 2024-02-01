import { useStripe } from '@stripe/react-stripe-js'
import { useElements } from '@stripe/react-stripe-js'
import { CardNumberElement } from '@stripe/react-stripe-js'
import { CardCvcElement } from '@stripe/react-stripe-js'
import { CardExpiryElement } from '@stripe/react-stripe-js'
import { useEffect, useState } from 'react'

const options = {
  style: {
    base: {
      fontSize: '25px',
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

function CardForm({ getStripeResponse }) {
  const [cardNumberValid, setCardNumberValid] = useState(false)
  const [cardExpValid, setCardexpValid] = useState(false)
  const [cardCvvValid, setCardCvvValid] = useState(false)
  const [cardNumberError, setCardNumberError] = useState(false)
  const [cardExpError, setCardexpError] = useState(false)
  const [cardCvvError, setCardCvvError] = useState(false)
  const stripe = useStripe()
  const elements = useElements()

  const ownerObj = {
    billing_address: {
      first_name: 'Pikachu',
      last_name: 'Pika',
      company: '',
      address_1: '880 southern Park gate',
      address_2: 'Corner Penthouse Spook Central',
      city: 'New York',
      state: 'NY',
      postcode: '10023',
      country: 'US',
      email: 'pikachu@gmail.com',
      phone: '555-2369',
    },
    shipping_address: {
      first_name: 'Pikachu',
      last_name: 'Pika',
      company: '',
      address_1: '880 southern Park gate',
      address_2: 'Corner Penthouse Spook Central',
      city: 'New York',
      state: 'NY',
      postcode: '10023',
      country: 'US',
    },
    customer_note: 'Test notes on order.',
    create_account: false,
    payment_method: 'stripe',
    payment_data: [],
    extensions: {
      'some-extension-name': {
        'some-data-key': 'some data value',
      },
    },
  }

  const handleCardFormSubmitForm = async (event) => {
    // event.preventDefault();
    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return
    }
    const payload = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardNumberElement),
    })
    // setPayLoadState(payload)
    const ownerInfo = {
      owner: {
        name: ownerObj.billing_address.first_name, //needed cart api here
        address: {
          line1: ownerObj.billing_address.address_1,
          line2: ownerObj.billing_address.address_2,
          city: ownerObj.billing_address.city,
          postal_code: ownerObj.billing_address.postcode,
          country: ownerObj.billing_address.country,
        },
        phone: ownerObj.billing_address.phone,
        email: ownerObj.billing_address.email,
      },
    }

    const stripResonse = await stripe
      .createSource(elements.getElement(CardNumberElement), ownerInfo)
      .then(function (response) {
        if (response && response.error) {
          setCardNumberError(response.error.message)
        } else {
          let checkout = {
            payment_method: 'stripe',
            payment_data: [
              {
                key: 'stripe_source',
                value: response.source.id,
              },
              {
                key: 'paymentRequestType',
                value: 'card',
              },
              {
                key: 'wc-stripe-new-payment-method',
                value: false,
              },
              {
                key: 'billing_email',
                value:
                  ownerObj && ownerObj.billing_address.email
                    ? ownerObj.billing_address.email
                    : 'Guest',
              },
              {
                key: 'billing_first_name',
                value:
                  ownerObj && ownerObj.billing_address.first_name
                    ? ownerObj.billing_address.first_name
                    : '',
              },
              {
                key: 'billing_last_name',
                value:
                  ownerObj && ownerObj.billing_address.last_name
                    ? ownerObj.billing_address.last_name
                    : '',
              },
            ],
          }
          getStripeResponse(checkout)
          // let data = []
          // data['stripe'] = stripe
          // setPaymentSuccessData(data)
          // dispatch(updateCheckout(checkout));
          // dispatch(updateStripeToken(checkout));
          // dispatch(getStripeToken(response.source.id));
        }
      })
  }

  useEffect(() => {
    cardNumberValid &&
      cardExpValid &&
      cardCvvValid &&
      ownerObj.billing_address.first_name &&
      ownerObj.billing_address.postcode &&
      handleCardFormSubmitForm()
  }, [cardNumberValid, cardExpValid, cardCvvValid, ownerObj])

  // useEffect(() => {
  //   if (cardClear) {
  //     elements.getElement(CardNumberElement).clear()
  //     elements.getElement(CardExpiryElement).clear()
  //     elements.getElement(CardCvcElement).clear()
  //   }
  // }, [cardClear])

  return (
    <>
      <form>
        <label>
          Card number <span className="red-star">*</span>
          <p>check div</p>
          <CardNumberElement
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
          Expiry Date <span className="red-star">*</span>
          <CardExpiryElement
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
          Card Code (CVC) <span className="red-star">*</span>
          <CardCvcElement
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
    </>
  )
}
export default CardForm
