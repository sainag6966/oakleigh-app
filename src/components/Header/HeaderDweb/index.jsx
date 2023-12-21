import NextImage from '@/reuseComps/NextImage'
import Image from 'next/image'
import { useRouter } from 'next/router'
import LoginDropdown from '@/components/LoginDropdown'
import LoginPage from '../../LoginAndSignup/LoginPage'
import { useState } from 'react'

function HeaderDweb({ data }) {
  const [openLoginModal, setOpenLoginModal] = useState(false)
  const router = useRouter()
  const oakleighLogo = '/Images/oakleighLogo.svg'
  const searchIcon = '/Images/searchIcon.svg'
  const accountIcon = '/Images/accountIcon.svg'
  const basketIcon = '/Images/dwebAccountIcon.svg'
  const dividerLine = '/Images/dividerLine.svg'
  const imgArr = [
    { title: 'search', url: searchIcon },
    { title: 'divider', url: dividerLine },
    { title: 'account', url: accountIcon },
    { title: 'search', url: basketIcon },
  ]
  const filterData = data.filter((e) => {
    const skipMenu = ['Divider', 'My account', 'Basket']
    return !skipMenu.includes(e.title.rendered)
  })

  const handleIconClick = (icon) => {
    if (icon !== 'account') {
      return
    }
    setOpenLoginModal(!openLoginModal)
  }

  const handleSuccessfulLogin = () => {
    setOpenLoginModal(!openLoginModal)
  }

  return (
    <>
      <div className="relative flex h-[98px] w-full items-center justify-between gap-6 px-9 py-[30px] xl:px-16 dxl:h-40 dxl:px-[152px] dxl:py-12">
        <div
          className="h-auto w-40 cursor-pointer xl:w-48 dxl:w-80"
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
              <div
                key={index}
                className="cursor-pointer font-sans text-display-extra text-footerBg xl:text-display-5 dxl:text-display-8"
                onClick={() => {
                  router.push('/Product-Listing')
                }}
              >
                {item.title.rendered}
              </div>
            )
          })}
        </div>
        <div className="flex grow-[0.3] items-center justify-evenly gap-4 dxl:gap-8">
          {imgArr.map((e, index) => {
            return (
              <div
                key={index}
                className={`${
                  index === 1
                    ? 'w-[5px] xl:w-[5.5px] dxl:w-[8px]'
                    : 'w-3 lg:w-4 dxl:w-5'
                }h-3 flex items-center justify-center`}
                onClick={() => {
                  handleIconClick(e.title)
                }}
              >
                <NextImage
                  src={e.url}
                  width="24"
                  height="24"
                  layout="responsive"
                />
              </div>
            )
          })}
        </div>
      </div>
      {openLoginModal && (
        <LoginDropdown handleSuccessfulLogin={handleSuccessfulLogin} />
      )}
    </>
  )
}
export default HeaderDweb
