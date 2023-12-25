import NextImage from '@/reuseComps/NextImage'
import Image from 'next/image'
import { useRouter } from 'next/router'
import LoginDropdown from '@/components/LoginDropdown'
import SearchDropdown from '@/components/SearchDropdown'
import LoginPage from '../../LoginAndSignup/LoginPage'
import { useState } from 'react'
import BasketDrawer from '@/components/BasketDrawer'
import BrandDropdown from '@/components/BrandDropdown'

function HeaderDweb({ data }) {
  const [openLoginModal, setOpenLoginModal] = useState(false)
  const [openSearchModal, setOpenSearchModal] = useState(false)
  const [isBasketOpen, setIsBasketOpen] = useState(false)
  const [openBrandDropdown, setOpenBrandDropdown] = useState(false)
  const router = useRouter()
  const oakleighLogo = '/Images/oakleighLogo.svg'
  const searchIcon = '/Images/searchIcon.svg'
  const accountIcon = '/Images/accountIcon.svg'
  const basketIcon = '/Images/dwebAccountIcon.svg'
  const dividerLine = '/Images/dividerLine.svg'
  const pointingArrow = '/Images/pointingArrowUp.svg'
  const productImage =
    'https://oakleigh.cda-development3.co.uk/cms/wp-content/uploads/2023/12/1x1-3746.jpg'
  const productName = 'Zenith Defy EL Primero 2I Or Two'
  const imgArr = [
    { title: 'search', url: searchIcon },
    { title: 'divider', url: dividerLine },
    { title: 'account', url: accountIcon },
    { title: 'basket', url: basketIcon },
  ]
  const filterData = data.filter((e) => {
    const skipMenu = ['Divider', 'My account', 'Basket']
    return !skipMenu.includes(e.title.rendered)
  })

  const handleMenuClick = (item) => {
    setOpenLoginModal(false)
    setOpenSearchModal(false)
    if (item?.title?.rendered === 'Shop By Brand') {
      setOpenBrandDropdown(!openBrandDropdown)
      return
    }
    setOpenBrandDropdown(false)
    router.push('/Product-Listing')
  }

  const handleIconClick = (icon) => {
    setOpenBrandDropdown(false)
    if (icon === 'account') {
      setOpenLoginModal(!openLoginModal)
      setOpenSearchModal(false)
      return
    }
    if (icon === 'search') {
      setOpenLoginModal(false)
      setOpenSearchModal(!openSearchModal)
      return
    }
    if (icon === 'basket') {
      setIsBasketOpen(true)
      return
    }
  }

  const handleSuccessfulLogin = () => {
    setOpenLoginModal(!openLoginModal)
  }

  return (
    <>
      <div className="relative flex h-[98px] w-full items-center justify-between gap-6 px-9 py-[30px] xl:px-16 dxl:h-40 dxl:px-[132px] dxl:py-[45px]">
        <div
          className="h-auto w-40 cursor-pointer xl:w-48 dxl:w-[300px]"
          onClick={() => {
            router.push('/')
          }}
        >
          <Image
            src={oakleighLogo}
            width="300"
            height="60"
            layout="responsive"
          />
        </div>
        <div className="flex grow-[2] items-center justify-evenly">
          {filterData.map((item, index) => {
            return (
              <div className="relative">
                <div
                  key={index}
                  className="cursor-pointer font-sans text-display-extra text-footerBg xl:text-display-5 dxl:text-display-8"
                  onClick={() => {
                    handleMenuClick(item)
                  }}
                >
                  {item.title.rendered}
                  {openBrandDropdown &&
                    item.title.rendered === 'Shop By Brand' && (
                      <div className="absolute bottom-[-24px] left-0 right-0 ml-auto mr-auto h-2 w-4 dxl:bottom-0 dxl:top-[93px] dxl:h-3 dxl:w-6">
                        <Image
                          src={pointingArrow}
                          layout="fill"
                          alt="AdBlock"
                          objectFit="contain"
                          quality={100}
                          style={{ objectPosition: 'center' }}
                          className="mix-blend-overlay"
                        />
                      </div>
                    )}
                </div>
              </div>
            )
          })}
        </div>
        <div className="flex h-full w-auto grow-[0.2] items-center justify-between gap-4 dxl:gap-6">
          {imgArr.map((e, index) => {
            return (
              <div className="flex flex-col">
                <div
                  key={index}
                  className={`relative ${
                    index === 1
                      ? 'h-[24px] cursor-default dxl:h-[36px]'
                      : 'h-[16px] cursor-pointer dxl:h-[26px]'
                  } w-4  dxl:w-6`}
                  onClick={() => {
                    handleIconClick(e.title)
                  }}
                >
                  <Image
                    src={e.url}
                    layout="fill"
                    alt="AdBlock"
                    objectFit="contain"
                    quality={100}
                    style={{ objectPosition: 'center' }}
                    className="mix-blend-overlay"
                  />
                </div>
                {(openLoginModal && e.title === 'account') ||
                (openSearchModal && e.title === 'search') ? (
                  <div className="absolute bottom-0 h-2 w-4 dxl:h-3 dxl:w-6">
                    <Image
                      src={pointingArrow}
                      layout="fill"
                      alt="AdBlock"
                      objectFit="contain"
                      quality={100}
                      style={{ objectPosition: 'center' }}
                      className="mix-blend-overlay"
                    />
                  </div>
                ) : null}
              </div>
            )
          })}
        </div>
      </div>
      {openLoginModal && (
        <LoginDropdown handleSuccessfulLogin={handleSuccessfulLogin} />
      )}
      {openSearchModal && (
        <SearchDropdown setOpenSearchModal={setOpenSearchModal} />
      )}
      {isBasketOpen && (
        <BasketDrawer
          imageSrc={productImage}
          productName={productName}
          productPrice={'3000'}
          setIsBasketOpen={setIsBasketOpen}
          isFromHeader
        />
      )}
      {openBrandDropdown && <BrandDropdown />}
    </>
  )
}
export default HeaderDweb
