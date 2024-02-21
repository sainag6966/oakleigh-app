import { useState } from 'react'
import ProgressiveImageComp from '@/reuseComps/ProgressiveImageComp'
import ToggleSwitch from '@/reuseComps/ToggleSwitch'

function MyAlerts() {
  const sortIconUp = '/Images/sortIconUp.svg'
  const sortIconDown = '/Images/sortIconDown.svg'
  const data = [
    {
      productTitle: 'Solex Submariner',
      alertActive: true,
    },
    {
      productTitle: 'Molex Submariner',
      alertActive: true,
    },
  ]
  const [sortedData, setSortedData] = useState(data)

  const handleDataSort = (sortType) => {
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
      <p className="text-display-11 dxl:text-display-13">My Alerts</p>
      <div className="w-full overflow-x-auto pb-4">
        <table className="min-w-full font-sans">
          <thead>
            <tr className="border-b-[1px] border-orderSummaryBorder text-left text-display-5 leading-none dxl:text-display-16">
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
              <th className="pb-3 dxl:pb-5 ">Product Alert Active</th>
            </tr>
          </thead>
          <tbody>
            {sortedData.map((order, index) => (
              <tr
                key={index}
                className="border-b-[1px] border-orderSummaryBorder font-sans text-display-3 dxl:text-display-6"
              >
                <td className="py-2 pr-3 leading-none dxl:py-4">
                  {order.productTitle}
                </td>
                <td className="py-2 dxl:py-4">
                  {' '}
                  <ToggleSwitch />
                </td>
                <td className="float-right py-2 pl-5 dxl:py-4">
                  <u>View Similar</u>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
export default MyAlerts
