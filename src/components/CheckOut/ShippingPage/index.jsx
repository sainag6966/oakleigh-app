import Link from 'next/link'

function ShippingPage({ basketData }) {
  const emailId = basketData?.billing_address?.email
  const address1 = basketData?.shipping_address?.address_1
  const address2 = basketData?.shipping_address?.address_2
  const city = basketData?.shipping_address?.city
  const postCode = basketData?.shipping_address?.postcode
  const shippingDetail = [address1, address2, city, postCode]

  return (
    <section className="h-auto w-full border-[1px] border-orderSummaryBorder p-5 font-sans dxl:p-[30px]">
      <section className="flex items-center justify-between border-b-[1px] border-orderSummaryBorder pb-3 dxl:pb-[30px]">
        <section className="flex items-center justify-start dxl:gap-[50px]">
          {' '}
          <p className="text-display-3 dxl:text-display-6">Contact</p>
          <p className="ml-[14px] text-display-extra sm:ml-[22px] sm:text-display-5  sm:leading-5 dxl:text-display-16">
            {emailId}
          </p>
        </section>
        <Link href={'/basket/checkout'}>
          <p className="text-display-4 dxl:text-display-17">
            <u>Change</u>
          </p>
        </Link>
      </section>
      <section className="flex items-start justify-between gap-2 pt-3 dxl:pb-[30px] dxl:pt-[30px]">
        <section className="flex items-start justify-start dxl:gap-[50px]">
          {' '}
          <p className="text-display-3 dxl:text-display-6">Ship to</p>
          <section className="ml-[14px] flex flex-col sm:ml-[22px]">
            {shippingDetail.map((e, index) => {
              return (
                <section
                  key={index}
                  className="text-display-extra leading-5 sm:text-display-5 sm:leading-5 dxl:text-display-16"
                >
                  {e}
                </section>
              )
            })}
          </section>
        </section>
        <Link href={'/basket/checkout'}>
          <p className="mt-1 text-display-4 leading-none dxl:text-display-17 dxl:leading-none">
            <u>Change</u>
          </p>
        </Link>
      </section>
      <section className="mt-3 flex items-start justify-between gap-2 border-t-[1px] border-orderSummaryBorder pt-3 dxl:pt-[30px]">
        <section className="flex items-start justify-start dxl:gap-[50px]">
          {' '}
          <p className="text-display-3 dxl:text-display-17">Method</p>
          <p className="ml-2 mt-[2px] flex text-display-extra leading-5 sm:ml-4 sm:text-display-5 sm:leading-5 dxl:ml-0 dxl:text-display-16">
            Royal Mail or other 24 hour courier (1–2 working days)
          </p>
        </section>
        <p className="mt-1 text-display-4 leading-none dxl:text-display-17">
          <u>Change</u>
        </p>
      </section>
    </section>
  )
}
export default ShippingPage
