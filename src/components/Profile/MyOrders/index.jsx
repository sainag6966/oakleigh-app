import ProgressiveImageComp from '@/reuseComps/ProgressiveImageComp'
function MyOrders() {
  const sortIconUp = '/Images/sortIconUp.svg'
  const sortIconDown = '/Images/sortIconDown.svg'
  const data = [
    {
      accountDetail: '09330550',
      datePurchased: '11/09/2023',
      productTitle: 'Rolex Submariner',
      amount: '£1,200.00',
    },
    {
      accountDetail: '09330550',
      datePurchased: '11/09/2023',
      productTitle: 'Rolex Submariner',
      amount: '£1,200.00',
    },
    {
      accountDetail: '09330550',
      datePurchased: '11/09/2023',
      productTitle: 'Rolex Submariner',
      amount: '£1,200.00',
    },
    {
      accountDetail: '09330550',
      datePurchased: '11/09/2023',
      productTitle: 'Rolex Submariner',
      amount: '£1,200.00',
    },
    {
      accountDetail: '09330550',
      datePurchased: '11/09/2023',
      productTitle: 'Rolex Submariner',
      amount: '£1,200.00',
    },
    {
      accountDetail: '09330550',
      datePurchased: '11/09/2023',
      productTitle: 'Rolex Submariner',
      amount: '£1,200.00',
    },
  ]

  return (
    <section className="flex h-auto w-full flex-col gap-[15px] bg-search p-[30px] xl:p-[50px] dxl:gap-[30px]">
      <p className="text-display-11 dxl:text-display-13">My Orders</p>
      <div className="w-full overflow-x-auto pb-4">
        <table className="min-w-full font-sans">
          <thead>
            <tr className="border-b-[1px] border-orderSummaryBorder text-left text-display-5 leading-none dxl:text-display-16">
              <th className="pb-3 pr-5 dxl:pb-5">Account Details</th>
              <th className="flex items-center gap-1 pb-3 pr-5 dxl:pb-5">
                <p>Date Purchased</p>
                <section className="flex flex-col gap-[2px]">
                  {' '}
                  <section className="h-[5px] w-[5px] cursor-pointer">
                    <ProgressiveImageComp src={sortIconUp} alt="arrow" />
                  </section>
                  <section className="curso h-[5px] w-[5px]">
                    <ProgressiveImageComp src={sortIconDown} alt="arrow" />
                  </section>
                </section>
              </th>
              <th className="pb-3 pr-5 dxl:pb-5">
                <section className="flex items-center gap-1">
                  <p>Product Title</p>
                  <section className="flex flex-col gap-[2px]">
                    {' '}
                    <section className="h-[5px] w-[5px] cursor-pointer">
                      <ProgressiveImageComp src={sortIconUp} alt="arrow" />
                    </section>
                    <section className="curso h-[5px] w-[5px]">
                      <ProgressiveImageComp src={sortIconDown} alt="arrow" />
                    </section>
                  </section>
                </section>
              </th>
              <th className="pb-3 dxl:pb-5 ">Amount Paid</th>
              {/* <th className="p-3">Shop Similar</th> */}
            </tr>
          </thead>
          <tbody>
            {data.map((order, index) => (
              <tr
                key={index}
                className="border-b-[1px] border-orderSummaryBorder font-sans text-display-3 dxl:text-display-6"
              >
                <td className="py-2 dxl:py-4">{order.accountDetail}</td>
                <td className="py-2 dxl:py-4">{order.datePurchased}</td>
                <td className="py-2 pr-3 leading-none dxl:py-4">
                  {order.productTitle}
                </td>
                <td className="py-2 dxl:py-4">{order.amount}</td>
                <td className="py-2 pl-5 dxl:py-4">
                  <u>Shop Similar</u>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default MyOrders
