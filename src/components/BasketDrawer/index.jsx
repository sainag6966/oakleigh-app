import Image from 'next/image'
import { useRouter } from 'next/router'
function BasketDrawer({
  imageSrc,
  productName,
  productPrice,
  setIsBasketOpen,
  isFromHeader,
}) {
  const copyRightIcons = '/Images/copyRightImg.svg'
  const headingText = isFromHeader ? 'YOUR BASKET' : 'ADDED TO BASKET'
  const router = useRouter()
  const handleClose = () => {
    setIsBasketOpen(false)
    document.body.classList.remove('no-scroll')
  }
  return (
    <div
      className="absolute left-0 top-0 z-[1]
       h-screen w-full overflow-y-scroll bg-colorBlack bg-opacity-75 dxl:top-0"
    >
      <div className="absolute right-0 top-0 z-[2] flex min-h-screen w-auto max-w-[360px] flex-col items-start bg-textPrimary text-footerBg sm:max-w-[480px] lg:max-w-[817px]">
        <div className="flex items-center justify-between gap-5 self-stretch bg-footerBg px-[32px] py-[32px] text-textPrimary lg:gap-20 lg:px-[80px] dxl:px-[140px] dxl:py-[52px]">
          <p className="text-display-11 lg:text-display-13 dxl:text-display-14 ">
            {headingText}
          </p>
          <u>
            <p
              onClick={handleClose}
              className="cursor-pointer font-sans text-display-1 lg:text-display-17"
            >
              Close
            </p>
          </u>
        </div>
        <div className="h-auto w-full px-[32px] text-footerBg lg:px-[80px] dxl:px-[140px]">
          <div className="flex h-auto w-full gap-[24px] py-[32px] sm:gap-[36px] lg:gap-[52px] lg:py-9 dxl:py-[50px]">
            <div className="relative flex h-[231px] w-[220px] items-center justify-between self-stretch lg:w-[194px]">
              <Image
                src={imageSrc}
                layout="fill"
                alt="AdBlock"
                objectFit="cover"
                quality={100}
                style={{ objectPosition: 'center' }}
              />
            </div>
            <div className="flex h-auto w-auto max-w-[279px] flex-col items-start justify-center gap-5">
              <p className="text-display-17 lg:text-display-12">
                {productName}
              </p>
              <p className="font-sans text-display-4 font-semibold lg:text-display-16">
                £ {productPrice}
              </p>
              <u>
                <p className="mt-[10px] font-sans text-display-4 lg:text-display-17">
                  Remove Item
                </p>
              </u>
            </div>
          </div>
          <div className="flex items-center justify-between border-y-[1px] border-search py-[28px] font-sans dxl:py-[42px]">
            <p className="text-[19px] font-normal">Total</p>
            <p className="text-display-17 font-semibold">£ {productPrice}</p>
          </div>
          <div className="flex flex-col gap-[20px] pb-[176px] pt-[32px] font-sans lg:gap-[30px] dxl:pt-[50px]">
            <div className="relative flex h-[53px] w-full">
              <div className="absolute bottom-0 h-[50px] w-[99%] border-[0.5px] border-textSecondary bg-textSecondary lg:w-[99.5%]" />
              <div className="absolute right-0 h-[50px] w-[99%] border-[0.5px] border-textSecondary lg:w-[99.5%]" />
              <div className="lg:left-[0.5%]left-[1%] absolute bottom-[3px] right-[1%] h-[47px] w-[98%] border-b-[0.5px] border-l-[0.5px] border-textPrimary lg:right-[0.5%] lg:w-[99%]" />
              <div className="relative flex w-full items-center justify-center text-display-4 text-textPrimary xl:text-display-17">
                Proceed To Checkout
              </div>
            </div>
            <div
              className="relative flex h-[53px] w-full cursor-pointer"
              onClick={() => {
                router.push('/basket')
              }}
            >
              <div className="absolute bottom-0 h-[50px] w-[99%] border-[0.5px] border-textSecondary lg:w-[99.5%]"></div>
              <div className="absolute right-0 h-[50px] w-[99%] border-[0.5px] border-textSecondary lg:w-[99.5%]"></div>
              <div className="relative flex w-full items-center justify-center text-display-4 text-footerBg xl:text-display-17">
                View Basket
              </div>
            </div>
            <u>
              <p
                className="flex w-full cursor-pointer items-center justify-center text-display-17"
                onClick={() => {
                  router.push('/Product-Listing')
                }}
              >
                Continue Shopping
              </p>
            </u>
            <div className="mt-[10px] flex w-full items-center justify-center">
              <Image
                src={copyRightIcons}
                width="193"
                height="22"
                alt="copyRight"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default BasketDrawer
