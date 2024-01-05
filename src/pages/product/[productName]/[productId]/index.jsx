import Toast from '@/reuseComps/ToastMessage'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import Cookies from 'js-cookie'
import BasketDrawer from '@/components/BasketDrawer'
import InstallmentButton from '@/reuseComps/InstallmentButton'
import ImageComp from '@/reuseComps/ImageComp'
import ApplePayButton from '@/reuseComps/ApplePayButton'
import SmallPromiseBlock from '@/components/ContentBlocks/SmallPromiseBlock'
import ProductMeta from '@/components/ProductMeta'
import CustomVimeoPlayer from '@/reuseComps/CustomVimeoPlayer'
import axios from 'axios'

function ProductDetailPage({ data }) {
  const { price, name } = data
  const [showToast, setShowToast] = useState(false)
  const [toastMessage, setToastMessage] = useState('')
  const [loadingToast, setLoadingToast] = useState(false)
  const [isBasketOpen, setIsBasketOpen] = useState(false)
  const [nonce, setNonce] = useState('')
  const vimeoVideoId = '884473540'
  const requiredMeta = [
    'product_year',
    'whats_included_text',
    'product_reference',
  ]
  const requiredMetaData = data?.meta_data?.filter((item) => {
    return requiredMeta.includes(item?.key)
  })
  const imgSrc = data?.images[0]?.src
  const imageList = data?.images
  const productPrice = data?.price

  useEffect(() => {
    Cookies.set('woocommerce_items_in_cart', '1', { expires: 7 })
    Cookies.set('woocommerce_cart_hash', 'e6c0eb6d73b547652811d739079d2a10', {
      expires: 7,
    })
    Cookies.set(
      'wp_woocommerce_session_16faeead23a0c92f8535a8c8627dd6ea',
      't_9ca03c2ca695bcb83142cc77df4d18%7C%7C1704522677%7C%7C1704519077%7C%7Cf1ee9b509af174e8e332660dc2b0108a',
      {
        expires: 7,
      },
    )
    const getNouce = async () => {
      try {
        const response = await fetch(
          'https://oakleigh.cda-development3.co.uk/cms/wp-json/wp/v2/wc-nonce',
          {
            method: 'get',
          },
        )

        if (response.ok) {
          const data = await response.json()
          const nonceid = data?.Nonce
          localStorage.setItem('nonce', nonceid)
          setNonce(nonceid)
        } else {
          console.error(
            'Failed to add item to the basket. Status:',
            response.status,
          )
          const errorData = await response.json()
          console.error('Error Details:', errorData)
        }
      } catch (error) {
        console.error('Error:', error)
      }
    }
    getNouce()
  }, [])

  const handleAddToBasket = async () => {
    const productId = String(data?.id)
    const quantity = '1'
    const productData = { id: productId, quantity: quantity }
    const token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
    try {
      //   const username = 'oakleighcdadevel'
      //   const password = 'QsJY lkVy QxL8 3iFY NhhP Cto1'
      setLoadingToast(true)
      const response = await fetch(
        'https://oakleigh.cda-development3.co.uk/cms/wp-json/wc/store/v1/cart/add-item',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Nonce: nonce,
            // Authorization: `Bearer ${token}`,
            // Authorization: 'Basic ' + btoa(username + ':' + password),
          },
          credentials: 'include',
          // SameSite: 'None',
          // credentials: 'include',
          body: JSON.stringify(productData),
        },
      )

      if (response.ok) {
        console.log(response)
        // Handle success (e.g., redirect to a success page)
        const data = await response.json()
        const cartKey = data?.cart_key
        localStorage.setItem('cartKey', cartKey)
        setIsBasketOpen(true)
        setShowToast(true)
        setLoadingToast(false)
        setToastMessage('Item has been added to the basket')
        console.log('Signup successful!')
      } else {
        console.error(
          'Failed to add item to the basket. Status:',
          response.status,
        )
        setShowToast(true)
        setLoadingToast(false)
        setToastMessage('Failed to add item to the basket')
        const errorData = await response.json() // You can log or inspect the error details
        console.error('Error Details:', errorData)
      }
    } catch (error) {
      console.error('Error:', error)
    }
  }
  return (
    <main className="flex h-auto w-full flex-col items-center justify-between gap-[50px] px-[141px] pt-[25px] text-footerBg">
      <nav aria-label="Breadcrumb" role="navigation" className="w-full">
        <nav className="flex w-full list-none gap-1 font-sans text-[15px]">
          <li>
            <a>BREADCRUMB</a>
          </li>
          <li>/</li>
          <li>
            <a>BREADCRUMB</a>
          </li>
        </nav>
      </nav>
      <section className="flex h-auto w-full flex-col gap-[70px]">
        <section className="flex h-auto w-full items-start justify-between gap-[168px]">
          <section className="grid-rows-auto flex-1.1 grid grid-cols-2 gap-[30px]">
            {imageList.map((image, index) => {
              return (
                <figure key={index} className="relative h-[458px] w-[387px]">
                  <ImageComp src={image.src} alt={'productImg'} />
                </figure>
              )
            })}
          </section>
          <section className="flex flex-1 flex-col gap-[30px] font-sans">
            <h1 className="font-cormorant text-display-14">{name}</h1>
            <h5 className="text-display-11 font-semibold">£{price}</h5>
            <section className="flex items-center justify-between border-y-[1px] border-search py-[30px] text-display-6">
              {requiredMetaData.map((e) => {
                return (
                  e.key === 'product_reference' && (
                    <div className="flex items-center justify-start gap-2">
                      <p className="font-semibold">Ref No:</p>
                      <p>{e.value}</p>
                    </div>
                  )
                )
              })}
              {requiredMetaData.map((e) => {
                return (
                  e.key === 'product_year' && (
                    <div className="flex items-center justify-start gap-2">
                      <p className="font-semibold">Year:</p>
                      <p>{e.value}</p>
                    </div>
                  )
                )
              })}
              {requiredMetaData.map((e) => {
                return (
                  e.key === 'whats_included_text' && (
                    <div className="flex items-center justify-start gap-2">
                      <p className="font-semibold">{`What's Included:`}</p>
                      {/* <p className="line-clamp-1">{e.value}</p> */}
                    </div>
                  )
                )
              })}
            </section>
            <section
              className="relative flex h-[53px] w-full"
              onClick={handleAddToBasket}
            >
              <div className="absolute bottom-0 h-[50px] w-[99%] border-[0.5px] border-textSecondary bg-textSecondary lg:w-[99.5%]" />
              <div className="absolute right-0 h-[50px] w-[99%] border-[0.5px] border-textSecondary lg:w-[99.5%]" />
              <div className="lg:left-[0.5%]left-[1%] absolute bottom-[3px] right-[1%] h-[47px] w-[98%] border-b-[0.5px] border-l-[0.5px] border-textPrimary lg:right-[0.5%] lg:w-[99%]" />
              <div className="relative flex w-full items-center justify-center text-display-4 text-textPrimary xl:text-display-17">
                Add To Basket
              </div>
            </section>
            <section className="flex h-auto w-full items-center justify-between gap-[30px]">
              <div className="flex-1">
                <InstallmentButton />
              </div>
              <div>
                <ApplePayButton />
              </div>
            </section>
            <section className="h-auto w-full">
              <p className="text-display-6">
                Lorem ipsum dolor sit amet finance <u>website link here</u>
              </p>
            </section>
            <SmallPromiseBlock />
          </section>
        </section>
        <section className="h-[452px] w-[804px]">
          <CustomVimeoPlayer videoId={vimeoVideoId} width={804} height={452} />
        </section>
        <ProductMeta />
      </section>
      {loadingToast && <p>Adding item to the Basket... Please Wait...</p>}
      <div className="h-auto w-full">
        <Toast
          message={toastMessage}
          showToast={showToast}
          setShowToast={setShowToast}
        />
      </div>
      {isBasketOpen && (
        <BasketDrawer
          imageSrc={imgSrc}
          productName={data?.name}
          productPrice={productPrice}
          setIsBasketOpen={setIsBasketOpen}
          isFromHeader={false}
        />
      )}
    </main>
    // <div className="relative flex h-auto w-full flex-col gap-4">
    //   <p>product name : {data?.name}</p>
    //   <img className="h-60 w-80" src={imgSrc}></img>
    //   <button
    //     onClick={handleAddToBasket}
    //     className="flex h-[20px] w-[150px] items-center justify-center border-[2px] border-black bg-orange-300 p-4"
    //   >
    //     Add To Basket
    //   </button>
    //   {loadingToast && <p>Adding item to the Basket... Please Wait...</p>}
    //   <div className="h-auto w-full">
    //     <Toast
    //       message={toastMessage}
    //       showToast={showToast}
    //       setShowToast={setShowToast}
    //     />
    //   </div>
    //   <p>product name : {data?.name}</p>
    //   <img className="h-60 w-80" src={imgSrc}></img>
    //   <button
    //     onClick={handleAddToBasket}
    //     className="flex h-[20px] w-[150px] items-center justify-center border-[2px] border-black bg-orange-300 p-4"
    //   >
    //     Add To Basket
    //   </button>
    //   {loadingToast && <p>Adding item to the Basket... Please Wait...</p>}
    //   <div className="h-auto w-full">
    //     <Toast
    //       message={toastMessage}
    //       showToast={showToast}
    //       setShowToast={setShowToast}
    //     />
    //   </div>
    //   <p>product name : {data?.name}</p>
    //   <img className="h-60 w-80" src={imgSrc}></img>
    //   <button
    //     onClick={handleAddToBasket}
    //     className="flex h-[20px] w-[150px] items-center justify-center border-[2px] border-black bg-orange-300 p-4"
    //   >
    //     Add To Basket
    //   </button>
    //   {loadingToast && <p>Adding item to the Basket... Please Wait...</p>}
    //   <div className="h-auto w-full">
    //     <Toast
    //       message={toastMessage}
    //       showToast={showToast}
    //       setShowToast={setShowToast}
    //     />
    //   </div>
    //   {isBasketOpen && (
    //     <BasketDrawer
    //       imageSrc={imgSrc}
    //       productName={data?.name}
    //       productPrice={productPrice}
    //       setIsBasketOpen={setIsBasketOpen}
    //       isFromHeader={false}
    //     />
    //   )}
    // </div>
  )
}
export default ProductDetailPage

export async function getServerSideProps(context) {
  const { params } = context
  const { productId } = params
  try {
    const username = 'ck_96e01d53953b1372491dc07807ed0f0bd896d3a3'
    const password = 'cs_e6dc67bafbc6907125843f189e2c377eb1a40606'
    const response = await fetch(
      `https://oakleigh.cda-development3.co.uk/cms/wp-json/wc/v3/products/${productId}`,
      {
        method: 'get',
        headers: {
          'Content-Type': 'text/plain',
          Authorization: 'Basic ' + btoa(username + ':' + password),
        },
      },
    )
    if (!response.ok) {
      // Handle non-successful responses (e.g., 404, 500)
      console.error(`API request failed with status ${response.status}`)
      return {
        notFound: true,
      }
    }
    const data = await response.json()
    return {
      props: {
        data,
      },
    }
  } catch (error) {
    // Handle network errors or other exceptions
    console.error('Error fetching data from API:', error)
    return {
      props: {
        data: null,
      },
    }
  }
}
