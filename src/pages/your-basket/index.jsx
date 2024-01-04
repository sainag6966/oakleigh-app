import axios from 'axios'
import { useEffect, useState } from 'react'

function YourBasket({ data }) {
  console.log(data, '!!!')
  // const [data, setData] = useState([])

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const nonce = localStorage.getItem('nonce')
  //     const cookies = [
  //       'woocommerce_items_in_cart=1',
  //       'woocommerce_cart_hash=5d9a8d2345465d90e99e76ea9caaf960',
  //       'wp_woocommerce_session_16faeead23a0c92f8535a8c8627dd6ea=t_2e81d71ec923136ba56e4767be0da1%7C%7C1704454024%7C%7C1704450424%7C%7Ca016e1edf65a42085817cb0a575d222e',
  //     ]

  //     // Combine cookies into a single string
  //     const cookieString = cookies.join('; ')

  //     // const cookieValue = Cookies.get('woocommerce_cart_hash')
  //     // console.log('!!', cookieValue)
  //     try {
  //       const response = await fetch(
  //         'https://oakleigh.cda-development3.co.uk/cms/wp-json/wc/store/v1/cart/items',
  //         {
  //           method: 'get',
  //           headers: {
  //             'Content-Type': 'text/plain',
  //             Nonce: nonce,
  //             // Authorization: `Bearer ${nonce}`,
  //             Cookie:
  //               'wp_woocommerce_session_16faeead23a0c92f8535a8c8627dd6ea=t_16d949e4b202a375cf1af9e85cce4e%257C%257C1704440878%257C%257C1704437278%257C%257C284262df850ecf68420b695b5fbc5eab',
  //             // 'Access-Control-Allow-Origin': 'your-client-origin',
  //             // 'Access-Control-Allow-Credentials': true,
  //           },
  //           // credentials: 'same-origin',
  //           // withCredentials: true,
  //         },
  //       )
  //       const data = await response.json()
  //       console.log(response, '111')
  //       // setData(newData)
  //     } catch (error) {
  //       console.error('Error fetching data:', error)
  //     }
  //   }
  //   fetchData()
  // }, [])

  return (
    <div>
      {data?.map((e) => {
        return e.id
      })}
    </div>
  )
}
export default YourBasket

export async function getServerSideProps(context) {
  // const { params } = context
  // const { productId } = params
  const nonce = 'c84710b9fe'
  try {
    const username = 'ck_96e01d53953b1372491dc07807ed0f0bd896d3a3'
    const password = 'cs_e6dc67bafbc6907125843f189e2c377eb1a40606'
    const response = await fetch(
      'https://oakleigh.cda-development3.co.uk/cms/wp-json/wc/store/v1/cart/items',
      {
        method: 'get',
        headers: {
          'Content-Type': 'text/plain',
          Nonce: nonce,
          // Authorization: 'Basic ' + btoa(username + ':' + password),
          // Authorization: `Bearer ${nonce}`,
          Cookie:
            'wp_woocommerce_session_16faeead23a0c92f8535a8c8627dd6ea=t_16d949e4b202a375cf1af9e85cce4e%257C%257C1704440878%257C%257C1704437278%257C%257C284262df850ecf68420b695b5fbc5eab',
          // 'Access-Control-Allow-Origin': 'your-client-origin',
          // 'Access-Control-Allow-Credentials': true,
        },
        // credentials: 'same-origin',
        // withCredentials: true,
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
