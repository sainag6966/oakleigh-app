import { useStripe } from '@stripe/react-stripe-js'
import { useElements } from '@stripe/react-stripe-js'
import { CardNumberElement } from '@stripe/react-stripe-js'
import { CardCvcElement } from '@stripe/react-stripe-js'
import { CardExpiryElement } from '@stripe/react-stripe-js'
import { useEffect, useState } from 'react'

const options = {
  style: {
    base: {
      fontSize: '15px',
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

function CardForm({ getStripeResponse, basketData }) {
  console.log(basketData, '!! bas here')
  const stripe = useStripe()
  const elements = useElements()
  const [cardNumberValid, setCardNumberValid] = useState(false)
  const [cardExpValid, setCardexpValid] = useState(false)
  const [cardCvvValid, setCardCvvValid] = useState(false)
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

  // const ownerObj = {
  //   billing_address: {
  //     first_name: 'Pikachu',
  //     last_name: 'Pika',
  //     company: '',
  //     address_1: '880 southern Park gate',
  //     address_2: 'Corner Penthouse Spook Central',
  //     city: 'New York',
  //     state: 'NY',
  //     postcode: '10023',
  //     country: 'US',
  //     email: 'pikachu@gmail.com',
  //     phone: '555-2369',
  //   },
  //   shipping_address: {
  //     first_name: 'Pikachu',
  //     last_name: 'Pika',
  //     company: '',
  //     address_1: '880 southern Park gate',
  //     address_2: 'Corner Penthouse Spook Central',
  //     city: 'New York',
  //     state: 'NY',
  //     postcode: '10023',
  //     country: 'US',
  //   },
  //   customer_note: 'Test notes on order.',
  //   create_account: false,
  //   payment_method: 'stripe',
  //   payment_data: [],
  //   extensions: {
  //     'some-extension-name': {
  //       'some-data-key': 'some data value',
  //     },
  //   },
  // }

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
                value: email ? email : 'Guest',
              },
              {
                key: 'billing_first_name',
                value: firstName ? firstName : '',
              },
              {
                key: 'billing_last_name',
                value: lastName ? lastName : '',
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
      <form className="flex flex-col gap-3">
        <label>
          <CardNumberElement
            className="bg-search p-2"
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
            className="bg-search p-2"
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
            className="bg-search p-2"
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
