import { useState } from 'react'
import ProgressiveImageComp from '@/reuseComps/ProgressiveImageComp'

function MyOrders() {
  const sortIconUp = '/Images/sortIconUp.svg'
  const sortIconDown = '/Images/sortIconDown.svg'
  const data = [
    {
      accountDetail: '09330550',
      datePurchased: '17/10/2023',
      productTitle: 'Solex Submariner',
      amount: '£1,200.00',
    },
    {
      accountDetail: '09330550',
      datePurchased: '13/10/2023',
      productTitle: 'Molex Submariner',
      amount: '£1,200.00',
    },
    {
      accountDetail: '09330550',
      datePurchased: '18/09/2023',
      productTitle: 'Zolex Submariner',
      amount: '£1,200.00',
    },
    {
      accountDetail: '09330550',
      datePurchased: '14/09/2023',
      productTitle: 'Folex Submariner',
      amount: '£1,200.00',
    },
    {
      accountDetail: '09330550',
      datePurchased: '22/08/2023',
      productTitle: 'Tolex Submariner',
      amount: '£1,200.00',
    },
    {
      accountDetail: '09330550',
      datePurchased: '17/08/2023',
      productTitle: 'Rolex Submariner',
      amount: '£1,200.00',
    },
  ]
  const [sortedData, setSortedData] = useState(data)

  const handleDataSort = (sortType) => {
    const reversedData = data.slice().reverse()
    if (sortType === 'asc') {
      setSortedData(reversedData)
      return
    }
    if (sortType === 'desc') {
      setSortedData(data)
      return
    }
    if (sortType === 'alpha') {
      const sorted = [...sortedData].sort((a, b) =>
        a.productTitle.localeCompare(b.productTitle),
      )
      setSortedData(sorted)
      return
    }
    if (sortType === 'revAlpha') {
      const sorted = [...sortedData].sort((a, b) =>
        b.productTitle.localeCompare(a.productTitle),
      )
      setSortedData(sorted)
      return
    }
  }

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
                  <section
                    className="h-[5px] w-[5px] cursor-pointer"
                    onClick={() => {
                      handleDataSort('asc')
                    }}
                  >
                    <ProgressiveImageComp src={sortIconUp} alt="arrow" />
                  </section>
                  <section
                    className="curso h-[5px] w-[5px] cursor-pointer"
                    onClick={() => {
                      handleDataSort('desc')
                    }}
                  >
                    <ProgressiveImageComp src={sortIconDown} alt="arrow" />
                  </section>
                </section>
              </th>
              <th className="pb-3 pr-5 dxl:pb-5">
                <section className="flex items-center gap-1">
                  <p>Product Title</p>
                  <section className="flex flex-col gap-[2px]">
                    {' '}
                    <section
                      className="h-[5px] w-[5px] cursor-pointer"
                      onClick={() => {
                        handleDataSort('alpha')
                      }}
                    >
                      <ProgressiveImageComp src={sortIconUp} alt="arrow" />
                    </section>
                    <section
                      className="curso h-[5px] w-[5px] cursor-pointer"
                      onClick={() => {
                        handleDataSort('revAlpha')
                      }}
                    >
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
            {sortedData.map((order, index) => (
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
