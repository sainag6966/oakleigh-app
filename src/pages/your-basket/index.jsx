import axios from 'axios'
import { useEffect, useState } from 'react'
import NextImage from '@/reuseComps/NextImage'
import ProgressiveImageComp from '@/reuseComps/ProgressiveImageComp'
import CountrySelector from '@/reuseComps/CountrySelector'

function BreadCrumb() {
  return (
    <nav aria-label="Breadcrumb" role="navigation" className="w-full">
      <nav className="flex w-full list-none gap-1 font-sans text-display-1">
        <li>
          <a>BREADCRUMB</a>
        </li>
        <li>/</li>
        <li>
          <a>BREADCRUMB</a>
        </li>
      </nav>
    </nav>
  )
}

function BasketHead() {
  return (
    <section className="flex h-auto w-full items-center justify-between gap-2">
      <section className="flex-1 text-display-12">Your Basket</section>
      <section className="relative flex h-[42px] w-full flex-1 font-sans">
        <div className="absolute bottom-0 h-[39px] w-[99%] border-[0.8px] border-textSecondary bg-textSecondary lg:w-[99.5%]" />
        <div className="absolute right-0 h-[39px] w-[99%] border-[0.8px] border-textSecondary lg:w-[99.5%]" />
        <div className="absolute bottom-[3px] left-[1%] right-[1%] h-[36px] w-[98%] border-b-[0.5px] border-l-[0.5px] border-textPrimary lg:left-[0.5%] lg:right-[0.5%] lg:w-[99%]" />
        <div className="relative flex w-full items-center justify-center text-display-4 text-textPrimary">
          Checkout Securely
        </div>
      </section>
    </section>
  )
}

function ProductDetail({ productData }) {
  const handleRemoveItem = async (item) => {
    const loginToken = localStorage.getItem('loginToken')
    const nonce = localStorage.getItem('nonce')
    const itemKey = item?.key
    const headers = {
      'Content-Type': 'application/json',
      'X-Wc-Store-Api-Nonce': nonce,
    }

    // Check if loginToken is available
    if (loginToken) {
      headers['Authorization'] = `Bearer ${loginToken}`
    }

    try {
      //   const username = 'oakleighcdadevel'
      //   const password = 'QsJY lkVy QxL8 3iFY NhhP Cto1'
      // setLoadingToast(true)
      const response = await fetch(
        `https://oakleigh.cda-development3.co.uk/cms/wp-json/wc/store/v1/cart/remove-item?key=${itemKey}`,
        {
          method: 'POST',
          headers,
          credentials: 'include',
        },
      )

      if (response.ok) {
        // Handle success (e.g., redirect to a success page)
        // const data = await response.json()
        // const cartKey = data?.cart_key
        // localStorage.setItem('cartKey', cartKey)
        // setIsBasketOpen(true)
        // setShowToast(true)
        // setLoadingToast(false)
        // setToastMessage('Item has been added to the basket')
        console.log('Signup successful!')
      } else {
        console.error(
          'Failed to add item to the basket. Status:',
          response.status,
        )
        // setShowToast(true)
        // setLoadingToast(false)
        // setToastMessage('Failed to add item to the basket')
        const errorData = await response.json() // You can log or inspect the error details
        console.error('Error Details:', errorData)
      }
    } catch (error) {
      console.error('Error:', error)
    }
  }

  return (
    <section className="flex h-auto w-full flex-col gap-5 border-t-[1.2px] border-y-search pt-[30px]">
      <section className="flex h-auto w-full flex-col gap-[26px]">
        {productData.map((item, index) => {
          return (
            <section key={index} className="flex h-auto w-full gap-11">
              <figure
                key={index}
                className="aspect-[3/4] max-h-[164px] min-w-[138px] max-w-[138px] flex-1"
              >
                <ProgressiveImageComp
                  src={item?.images[1]?.src}
                  alt={'productImage'}
                />
              </figure>
              <section className="flex flex-1 flex-col gap-2">
                <p className="text-display-11">{item?.name}</p>
                <p className="font-sans text-display-16">
                  £{item?.prices?.regular_price}
                </p>
                <p
                  className="mt-4 font-sans text-display-4"
                  onClick={() => {
                    handleRemoveItem(item)
                  }}
                >
                  <u>Remove Item</u>
                </p>
              </section>
            </section>
          )
        })}
        <section className="flex h-auto w-full items-center justify-start border-y-[1.2px] border-y-search py-[30px] font-sans">
          <u>Continue Shopping</u>
        </section>
      </section>
    </section>
  )
}

function OrderSummary() {
  const copyRightIcons = '/Images/copyRightImg.svg'
  const handleSubmit = () => {}
  const handleChange = () => {}
  const price = '£13,000.00'
  return (
    <section className="flex h-auto w-full flex-col gap-[30px]">
      <section className="flex h-auto w-full flex-col bg-search p-[30px] text-footerBg">
        <p className="pb-[25px] text-display-11">Order Summary</p>
        <section className="border-y-[1px] border-orderSummaryBorder pb-[25px] pt-[10px] font-sans">
          <p className="text-display-5">Promotion Code</p>
          <section className="h-auto w-full">
            <form className="flex h-auto w-full gap-5" onSubmit={handleSubmit}>
              <input
                type="text"
                // id="first_name"
                name="first_name"
                value=""
                placeholder="ENTER CODE"
                onChange={handleChange}
                className="h-[41px] w-full flex-1 appearance-none rounded border bg-textPrimary px-3 py-2 font-sans text-display-3 text-black"
              />
              <div className="relative flex h-[41px] w-[110px] font-sans text-display-4">
                <div className="absolute bottom-0 h-[38px] w-[107px] border-[0.5px] border-textSecondary"></div>
                <div className="absolute right-0 h-[38px] w-[107px] border-[0.5px] border-textSecondary"></div>
                <button
                  type="submit"
                  className="relative flex w-full items-center justify-center"
                >
                  Submit
                </button>
              </div>
            </form>
          </section>
        </section>
        <section className="flex h-auto w-full flex-col gap-[15px] py-[25px] font-sans">
          <section className="flex items-center justify-between text-display-5 leading-tight">
            <p>Subtotal (1 Item)</p>
            <p>{price}</p>
          </section>
          <section className="flex items-center justify-between text-display-3 leading-tight">
            <p>Promotion Code</p>
            <section className="flex items-center gap-2 text-display-1 leading-tight">
              <p>
                <u>X Remove</u>
              </p>
              <p className="text-display-3">-£100.00</p>
            </section>
          </section>
          <section className="flex items-center justify-between text-display-3 leading-tight">
            <p>Delivery</p>
            <p>£0.00</p>
          </section>
        </section>
        <section className="flex h-auto w-full items-center justify-between border-t-[1px] border-orderSummaryBorder pt-[25px] font-sans text-display-16">
          <p>Order Total</p>
          <p>{price}</p>
        </section>
      </section>
      <section className="relative flex h-[42px] w-full font-sans">
        <div className="absolute bottom-0 h-[39px] w-[99%] border-[0.8px] border-textSecondary bg-textSecondary lg:w-[99.5%]" />
        <div className="absolute right-0 h-[39px] w-[99%] border-[0.8px] border-textSecondary lg:w-[99.5%]" />
        <div className="absolute bottom-[3px] left-[1%] right-[1%] h-[36px] w-[98%] border-b-[0.5px] border-l-[0.5px] border-textPrimary lg:left-[0.5%] lg:right-[0.5%] lg:w-[99%]" />
        <div className="relative flex w-full items-center justify-center text-display-4 text-textPrimary">
          Checkout Securely
        </div>
      </section>
      <section className="flex h-auto w-full items-center justify-center">
        <NextImage
          src={copyRightIcons}
          width="234"
          height="37"
          alt="copyRight"
        />
      </section>
    </section>
  )
}

function Delivery() {
  const handleSubmit = () => {}
  const handleChange = () => {}
  return (
    <section className="flex h-auto w-full flex-col gap-5">
      <p className="text-display-11">Delivery</p>
      <CountrySelector />
      <section className="h-auto w-full">
        <form className="flex h-auto w-full gap-5" onSubmit={handleSubmit}>
          <input
            type="text"
            // id="first_name"
            name="first_name"
            value=""
            placeholder="ENTER POSTCODE"
            onChange={handleChange}
            className="h-[41px] w-full flex-1 appearance-none rounded border bg-search px-3 py-2 font-sans text-display-3 text-black"
          />
          <div className="relative flex h-[41px] w-[110px] font-sans text-display-4">
            <div className="absolute bottom-0 h-[38px] w-[107px] border-[0.5px] border-textSecondary"></div>
            <div className="absolute right-0 h-[38px] w-[107px] border-[0.5px] border-textSecondary"></div>
            <button
              type="submit"
              className="relative flex w-full items-center justify-center"
            >
              Submit
            </button>
          </div>
        </form>
      </section>
    </section>
  )
}

function YourBasket() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const emptyCart = data?.length === 0

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
        setLoading(true)
        // const username = 'lejac53041@tanlanav.com'
        // const password = 'GPYM l0x4 kojE iW1e 2JhR Enj2'
        const response = await fetch(
          'https://oakleigh.cda-development3.co.uk/cms/wp-json/wc/store/v1/cart/items',
          {
            method: 'get',
            headers,
            credentials: 'include',
          },
        )
        const responseData = await response.json()
        if (responseData) {
          setLoading(false)
        }
        setData(responseData)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }
    fetchData()
  }, [])

  return (
    <main className="flex h-auto w-full flex-col gap-6 px-9 pt-[14px]">
      <BreadCrumb />
      <BasketHead />
      {loading && (
        <div className="flex h-auto w-full items-center justify-center text-display-12">
          Loading Data...
        </div>
      )}
      {emptyCart && loading === false && (
        <div className="flex h-auto w-full items-center justify-center text-display-12">
          Your Cart is Empty
        </div>
      )}
      <ProductDetail productData={data} />
      <Delivery />
      <OrderSummary />
    </main>
  )
}
export default YourBasket

// export async function getServerSideProps(context) {
//   // const { params } = context
//   // const { productId } = params
//   const nonce = 'c84710b9fe'
//   try {
//     const username = 'ck_96e01d53953b1372491dc07807ed0f0bd896d3a3'
//     const password = 'cs_e6dc67bafbc6907125843f189e2c377eb1a40606'
//     const response = await fetch(
//       'https://oakleigh.cda-development3.co.uk/cms/wp-json/wc/store/v1/cart/items',
//       {
//         method: 'get',
//         headers: {
//           'Content-Type': 'text/plain',
//           Nonce: nonce,
//           // Authorization: 'Basic ' + btoa(username + ':' + password),
//           // Authorization: `Bearer ${nonce}`,
//           // Authorization: `Bearer ${nonce}`,
//           // Cookie:
//           //   'wp_woocommerce_session_16faeead23a0c92f8535a8c8627dd6ea=t_16d949e4b202a375cf1af9e85cce4e%257C%257C1704440878%257C%257C1704437278%257C%257C284262df850ecf68420b695b5fbc5eab',
//           // 'Access-Control-Allow-Origin': 'your-client-origin',
//           // 'Access-Control-Allow-Credentials': true,
//         },
//         credentials: 'include',
//         // withCredentials: true,
//       },
//     )
//     if (!response.ok) {
//       // Handle non-successful responses (e.g., 404, 500)
//       console.error(`API request failed with status ${response.status}`)
//       return {
//         notFound: true,
//       }
//     }
//     const data = await response.json()
//     return {
//       props: {
//         data,
//       },
//     }
//   } catch (error) {
//     // Handle network errors or other exceptions
//     console.error('Error fetching data from API:', error)
//     return {
//       props: {
//         data: null,
//       },
//     }
//   }
// }
