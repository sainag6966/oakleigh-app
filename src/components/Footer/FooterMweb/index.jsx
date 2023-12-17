import { useState } from 'react'
import SocialIcons from '../../Footer/SocialIcons'
import CopyRightInfo from '../CopyRightInfo'
import MailingList from '../MailingList'

function FooterMweb() {
  const [clickedLink, setClickedLink] = useState('')
  const [linkData, setLinkData] = useState([])
  const [accor, setAccor] = useState(false)
  const data1 = ['Useful Links', 'Categories', 'Our Address']
  const usefulLinks = [
    'Our Story',
    'Insights',
    'Accounts',
    'Contact Us',
    'Delivery & Returns',
    'Watch Concierge',
    'Sustainablity',
    'Part Exchange',
    'Showroom',
    'FAQs',
    'Legal',
  ]
  const categories = [
    'Shop All',
    'Shop By Brand',
    'New In',
    'Collectors Choice',
    'Vintage Watches',
    'Online Only',
  ]
  const ourAddress = [
    'Oakleigh Watches Tempus Works 2 Fletcher Way Norwich, NR3 3ST',
  ]

  const handleAcor = (link) => {
    setAccor(true)
    switch (link) {
      case 'Useful Links':
        setClickedLink(link)
        setLinkData(usefulLinks)
        break
      case 'Categories':
        setClickedLink(link)
        setLinkData(categories)
        break
      case 'Our Address':
        setClickedLink(link)
        setLinkData(ourAddress)
        break
      default:
        return ''
    }
  }

  const handleClose = (link) => {
    setAccor(false)
  }

  return (
    <div className="flex min-h-[500px] w-full flex-col items-center gap-[60px] bg-footerBg pt-[59px] text-textPrimary">
      <div className="flex h-auto w-full flex-col items-center justify-center gap-[32px]">
        {data1.map((link, index) => {
          return (
            <div key={index} className="flex flex-col items-center">
              <div
                className="flex items-center justify-center gap-2"
                key={index}
              >
                <div className="text-display-11 tracking-normal">{link}</div>
                {accor && link === clickedLink ? (
                  <div onClick={handleClose} className="text-[25px]">
                    -
                  </div>
                ) : (
                  <div onClick={() => handleAcor(link)} className="text-[25px]">
                    +
                  </div>
                )}
              </div>
              <div className="mt-3 flex flex-col items-center justify-center gap-[6px]">
                {accor &&
                  link === clickedLink &&
                  linkData.map((e, index) => {
                    return (
                      <div
                        key={index}
                        className="max-w-[120px] font-sans text-[14px] font-extralight"
                      >
                        {e}
                      </div>
                    )
                  })}
              </div>
            </div>
          )
        })}
        <SocialIcons />
      </div>
      <MailingList />
      <CopyRightInfo />
    </div>
  )
}
export default FooterMweb
