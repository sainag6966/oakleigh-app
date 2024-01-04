import { useEffect, useState } from 'react'
import Footer from '../Footer'
import FooterTop from '../Footer/FooterTop'
import Header from '../Header'
import { useMediaQuery } from 'react-responsive'

function LayoutWrapper({ children }) {
  const [item, setItem] = useState([])
  const [footerItem, setFooterItem] = useState([])
  const isDesktop = useMediaQuery({ query: '(min-width:900px)' })
  //   const trayData = data?.acf?.flexible_listing;
  const username = 'oakleighcdadevel'
  const password = 'QsJY lkVy QxL8 3iFY NhhP Cto1'

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        'https://oakleigh.cda-development3.co.uk/cms/wp-json/wp/v2/menu-items?menus=18',
        {
          method: 'get',
          headers: {
            'Content-Type': 'text/plain',
            Authorization: 'Basic ' + btoa(username + ':' + password),
          },
        },
      )
      const headerData = (await response?.json()) || []
      setItem(headerData)
    }
    getData()
  }, [])

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
  //     console.log(cookieString)

  //     // const cookieValue = Cookies.get('woocommerce_cart_hash')
  //     // console.log('!!', cookieValue)
  //     try {
  //       const response = await fetch(
  //         'https://oakleigh.cda-development3.co.uk/cms/wp-json/wc/store/v1/cart/items',
  //         {
  //           method: 'get',
  //           headers: {
  //             // 'Content-Type': 'application/json',
  //             Nonce: nonce,
  //             // Authorization: `Bearer ${nonce}`,
  //             Cookie: cookieString,
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

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        'https://oakleigh.cda-development3.co.uk/cms/wp-json/wp/v2/menu-items?menus=108',
        {
          method: 'get',
          headers: {
            'Content-Type': 'text/plain',
            Authorization: 'Basic ' + btoa(username + ':' + password),
          },
        },
      )
      const footerData = (await response?.json()) || []
      setFooterItem(footerData)
    }
    getData()
  }, [])
  return (
    <div className="flex h-screen flex-col justify-between">
      <Header data={item} />
      {children}
      <FooterTop />
      <Footer footerData={footerItem} />
    </div>
  )
}
export default LayoutWrapper
