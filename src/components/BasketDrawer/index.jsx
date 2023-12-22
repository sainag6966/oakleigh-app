import Image from 'next/image'
function BasketDrawer({
  imageSrc,
  productName,
  productPrice,
  setIsBasketOpen,
}) {
  const copyRightIcons = '/Images/copyRightImg.svg'
  const handleClose = () => {
    setIsBasketOpen(false)
  }
  return (
    <div className="absolute left-0 top-[-98px] z-[1] h-full w-full bg-colorBlack bg-opacity-75 dxl:top-[-160px]">
      <div className="absolute right-0 top-0 z-[2] flex h-auto w-auto max-w-[817px] flex-col items-start bg-textPrimary text-footerBg">
        <div className="flex items-center justify-center gap-20 self-stretch bg-footerBg px-[140px] py-[52px] text-textPrimary">
          <p className="text-display-14">ADDED TO BASKET</p>
          <u>
            <p onClick={handleClose} className="font-sans text-display-17">
              Close
            </p>
          </u>
        </div>
        <div className="h-auto w-full px-[140px] text-footerBg">
          <div className="flex h-auto w-full gap-[52px] py-[50px]">
            <div className="relative flex h-[231px] w-[194px] items-center justify-between self-stretch">
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
              <p className="text-display-12">{productName}</p>
              <p className="font-sans text-display-16">£ {productPrice}</p>
              <u>
                <p className="mt-[10px] font-sans text-display-17">
                  Remove Item
                </p>
              </u>
            </div>
          </div>
          <div className="flex items-center justify-between border-y-[1px] border-search py-[42px] font-sans">
            <p className="text-[19px] font-normal">Total</p>
            <p className="text-display-17 font-semibold">£ {productPrice}</p>
          </div>
          <div className="flex flex-col gap-[30px] pb-[176px] pt-[50px] font-sans">
            <div className="relative flex h-[53px] w-full">
              <div className="absolute bottom-0 h-[50px] w-[99.5%] border-[0.5px] border-textSecondary bg-textSecondary" />
              <div className="absolute right-0 h-[50px] w-[99.5%] border-[0.5px] border-textSecondary" />
              <div className="absolute bottom-[3px] left-[0.5%] right-[0.5%] h-[47px] w-[99%] border-b-[0.5px] border-l-[0.5px] border-textPrimary" />
              <div className="relative flex w-full items-center justify-center text-display-4 text-textPrimary xl:text-display-17">
                Proceed To Checkout
              </div>
            </div>
            <div className="relative flex h-[53px] w-full">
              <div className="absolute bottom-0 h-[50px] w-[99.5%] border-[0.5px] border-textSecondary"></div>
              <div className="absolute right-0 h-[50px] w-[99.5%] border-[0.5px] border-textSecondary"></div>
              <div className="relative flex w-full items-center justify-center text-display-4 text-footerBg xl:text-display-17">
                View Basket
              </div>
            </div>
            <u>
              <p className="flex w-full items-center justify-center text-display-17">
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
