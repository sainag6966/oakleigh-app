import axios from 'axios'
import { use, useEffect, useState } from 'react'
import NextImage from '@/reuseComps/NextImage'
import ProgressiveImageComp from '@/reuseComps/ProgressiveImageComp'
import CountrySelector from '@/reuseComps/CountrySelector'
import { useRouter } from 'next/router'
import Toast from '@/reuseComps/ToastMessage'
import Spinner from '@/reuseComps/Spinner'
import Breadcrumbs from '@/components/BreadCrumbs'

// function BreadCrumb() {
//   return (
//     <nav aria-label="Breadcrumb" role="navigation" className="w-full">
//       <nav className="flex w-full list-none gap-1 font-sans text-display-1">
//         {/* <li>
//           <a>BREADCRUMB</a>
//         </li>
//         <li>/</li>
//         <li>
//           <a>BREADCRUMB</a>
//         </li> */}
//         <Breadcrumbs />
//       </nav>
//     </nav>
//   )
// }

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

function ProductDetail({ productData, handleRemoveCta }) {
  const [removing, setRemoving] = useState(false)
  const [selectedItem, setSelectedItem] = useState(false)
  const router = useRouter()

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
      setSelectedItem(item)
      setRemoving(true)
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
        handleRemoveCta()
        setRemoving(false)
      } else {
        const errorData = await response.json() // You can log or inspect the error details
      }
    } catch (error) {}
  }

  return (
    <section className="flex h-auto w-full flex-col gap-5 border-t-[1.2px] border-y-search pt-[30px]">
      <section className="flex h-auto w-full flex-col gap-[26px]">
        {productData.map((item, index) => {
          return (
            <section
              key={index}
              className="flex h-auto w-full gap-[10%] sm:gap-11"
            >
              <figure
                key={index}
                className="aspect-[3/4] max-h-[164px] min-w-[138px] max-w-[138px] flex-1"
              >
                <ProgressiveImageComp
                  src={item?.images[1]?.src}
                  alt={'productImage'}
                />
              </figure>
              <section className="flex flex-1 flex-col gap-2 break-words">
                <p className="text-display-11 [overflow-wrap:anywhere]">
                  {item?.name}
                </p>
                <p className="font-sans text-display-16">
                  £{item?.prices?.regular_price}
                </p>
                <section className="mt-4 cursor-pointer font-sans text-display-4">
                  {removing && selectedItem?.id === item?.id ? (
                    <section className="flex gap-2">
                      <Spinner width={25} height={25} />
                      <p>Removing Item...</p>
                    </section>
                  ) : (
                    <u
                      onClick={() => {
                        handleRemoveItem(item)
                      }}
                    >
                      Remove Item
                    </u>
                  )}
                </section>
              </section>
            </section>
          )
        })}
        <section
          className="flex h-auto w-full cursor-pointer items-center justify-start border-y-[1.2px] border-y-search py-[30px] font-sans"
          onClick={() => {
            router.push('/Product-Listing')
          }}
        >
          <u>Continue Shopping</u>
        </section>
      </section>
    </section>
  )
}

function OrderSummary({ productData, handleRemoveCta }) {
  const [coupon, setCoupon] = useState('')
  const [promoToast, setPromoToast] = useState(false)
  const [promoToastMsg, setPromoToastMsg] = useState('')
  const [addingPromo, setAddingPromo] = useState(false)
  const [removingPromo, setRemovingPromo] = useState(false)
  const copyRightIcons = '/Images/copyRightImg.svg'
  const itemText = productData?.items.length === 1 ? 'item' : 'items'
  const price = productData?.totals?.total_items
  const totalPrice = productData?.totals?.total_price
  const couponCode = productData?.coupons[0]?.code
  const isCouponAvailable = productData?.coupons?.length
  const couponDiscount = productData?.coupons[0]?.totals?.total_discount || '0'
  const deliveryRate = productData?.totals?.total_shipping

  const handleRemoveCoupon = async () => {
    const nonce = localStorage.getItem('nonce')
    const loginToken = localStorage.getItem('loginToken')
    const headers = { 'Content-Type': 'text/plain', Nonce: nonce }

    // Check if loginToken is available
    if (loginToken) {
      headers['Authorization'] = `Bearer ${loginToken}`
    }
    try {
      setRemovingPromo(true)
      // setLoading(true)

      // const username = 'lejac53041@tanlanav.com'
      // const password = 'GPYM l0x4 kojE iW1e 2JhR Enj2'
      const response = await fetch(
        `https://oakleigh.cda-development3.co.uk/cms/wp-json/wc/store/v1/cart/coupons?code=${coupon}`,
        {
          method: 'delete',
          headers,
          credentials: 'include',
        },
      )
      const responseData = await response.json()
      if (responseData) {
        setRemovingPromo(false)
        handleRemoveCta()
        // setLoading(false)
      }
      // setData(responseData)
    } catch (error) {}
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!coupon) {
      setPromoToast(true)
      setPromoToastMsg('Please enter the Coupon code')
      return
    }
    const nonce = localStorage.getItem('nonce')
    const loginToken = localStorage.getItem('loginToken')
    const headers = { 'Content-Type': 'text/plain', Nonce: nonce }

    // Check if loginToken is available
    if (loginToken) {
      headers['Authorization'] = `Bearer ${loginToken}`
    }
    try {
      setAddingPromo(true)
      const response = await fetch(
        `https://oakleigh.cda-development3.co.uk/cms/wp-json/wc/store/v1/cart/coupons?code=${coupon}`,
        {
          method: 'post',
          headers,
          credentials: 'include',
        },
      )
      const responseData = await response.json()
      if (responseData) {
        setAddingPromo(false)
        if (!responseData?.discount_type) {
          setPromoToast(true)
          setPromoToastMsg('Please enter a valid Coupon code')
          return
        }
        handleRemoveCta()
      }
    } catch (error) {}
  }

  const handleChange = (e) => {
    e.preventDefault()
    const { value } = e?.target
    setCoupon(value)
  }

  return (
    <section className="mt-2 flex h-auto w-full flex-col gap-[30px]">
      <section className="flex h-auto w-full flex-col bg-search p-[30px] text-footerBg">
        <p className="pb-[25px] text-display-11">Order Summary</p>
        <section className="border-y-[1px] border-orderSummaryBorder pb-[25px] pt-[10px] font-sans">
          <p className="text-display-5">Promotion Code</p>
          <section className="h-auto w-full">
            <form className="flex h-auto w-full gap-5" onSubmit={handleSubmit}>
              <input
                type="text"
                id="first_name"
                name="first_name"
                value={coupon}
                placeholder="ENTER CODE"
                onChange={handleChange}
                className="h-[41px] w-full flex-1 appearance-none rounded border bg-textPrimary px-7 py-2 font-sans text-display-3 text-black"
              />
              <div className="relative flex h-[41px] w-[110px] cursor-pointer font-sans text-display-4">
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
            {promoToast && (
              <div className="mt-3 h-auto w-full">
                <Toast
                  message={promoToastMsg}
                  showToast={promoToast}
                  setShowToast={setPromoToast}
                />
              </div>
            )}
            {addingPromo && (
              <section className="mt-4 flex gap-2">
                <Spinner width={25} height={25} />
                <p>Adding Promo Code...</p>
              </section>
            )}
          </section>
        </section>
        <section className="flex h-auto w-full flex-col gap-[15px] py-[25px] font-sans">
          <section className="flex items-center justify-between text-display-5 leading-tight">
            <p>
              Subtotal ({productData?.items?.length} {itemText})
            </p>
            <p>{price}.00</p>
          </section>
          <section className="flex items-center justify-between text-display-3 leading-tight">
            <p>Promotion Code</p>
            <section
              className="flex items-center gap-2 text-display-1 leading-tight"
              onClick={handleRemoveCoupon}
            >
              {isCouponAvailable ? (
                <p className="cursor-pointer">
                  <u>X Remove</u>
                </p>
              ) : null}
              <p className="text-display-3">-£{couponDiscount}.00</p>
            </section>
          </section>
          {removingPromo && (
            <section className="flex gap-2">
              <Spinner width={25} height={25} />
              <p>Removing Promo Code...</p>
            </section>
          )}
          <section className="flex items-center justify-between text-display-3 leading-tight">
            <p>Delivery</p>
            <p>£{deliveryRate}.00</p>
          </section>
        </section>
        <section className="flex h-auto w-full items-center justify-between border-t-[1px] border-orderSummaryBorder pt-[25px] font-sans text-display-16">
          <p>Order Total</p>
          <p>{totalPrice}.00</p>
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

function Delivery({ handleRemoveCta, productData }) {
  const [countryCode, setCountryCode] = useState('')
  const [postCode, setPostCode] = useState('')
  const [showToast, setShowToast] = useState(false)
  const [toastMessage, setToastMessage] = useState('')
  const [addingDeliveryInfo, setAddingDeliveryInfo] = useState(false)
  const selectedCountry = productData?.shipping_address?.country
  let enteredPostalCode = productData?.shipping_address?.postcode

  const handleChange = (e) => {
    e.preventDefault()
    const { value } = e?.target
    setPostCode(value)
  }

  const handleSubmit = async (e) => {
    console.log(postCode, '!!')
    e.preventDefault()
    // if (
    //   (!selectedCountry || !enteredPostalCode) &&
    //   (!countryCode || !postCode)
    // ) {
    //   setShowToast(true)
    //   setToastMessage('Please enter/select required fields')
    //   return
    // }
    const nonce = localStorage.getItem('nonce')
    const loginToken = localStorage.getItem('loginToken')
    const headers = { 'Content-Type': 'application/json', Nonce: nonce }
    const postData = {
      shipping_address: {
        country: String(countryCode ? countryCode : selectedCountry),
        postcode: String(postCode),
      },
    }

    // Check if loginToken is available
    if (loginToken) {
      headers['Authorization'] = `Bearer ${loginToken}`
    }
    try {
      setAddingDeliveryInfo(true)
      const response = await fetch(
        'https://oakleigh.cda-development3.co.uk/cms/wp-json/wc/store/v1/cart/update-customer',
        {
          method: 'POST',
          headers,
          body: JSON.stringify(postData),
          credentials: 'include',
        },
      )
      const responseData = await response.json()

      if (responseData) {
        if (responseData?.data?.status === 400) {
          setAddingDeliveryInfo(false)
          setShowToast(true)
          setToastMessage('Please enter Valid Postcode')
          return
        }
        setAddingDeliveryInfo(false)
        handleRemoveCta()
      }
    } catch (error) {}
  }

  return (
    <section className="flex h-auto w-full flex-col gap-5">
      <p className="text-display-11">Delivery</p>
      <CountrySelector
        setCountryCode={setCountryCode}
        selectedCountry={selectedCountry}
      />
      <section className="h-auto w-full">
        <form className="flex h-auto w-full gap-5" onSubmit={handleSubmit}>
          <input
            type="text"
            id="first_name"
            name="first_name"
            value={postCode}
            placeholder="ENTER POSTCODE"
            onChange={handleChange}
            className="h-[41px] w-full flex-1 appearance-none rounded border bg-search px-7 py-2 font-sans text-display-3 text-black"
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
      {addingDeliveryInfo && (
        <section className="mt-4 flex gap-2">
          <Spinner width={25} height={25} />
          <p>Adding Delivery Info...</p>
        </section>
      )}
      {showToast && (
        <div className="mt-3 h-auto w-full">
          <Toast
            message={toastMessage}
            showToast={showToast}
            setShowToast={setShowToast}
          />
        </div>
      )}
    </section>
  )
}

function YourBasket() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [removeItem, setRemoveItem] = useState(false)
  const emptyCart = data?.length === 0

  const handleRemoveCta = () => {
    setRemoveItem(!removeItem)
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
        setLoading(true)
        // const username = 'lejac53041@tanlanav.com'
        // const password = 'GPYM l0x4 kojE iW1e 2JhR Enj2'
        const response = await fetch(
          'https://oakleigh.cda-development3.co.uk/cms/wp-json/wc/store/v1/cart',
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
        setLoading(false)
      }
    }
    fetchData()
    window.scrollTo(0, 0)
  }, [removeItem])

  return (
    <main className="flex h-auto w-full flex-col gap-6 px-9 pt-[14px]">
      <Breadcrumbs />
      {loading ? (
        <section className="flex h-auto w-full items-center justify-center">
          <Spinner width={50} height={50} />
        </section>
      ) : emptyCart ? (
        <div className="flex h-auto w-full items-center justify-center text-display-12">
          Your Cart is Empty
        </div>
      ) : (
        <section className="flex h-auto w-full flex-col gap-6">
          {' '}
          <BasketHead />
          <ProductDetail
            productData={data?.items}
            handleRemoveCta={handleRemoveCta}
          />
          <Delivery productData={data} handleRemoveCta={handleRemoveCta} />
          <OrderSummary productData={data} handleRemoveCta={handleRemoveCta} />
        </section>
      )}
    </main>
  )
}
export default YourBasket
