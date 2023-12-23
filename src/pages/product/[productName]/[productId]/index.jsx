import Toast from '@/reuseComps/ToastMessage'
import { useState } from 'react'
import BasketDrawer from '@/components/BasketDrawer'

function ProductDetailPage({ data }) {
  console.log(data)
  const [showToast, setShowToast] = useState(false)
  const [toastMessage, setToastMessage] = useState('')
  const [loadingToast, setLoadingToast] = useState(false)
  const [isBasketOpen, setIsBasketOpen] = useState(false)
  const imgSrc = data?.images[0]?.src
  const productPrice = data?.price

  const handleAddToBasket = async () => {
    const productId = String(data?.id)
    const quantity = '1'
    const productData = { id: productId, quantity: quantity }
    try {
      //   const username = 'oakleighcdadevel'
      //   const password = 'QsJY lkVy QxL8 3iFY NhhP Cto1'
      setLoadingToast(true)
      const response = await fetch(
        'https://oakleigh.cda-development3.co.uk/cms/wp-json/cocart/v2/cart/add-item',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            // Authorization: 'Basic ' + btoa(username + ':' + password),
          },
          body: JSON.stringify(productData),
        },
      )

      if (response.ok) {
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
    <div className="relative flex h-auto w-full flex-col gap-4">
      <p>product name : {data.name}</p>
      <img className="h-60 w-80" src={imgSrc}></img>
      <button
        onClick={handleAddToBasket}
        className="flex h-[20px] w-[150px] items-center justify-center border-[2px] border-black bg-orange-300 p-4"
      >
        Add To Basket
      </button>
      {loadingToast && <p>Adding item to the Basket... Please Wait...</p>}
      <div className="h-auto w-full">
        <Toast
          message={toastMessage}
          showToast={showToast}
          setShowToast={setShowToast}
        />
      </div>
      <p>product name : {data?.name}</p>
      <img className="h-60 w-80" src={imgSrc}></img>
      <button
        onClick={handleAddToBasket}
        className="flex h-[20px] w-[150px] items-center justify-center border-[2px] border-black bg-orange-300 p-4"
      >
        Add To Basket
      </button>
      {loadingToast && <p>Adding item to the Basket... Please Wait...</p>}
      <div className="h-auto w-full">
        <Toast
          message={toastMessage}
          showToast={showToast}
          setShowToast={setShowToast}
        />
      </div>
      <p>product name : {data?.name}</p>
      <img className="h-60 w-80" src={imgSrc}></img>
      <button
        onClick={handleAddToBasket}
        className="flex h-[20px] w-[150px] items-center justify-center border-[2px] border-black bg-orange-300 p-4"
      >
        Add To Basket
      </button>
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
        />
      )}
    </div>
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
