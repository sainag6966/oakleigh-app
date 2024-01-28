import { useStripe } from '@stripe/react-stripe-js'
import { useElements } from '@stripe/react-stripe-js'
import { CardNumberElement } from '@stripe/react-stripe-js'
import { CardCvcElement } from '@stripe/react-stripe-js'
import { CardExpiryElement } from '@stripe/react-stripe-js'
import { useState } from 'react'

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

function CardForm() {
  const [cardNumberValid, setCardNumberValid] = useState(false)
  const [cardExpValid, setCardexpValid] = useState(false)
  const [cardCvvValid, setCardCvvValid] = useState(false)
  const [cardNumberError, setCardNumberError] = useState(false)
  const [cardExpError, setCardexpError] = useState(false)
  const [cardCvvError, setCardCvvError] = useState(false)
  const stripe = useStripe()
  const elements = useElements()
  return (
    <>
      <form>
        <label>
          Card number <span className="red-star">*</span>
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
