import ProgressiveImageComp from '@/reuseComps/ProgressiveImageComp'
import { priceFormatter } from '@/utils/formatPrice'

function CheckoutItems({ basketData }) {
  const cartItems = basketData?.items
  const price = basketData?.totals?.total_items
  const deliveryValue = basketData?.totals?.total_shipping
  const deliveryFormatVal =
    deliveryValue && priceFormatter(basketData?.totals?.total_shipping, true)
  const imgSrc =
    'https://oakleigh.cda-development3.co.uk/cms/wp-content/uploads/2024/01/1x1-4158.jpg'
  const subTotal =
    price && priceFormatter(basketData?.totals?.total_items, true)
  const totalPrice = basketData?.totals?.total_price
  const orderTotal =
    totalPrice && priceFormatter(basketData?.totals?.total_price, true)

  return (
    <section className="flex h-auto w-full flex-col gap-5 p-5 font-sans sm:p-8 lg:p-8 dxl:pl-[75px] dxl:pr-[120px]">
      <section className="flex h-auto w-full flex-col gap-3">
        {cartItems?.map((e) => {
          return (
            <section className="flex items-center justify-between">
              <section className="flex h-auto w-full items-center gap-2 sm:gap-4 lg:gap-2 dxl:gap-5">
                <figure
                  // key={index}
                  className="aspect-[3/4] max-h-[100px] min-w-[80px] max-w-[80px] xl:max-w-[138px] dxl:max-h-[135px] dxl:min-w-[113px]"
                >
                  <ProgressiveImageComp
                    src={e?.images[1]?.src}
                    alt={'productImage'}
                  />
                </figure>
                <p className="font-cormorant text-display-1 leading-normal sm:text-display-4 dxl:text-display-9">
                  {e?.name}
                </p>
              </section>
              <section className="text-display-extra dxl:text-display-16">
                {priceFormatter(e?.prices?.price, true)}
              </section>
            </section>
          )
        })}
      </section>
      <section>
        <form className="flex h-auto w-full gap-5">
          <input
            type="text"
            id="first_name"
            name="first_name"
            // value={coupon}
            value={'coupon'}
            placeholder="ENTER CODE"
            className="h-[41px] w-full flex-1 appearance-none border bg-textPrimary px-4 py-2 font-sans text-display-3 text-black sm:px-7 dxl:h-[53px] dxl:text-display-6"
          />
          <div className="relative flex h-[41px] w-[110px] cursor-pointer font-sans text-display-4 dxl:h-[53px] dxl:w-[150px] dxl:text-display-17">
            <div className="absolute bottom-0 h-[38px] w-[107px] border-[0.5px] border-textSecondary dxl:h-[50px] dxl:w-[147px]"></div>
            <div className="absolute right-0 h-[38px] w-[107px] border-[0.5px] border-textSecondary dxl:h-[50px] dxl:w-[147px]"></div>
            <button
              type="submit"
              className="relative flex w-full items-center justify-center"
            >
              Apply
            </button>
          </div>
        </form>
      </section>
      <section className="flex flex-col gap-3">
        <section className="flex items-center justify-between text-display-5 leading-tight dxl:text-display-16">
          <p>
            {/* Subtotal ({productData?.items?.length} {itemText}) */}
            Subtotal ({cartItems?.length} Item)
          </p>
          {/* <p>{price}.00</p> */}
          <p>{subTotal}</p>
        </section>
        <section className="flex items-center justify-between text-display-3 leading-tight dxl:text-display-6">
          <p>Delivery</p>
          {/* <p>£{deliveryRate}.00</p> */}
          {deliveryFormatVal ? (
            deliveryFormatVal
          ) : (
            <p>Calculated at next step</p>
          )}
        </section>
        <section className="flex h-auto w-full items-center justify-between font-sans text-display-16 leading-tight dxl:text-display-10">
          <p>Order Total</p>
          {/* <p>{totalPrice}.00</p> */}
          <p>{orderTotal}</p>
        </section>
      </section>
    </section>
  )
}
export default CheckoutItems
