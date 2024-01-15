import { useState } from 'react'
import NextImage from '../../../reuseComps/NextImage'
import Drawer from '../../../reuseComps/Drawer'
import { useRouter } from 'next/router'
import LoginDropdown from '@/components/LoginDropdown'

function HeaderMweb({ data }) {
  const router = useRouter()
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const [openLoginModal, setOpenLoginModal] = useState(false)
  const oakleighLogo = '/Images/oakleighLogo.svg'
  const menuIcon = '/Images/menuIconMweb.svg'

  const openDrawer = () => {
    setIsDrawerOpen(true)
    setOpenLoginModal(false)
    document.body.classList.remove('no-scroll')
  }

  const closeDrawer = () => {
    setIsDrawerOpen(false)
  }

  const handleSuccessfulLogin = () => {
    document.body.classList.remove('no-scroll')
    setOpenLoginModal(!openLoginModal)
    closeDrawer()
  }

  const handleLoginModal = () => {
    document.body.classList.add('no-scroll')
    setOpenLoginModal(!openLoginModal)
    closeDrawer()
  }

  return (
    <>
      <div className="flex h-[98px] w-full items-center justify-between px-9 py-[30px]">
        <secion
          onClick={() => {
            router.push('/')
          }}
        >
          <NextImage src={oakleighLogo} width="174" height="34" />
        </secion>
        <div className="flex items-center gap-2.5">
          <p
            onClick={openDrawer}
            className="text-display-9 text-copyRightBorder"
          >
            Menu
          </p>
          <img
            src={menuIcon}
            className="h-[10px] w-[22px]"
            onClick={openDrawer}
          />
        </div>
      </div>
      <Drawer
        className="absolute h-full w-20"
        isOpen={isDrawerOpen}
        direction={'right'}
        closeDrawer={closeDrawer}
        handleLoginModal={handleLoginModal}
        data={data}
      />
      {openLoginModal && (
        <LoginDropdown handleSuccessfulLogin={handleSuccessfulLogin} />
      )}
    </>
  )
}
export default HeaderMweb
