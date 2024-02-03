import InstallmentButton from '@/reuseComps/InstallmentButton'
import ApplePayButton from '@/reuseComps/ApplePayButton'
import Spinner from '@/reuseComps/Spinner'
import Toast from '@/reuseComps/ToastMessage'
import SmallPromiseBlock from '@/components/ContentBlocks/SmallPromiseBlock'

function AvailabilityBlock({
  nonce,
  handleAddToBasket,
  loadingToast,
  showToast,
  toastMessage,
  setShowToast,
}) {
  return (
    <>
      {nonce && (
        <section
          className="relative flex h-[42px] w-full cursor-pointer font-sans lg:h-[53px]"
          onClick={() => {
            handleAddToBasket()
          }}
        >
          <div className="absolute bottom-0 h-[39px] w-[99%] border-[0.5px] border-textSecondary bg-textSecondary sm:w-[99.5%] lg:h-[50px]" />
          <div className="absolute right-0 h-[39px] w-[99%] border-[0.5px] border-textSecondary sm:w-[99.5%] lg:h-[50px]" />
          <div className="absolute bottom-[3px] left-[1%] right-[1%] h-9 w-[98%] border-b-[0.5px] border-l-[0.5px] border-textPrimary sm:left-[0.5%] sm:right-[0.5%] sm:w-[99%] lg:h-[47px]" />
          <div className="relative flex w-full items-center justify-center text-display-4 text-textPrimary xl:text-display-17">
            Add To Basket
          </div>
        </section>
      )}
      {loadingToast && (
        <section className="flex items-center justify-start gap-2">
          {' '}
          <Spinner width={30} height={30} />{' '}
          <p>Adding item to the Basket... Please Wait...</p>
        </section>
      )}
      {showToast && (
        <div className="h-auto w-full">
          <Toast
            message={toastMessage}
            showToast={showToast}
            setShowToast={setShowToast}
          />
        </div>
      )}
      <section className="mt-6 flex h-auto w-full flex-col items-center justify-between gap-6 lg:mt-0 xl:flex-row xl:gap-5 txl:gap-[30px]">
        <div className="order-2 w-full xl:order-1 ">
          <InstallmentButton />
        </div>
        <div className="dxl:min-[150px] dxl-max-auto h-auto w-full xl:order-2 xl:min-w-[150px] xl:max-w-[150px]">
          <ApplePayButton />
        </div>
      </section>
      <section className="mt-[30px] h-auto w-full border-b-[1px] border-search pb-[30px] lg:mt-0">
        <p className="font-sans text-display-3 xl:text-display-3 dxl:text-display-6">
          Lorem ipsum dolor sit amet finance <u>website link here</u>
        </p>
      </section>
      <section className="mt-[40px] h-auto w-full">
        <SmallPromiseBlock />
      </section>
    </>
  )
}
export default AvailabilityBlock
