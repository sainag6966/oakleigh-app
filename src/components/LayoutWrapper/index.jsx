import { useEffect, useState } from 'react'
import Footer from '../Footer'
import { useRouter } from 'next/router'
import FooterTop from '../Footer/FooterTop'
import Header from '../Header'
import { getNonce } from '@/utils/nonce'
import { useMediaQuery } from 'react-responsive'

function LayoutWrapper({ children }) {
  const router = useRouter()
  const { asPath } = router
  const [item, setItem] = useState([])
  const [isHeaderVisible, setIsHeaderVisible] = useState(true)
  const [isFooterVisible, setIsFooterVisible] = useState(true)
  const [footerItem, setFooterItem] = useState([])
  const isDesktop = useMediaQuery({ query: '(min-width:900px)' })
  //   const trayData = data?.acf?.flexible_listing;
  const username = 'oakleighcdadevel'
  const password = 'QsJY lkVy QxL8 3iFY NhhP Cto1'

  const hideHeaderPaths = ['/basket/checkoutPage']
  const restrictedPath = hideHeaderPaths.includes(asPath)

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
    getNonce()
  }, [])

  useEffect(() => {
    if (restrictedPath) {
      setIsHeaderVisible(false)
      setIsFooterVisible(false)
    } else {
      setIsHeaderVisible(true)
      setIsFooterVisible(true)
    }
  }, [asPath])

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
    <div className="flex h-screen flex-col justify-between text-footerBg">
      <Header data={item} isHeaderVisible={isHeaderVisible} />
      {children}
      <FooterTop isFooterVisible={isFooterVisible} />
      <Footer footerData={footerItem} isFooterVisible={isFooterVisible} />
    </div>
  )
}
export default LayoutWrapper
