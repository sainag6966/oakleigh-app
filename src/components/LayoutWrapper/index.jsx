import { useEffect, useState } from 'react'
import Footer from '../Footer'
import { useRouter } from 'next/router'
import { CartDataProvider } from '@/context/BasketContext'
import FooterTop from '../Footer/FooterTop'
import Header from '../Header'
import { headerUrl } from '@/utils/urls'
import { footerUrl } from '@/utils/urls'
import { getNonce } from '@/utils/nonce'
import { useMediaQuery } from 'react-responsive'

function LayoutWrapper({ children }) {
  const router = useRouter()
  const { asPath } = router
  const [item, setItem] = useState([])
  const [isHeaderVisible, setIsHeaderVisible] = useState(false)
  const [isFooterVisible, setIsFooterVisible] = useState(true)
  const [footerItem, setFooterItem] = useState([])
  const [cartData, setCartData] = useState({})
  const isDesktop = useMediaQuery({ query: '(min-width:900px)' })
  //   const trayData = data?.acf?.flexible_listing;
  const username = 'oakleighcdadevel'
  const password = 'QsJY lkVy QxL8 3iFY NhhP Cto1'

  const hideHeaderPaths = [
    '/basket/checkout',
    '/',
    '/basket/checkout/shipping',
    '/basket/checkout/shipping/payment',
  ]
  const hideFooterPaths = [
    '/basket/checkout',
    '/basket/checkout/shipping',
    '/basket/checkout/shipping/payment',
  ]
  const restrictedHeaderPath = hideHeaderPaths.includes(asPath)
  const restrictedFooterPath = hideFooterPaths.includes(asPath)

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(headerUrl, {
        method: 'get',
        headers: {
          'Content-Type': 'text/plain',
          Authorization: 'Basic ' + btoa(username + ':' + password),
        },
      })
      const headerData = (await response?.json()) || []
      setItem(headerData)
    }
    getData()
    getNonce()
  }, [])

  useEffect(() => {
    if (restrictedHeaderPath) {
      setIsHeaderVisible(false)
    } else {
      setIsHeaderVisible(true)
    }
    if (restrictedFooterPath) {
      setIsFooterVisible(false)
    } else {
      setIsFooterVisible(true)
    }
  }, [asPath])

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(footerUrl, {
        method: 'get',
        headers: {
          'Content-Type': 'text/plain',
          Authorization: 'Basic ' + btoa(username + ':' + password),
        },
      })
      const footerData = (await response?.json()) || []
      setFooterItem(footerData)
    }
    getData()
  }, [])

  return (
    <CartDataProvider>
      <div className="flex h-screen flex-col justify-between text-footerBg">
        <Header data={item} isHeaderVisible={isHeaderVisible} />
        {children}
        <FooterTop isFooterVisible={isFooterVisible} />
        <Footer footerData={footerItem} isFooterVisible={isFooterVisible} />
      </div>
    </CartDataProvider>
  )
}
export default LayoutWrapper
