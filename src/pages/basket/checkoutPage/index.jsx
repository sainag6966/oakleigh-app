import { useEffect } from 'react'
import Breadcrumbs from '@/components/BreadCrumbs'
import ProgressiveImageComp from '@/reuseComps/ProgressiveImageComp'
import ExpressCheckout from './ExpressCheckout'

function checkoutPage() {
  const oakleighLogo = '/Images/oakleighLogo.svg'

  const handlePayment = async () => {
    const nonce = localStorage.getItem('nonce')
    const loginToken = localStorage.getItem('loginToken')
    const paymentDetails = [
      {
        key: 'stripe_source',
        value: 'src_xxxxxxxxxxxxx',
      },
      {
        key: 'billing_email',
        value: 'myemail@email.com',
      },
      {
        key: 'billing_first_name',
        value: 'Jane',
      },
      {
        key: 'billing_last_name',
        value: 'Doe',
      },
      {
        key: 'paymentMethod',
        value: 'stripe',
      },
      {
        key: 'paymentRequestType',
        value: 'cc',
      },
      {
        key: 'wc-stripe-new-payment-method',
        value: true,
      },
    ]
    const paymentData = {
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
      customer_note: 'test notes on order',
      payment_method: 'stripe',
      payment_data: paymentDetails || {},
      // 'terms-field': values.terms_field,
      // "billing_vat_number": values.billing_address.vat_number,
      // 'dpd_uk_delivery_instructions': values.dpd_uk_delivery_instructions
    }
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
          body: JSON.stringify(paymentData),
        },
      )

      if (response.ok) {
        const data = await response.json()
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
    <main className="flex h-auto w-full flex-col items-start justify-start gap-5 px-9 pt-[34px]">
      <figure className="max-h-[34px] max-w-[180px]">
        <ProgressiveImageComp src={oakleighLogo} alt={'oakleighlogo'} />
      </figure>
      <section>
        <Breadcrumbs />
      </section>
      <ExpressCheckout />
      <button
        className="border-[1px] bg-orange-500 p-2"
        onClick={handlePayment}
      >
        Proceed To Payment
      </button>
    </main>
  )
}
export default checkoutPage
