import { useState } from 'react'
import Divider from '../Divider'
import NextImage from '../NextImage'
import { useRouter } from 'next/router'
import Image from 'next/image'
import ProgressiveImageComp from '../ProgressiveImageComp'

const Drawer = ({ isOpen, closeDrawer, data, direction, handleLoginModal }) => {
  const [openBrandDrawer, setOpenBrandDrawer] = useState(false)
  const router = useRouter()
  const closeIcon = '/Images/closeIcon.svg'
  const oakleighLogo = '/Images/oakleighLogo.svg'
  const searchIcon = '/Images/searchIcon.svg'
  const accountIcon = '/Images/accountIcon.svg'
  const dwebAccountIcon = '/Images/dwebAccountIcon.svg'
  const filterData = data.filter((e) => {
    const skipMenu = ['Divider', 'My account', 'Basket']
    return !skipMenu.includes(e.title.rendered)
  })
  const ImageSrc = '/Images/Sample/twoAdBlock1.svg'
  const title1 = 'Lorem Ipsum'
  const title2 = 'Shop Now'

  const brandList = [
    'Breitling',
    'Bremont',
    'Cartier',
    'Heuer',
    'Rolex',
    'Omega',
    'Tagheuer',
    'Longines',
    'Tudor',
    'Panera',
    'Oris',
  ]

  const handleMenuClick = (item) => {
    if (item === 'Shop By Brand') {
      setOpenBrandDrawer(true)
      return
    }
    closeDrawer()
    if (item === 'New In') {
      router.push('new-in')
      return
    }
    if (item === 'Collectors Choice') {
      router.push('collectors-choice')
      return
    }
    if (item === 'Vintage Watches') {
      router.push('vintage-watches')
      return
    }
    if (item === 'Online Only') {
      router.push('online-only')
      return
    }
    router.push('/shop-all')
  }

  const handleBasket = () => {
    router.push('/basket')
    closeDrawer()
  }

  const handleClose = () => {
    closeDrawer()
    setOpenBrandDrawer(false)
  }

  const handleItemClick = () => {
    closeDrawer()
    setOpenBrandDrawer(false)
  }

  return (
    <div
      className={`fixed left-0 top-0 h-full w-full transform overflow-scroll bg-white ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } z-50 shadow-md transition-transform duration-300 ease-in-out`}
    >
      <div className="flex h-[98px] w-full items-center justify-between border-b border-black px-9 py-[30px]">
        <NextImage src={oakleighLogo} width="174" height="34" />
        <div className="flex items-center gap-2.5" onClick={handleClose}>
          <p className="text-display-9">Close</p>
          <img
            src={closeIcon}
            className="mt-[2px] h-[10px] w-[10px] cursor-pointer"
          />
        </div>
      </div>
      {!openBrandDrawer ? (
        <div className="flex flex-col gap-1 px-9 py-[50px] font-sans text-display-8 text-copyRightBorder">
          {filterData?.map((item, index) => {
            return (
              <div
                key={index}
                className={`bg-bgColor flex w-full items-center justify-start text-copyRightBorder ${
                  filterData.length - 1 === index ? 'pb-6' : 'pb-0'
                }`}
                onClick={() => {
                  handleMenuClick(item?.title?.rendered)
                }}
              >
                <p key={index}>{item?.title?.rendered}</p>
              </div>
            )
          })}
          <div className="flex flex-col justify-around gap-8">
            {/* <Divider /> */}
            <div className="flex flex-col border-y-[1px] border-uspBlockBackground py-6">
              <div
                className="flex gap-3"
                onClick={() => {
                  handleLoginModal()
                }}
              >
                <NextImage src={accountIcon} width="15" height="11" />
                <p>My Account</p>
              </div>
              <div className="flex gap-3" onClick={handleBasket}>
                <NextImage src={dwebAccountIcon} width="15" height="11" />
                <p>Basket (0)</p>
              </div>
            </div>
            {/* <Divider /> */}
            <div className="flex h-10 w-full items-center justify-between bg-search px-[30px]">
              <p>Search</p>
              <NextImage src={searchIcon} width="18" height="20" />
            </div>
          </div>
        </div>
      ) : (
        <section className="flex h-auto w-full flex-col gap-[30px] px-9 py-[50px] font-sans">
          <section className="relative flex w-full items-center justify-center ">
            <p
              className="absolute left-0 flex items-center gap-1 text-display-4"
              onClick={() => {
                setOpenBrandDrawer(false)
              }}
            >
              <img className="h-3 w-3" src="/Images/leftArrow.svg" alt="prev" />
              <u>Back</u>
            </p>
            <p className="text-display-17 font-semibold">Shop By Brand</p>
          </section>
          <section className="flex flex-col items-start justify-start gap-[30px]">
            <div className="relative z-[2] flex h-auto flex-col items-start justify-start gap-[16px] dxl:gap-[30px]">
              {brandList.map((e, index) => {
                return (
                  <p
                    key={index}
                    className="w-[120px] text-display-17 xl:w-[172px] dxl:w-[248px]"
                    onClick={handleItemClick}
                  >
                    {e}
                  </p>
                )
              })}
            </div>
            <div className="relative z-[2] w-full bg-gradient-to-t from-black to-transparent">
              <ProgressiveImageComp src={ImageSrc} alt="AdBlock" />
              <div className="absolute bottom-3 flex w-full flex-col items-center text-textPrimary xl:bottom-6 xl:gap-2">
                <span className="text-display-17 xl:text-display-11 dxl:text-display-13">
                  {title1}
                </span>
                <u>
                  <span className="font-sans text-display-1 xl:text-display-4 dxl:text-display-17">
                    {title2}
                  </span>
                </u>
              </div>
            </div>
          </section>
        </section>
      )}
    </div>
  )
}
export default Drawer
