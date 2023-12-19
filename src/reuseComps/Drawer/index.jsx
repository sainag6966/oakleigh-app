import Divider from '../Divider'
import NextImage from '../NextImage'
import { useRouter } from 'next/router'

const Drawer = ({ isOpen, closeDrawer, data, direction }) => {
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

  const handleLink = () => {
    router.push('/Product-Listing')
    closeDrawer()
  }

  return (
    <div
      className={`fixed left-0 top-0 h-full w-full transform overflow-scroll bg-white ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } z-50 shadow-md transition-transform duration-300 ease-in-out`}
    >
      <div className="flex h-[98px] w-full items-center justify-between border-b border-black px-9 py-[30px]">
        <NextImage src={oakleighLogo} width="174" height="34" />
        <div className="flex items-center gap-2.5" onClick={closeDrawer}>
          <p className="text-display-9">Close</p>
          <img
            src={closeIcon}
            className="mt-[2px] h-[10px] w-[10px] cursor-pointer"
          />
        </div>
      </div>
      <div className="flex flex-col gap-1 px-9 py-[50px] font-sans text-display-8 text-copyRightBorder">
        {filterData?.map((e, index) => {
          return (
            <div
              key={index}
              className={`bg-bgColor flex w-full items-center justify-start text-copyRightBorder ${
                filterData.length - 1 === index ? 'pb-6' : 'pb-0'
              }`}
              onClick={handleLink}
            >
              <p key={index}>{e.title.rendered}</p>
            </div>
          )
        })}
        <div className="flex flex-col justify-around gap-8">
          {/* <Divider /> */}
          <div className="flex flex-col border-y-[1px] border-uspBlockBackground py-6">
            <div className="flex gap-3">
              <NextImage src={accountIcon} width="15" height="11" />
              <p>My Account</p>
            </div>
            <div className="flex gap-3">
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
    </div>
  )
}
export default Drawer
