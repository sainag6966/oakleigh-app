import { useStripe, Elements } from '@stripe/react-stripe-js'
import { ElementsConsumer } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import CardForm from '../CardForm'

const stripePromise = loadStripe(
  'pk_test_51IdGbhGLGyyBwMWYc5xmFlYPVXQ6RK0TfPmi2f0MfSxqM8A9SOtJ0b89jgcmsgYCWA0e5UMcuUAXvT0lAAVVr6XZ00xDjpyMtg',
)
function PaymentModes({ getStripeResponse }) {
  const stripe = useStripe()
  return (
    <Elements stripe={stripePromise}>
      <div className="payment-method">
        <ElementsConsumer>
          {({ elements, stripe }) => (
            <div className={'default-stripe-form payment-method-form'}>
              <input
                type="radio"
                id="payment_method_stripe4"
                name={'payment_method_stripe'}
              />
              <label htmlFor="payment_method_stripe4">
                Use a new payment method
              </label>
              <div className="form">
                <CardForm
                  elements={elements}
                  stripe={stripe}
                  getStripeResponse={getStripeResponse}
                  //   setPaymentSuccessData={props.setPaymentSuccessData}
                />
                <label className="check-box">
                  <input
                    type="checkbox"
                    value={1}
                    // onClick={(e) => {
                    //   handleOnclickSaveCard(e)
                    // }}
                  />{' '}
                  Save payment information to my account for future purchases.
                </label>
              </div>
            </div>
          )}
        </ElementsConsumer>
      </div>
    </Elements>
  )
}
export default PaymentModes
