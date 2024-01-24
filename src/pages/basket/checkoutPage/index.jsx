import { useEffect } from 'react'
import Breadcrumbs from '@/components/BreadCrumbs'
import ProgressiveImageComp from '@/reuseComps/ProgressiveImageComp'
import ExpressCheckout from './ExpressCheckout'

function checkoutPage() {
  const oakleighLogo = '/Images/oakleighLogo.svg'
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
    <section className="flex h-auto w-full flex-col items-start justify-start gap-5 px-9 pt-[34px]">
      <figure className="max-h-[34px] max-w-[180px]">
        <ProgressiveImageComp src={oakleighLogo} alt={'oakleighlogo'} />
      </figure>
      <section>
        <Breadcrumbs />
      </section>
      <ExpressCheckout />
    </section>
  )
}
export default checkoutPage
