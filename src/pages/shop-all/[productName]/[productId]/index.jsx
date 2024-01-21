import { useEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import ProgressiveImageComp from '@/reuseComps/ProgressiveImageComp'
import ProductDetail from '@/components/ProductPage/ProductDetail'
import ProductMeta from '@/components/ProductMeta'
import BasketDrawer from '@/components/BasketDrawer'
import InstallmentButton from '@/reuseComps/InstallmentButton'
import ApplePayButton from '@/reuseComps/ApplePayButton'
import SmallPromiseBlock from '@/components/ContentBlocks/SmallPromiseBlock'
import CustomVimeoPlayer from '@/reuseComps/CustomVimeoPlayer'
import Breadcrumbs from '@/components/BreadCrumbs'
import Spinner from '@/reuseComps/Spinner'
import Toast from '@/reuseComps/ToastMessage'

function ProductDetailPage({ data }) {
  const { price = '', price_html, name, stock_status } = data
  const [showToast, setShowToast] = useState(false)
  const [toastMessage, setToastMessage] = useState('')
  const [loadingToast, setLoadingToast] = useState(false)
  const [isBasketOpen, setIsBasketOpen] = useState(false)
  const [nonce, setNonce] = useState('')
  const stockStatus = stock_status === 'instock'
  const isDesktop = useMediaQuery({ query: '(min-width:900px)' })
  const isLargeScreen = useMediaQuery({ query: '(min-width:1280px)' })
  const isxLargeScreen = useMediaQuery({ query: '(min-width:1680px)' })
  const requiredMeta = [
    'product_year',
    'whats_included_text',
    'product_reference',
    '_jet_woo_product_vimeo_video_url',
  ]
  const requiredMetaData = data?.meta_data?.filter((item) => {
    return requiredMeta.includes(item?.key)
  })
  const imgSrc = data?.images[0]?.src
  const imageList = data?.images
  const productPrice = data?.price

  const getVimeoId = () => {
    const urlObject = requiredMetaData.filter((e) => {
      return e?.key === '_jet_woo_product_vimeo_video_url'
    })
    const vimeoUrl = urlObject[0]?.value
    const regex = /vimeo\.com\/(\d+)\?/
    const match = vimeoUrl?.match(regex)
    const vimeoVideoId = (match && match[1]) || '246115326'
    return vimeoVideoId
  }
  useEffect(() => {
    const getNonce = async () => {
      const loginToken = localStorage.getItem('loginToken')
      const headers = {}
      if (loginToken) {
        headers['Authorization'] = `Bearer ${loginToken}`
      }
      try {
        const response = await fetch(
          'https://oakleigh.cda-development3.co.uk/cms/wp-json/wp/v2/wc-nonce',
          {
            method: 'get',
            headers,
          },
        )

        if (response.ok) {
          const data = await response.json()
          const nonceid = data?.Nonce
          setNonce(nonceid)
          // localStorage.setItem('nonce', nonceid)
        } else {
          const errorData = await response.json()
        }
      } catch (error) {
        console.error('Error:', error)
      }
    }
    getNonce()
  }, [])

  const handleAddToBasket = async () => {
    if (showToast || loadingToast) {
      return
    }
    const productId = String(data?.id)
    const quantity = '1'
    const productData = { id: productId, quantity: quantity }
    const loginToken = localStorage.getItem('loginToken')
    const nonce = localStorage.getItem('nonce')

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
      setLoadingToast(true)
      const response = await fetch(
        'https://oakleigh.cda-development3.co.uk/cms/wp-json/wc/store/v1/cart/add-item',
        {
          method: 'POST',
          headers,
          credentials: 'include',
          body: JSON.stringify(productData),
        },
      )

      if (response.ok) {
        // Handle success (e.g., redirect to a success page)
        const data = await response.json()
        const cartKey = data?.cart_key
        localStorage.setItem('cartKey', cartKey)
        setIsBasketOpen(true)
        // setShowToast(true)
        setLoadingToast(false)
        // setToastMessage('Item has been added to the basket')
      } else {
        console.error(
          'Failed to add item to the basket. Status:',
          response.status,
        )
        setShowToast(true)
        setLoadingToast(false)
        const errorData = await response.json()
        setToastMessage(errorData?.message) // You can log or inspect the error details
      }
    } catch (error) {
      console.error('Error:', error)
      setShowToast(true)
      setLoadingToast(false)
      setToastMessage('Failed to add item to the basket')
    }
  }
  return (
    <main className="flex h-auto w-full flex-col items-center justify-between gap-[25px] px-9 pt-[14px] text-footerBg lg:gap-[50px] lg:pt-[25px] dxl:px-[141px]">
      <nav aria-label="Breadcrumb" role="navigation" className="w-full">
        <nav className="flex w-full list-none gap-1 font-sans text-display-1 lg:text-[15px]">
          <Breadcrumbs />
        </nav>
      </nav>
      <section className="flex h-auto w-full flex-col gap-[70px]">
        <section className="flex h-auto w-full flex-col items-start justify-between gap-[30px] lg:flex-row xl:gap-12 dxl:gap-20 txl:gap-[168px]">
          <section className="flex h-auto w-full flex-col gap-[30px] lg:flex-1">
            {!isDesktop && <ProductDetail data={data} />}
            <section className="grid-rows-auto grid h-auto w-full flex-1 grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-2 xl:gap-[30px]">
              {imageList.map((image, index) => {
                return (
                  <figure key={index} className="aspect-[3/4]">
                    <ProgressiveImageComp
                      src={image.src}
                      alt={'productImage'}
                    />
                  </figure>
                )
              })}
            </section>
            <section className="h-full w-full">
              <CustomVimeoPlayer
                getVimeoId={getVimeoId}
                videoId={'246115326'}
                width={isxLargeScreen ? 804 : isLargeScreen ? 540 : 288}
                height={isxLargeScreen ? 452 : isLargeScreen ? 320 : 170}
              />
            </section>
          </section>
          <section className="flex w-full flex-col gap-6 font-sans lg:flex-1 dxl:gap-[30px]">
            {isDesktop && <ProductDetail data={data} />}
            {nonce && stockStatus && (
              <section
                className="relative flex h-[42px] w-full cursor-pointer lg:h-[53px]"
                onClick={handleAddToBasket}
              >
                <div className="absolute bottom-0 h-[39px] w-[99%] border-[0.5px] border-textSecondary bg-textSecondary lg:h-[50px] lg:w-[99.5%]" />
                <div className="absolute right-0 h-[39px] w-[99%] border-[0.5px] border-textSecondary lg:h-[50px] lg:w-[99.5%]" />
                <div className="lg:left-[0.5%]left-[1%] absolute bottom-[3px] right-[1%] h-9 w-[98%] border-b-[0.5px] border-l-[0.5px] border-textPrimary lg:right-[0.5%] lg:h-[47px] lg:w-[99%]" />
                <div className="relative flex w-full items-center justify-center text-display-4 text-textPrimary dxl:text-display-17">
                  Add To Basket
                </div>
              </section>
            )}
            {loadingToast && (
              <section className="flex items-center justify-start gap-2">
                {' '}
                <Spinner width={30} height={30} />{' '}
                <p>Adding item to the Basket... Please Wait...</p>
              </section>
            )}
            {showToast && (
              <div className="h-auto w-full">
                <Toast
                  message={toastMessage}
                  showToast={showToast}
                  setShowToast={setShowToast}
                />
              </div>
            )}
            <section className="flex h-auto w-full flex-col items-center justify-between gap-6 lg:gap-2 xl:flex-row xl:gap-5 txl:gap-[30px]">
              <div className="order-2 w-full flex-1 lg:order-1 ">
                <InstallmentButton />
              </div>
              <div className="h-auto w-full lg:order-2">
                <ApplePayButton />
              </div>
            </section>
            <section className="h-auto w-full border-b-[1px] border-search pb-[30px]">
              <p className="text-display-3 xl:text-display-3 dxl:text-display-6">
                Lorem ipsum dolor sit amet finance <u>website link here</u>
              </p>
            </section>
            <section className="mt-[40px] h-auto w-full">
              <SmallPromiseBlock />
            </section>
          </section>
        </section>
        <ProductMeta data={data} />
      </section>
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
