import { useStripe, Elements } from '@stripe/react-stripe-js'
import { ElementsConsumer } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import CardForm from '../CardForm'

const stripePromise = loadStripe(
  'pk_test_51IdGbhGLGyyBwMWYc5xmFlYPVXQ6RK0TfPmi2f0MfSxqM8A9SOtJ0b89jgcmsgYCWA0e5UMcuUAXvT0lAAVVr6XZ00xDjpyMtg',
)
function PaymentModes({ getStripeResponse, basketData }) {
  const stripe = useStripe()
  return (
    <Elements stripe={stripePromise}>
      <div className="payment-method">
        <ElementsConsumer>
          {({ elements, stripe }) => (
            <div className={'default-stripe-form payment-method-form'}>
              <div className="form">
                <CardForm
                  elements={elements}
                  stripe={stripe}
                  getStripeResponse={getStripeResponse}
                  basketData={basketData}
                  //   setPaymentSuccessData={props.setPaymentSuccessData}
                />
              </div>
            </div>
          )}
        </ElementsConsumer>
      </div>
    </Elements>
  )
}
export default PaymentModes
