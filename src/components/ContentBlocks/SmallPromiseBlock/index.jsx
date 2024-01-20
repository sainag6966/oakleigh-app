import ProgressiveImageComp from '@/reuseComps/ProgressiveImageComp'
function SmallPromiseBlock() {
  const promiseIcon = '/Images/promiseIcon.svg'
  const listItems = [
    'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam',
    'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam',
    'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam',
  ]
  return (
    <div className="h-auto w-full">
      <div className="flex h-auto w-full items-center justify-center bg-footerBg p-6">
        <div className="flex h-auto w-full flex-col items-start justify-around gap-6 border-[1px] border-copyRightBorder p-[30px] xl:gap-12 xl:p-5 dxl:p-9">
          <div className=" flex w-full flex-col items-start justify-start gap-6 lg:flex-row">
            <img
              src={promiseIcon}
              alt="promise"
              className="h-[47px] w-[37px] dxl:h-[66px] dxl:w-[52px]"
            />
            <p className="font-cormorant text-display-13 text-textPrimary">
              THE OAKLEIGH PROMISE
            </p>
          </div>
          <div className="flex justify-center font-sans text-display-3 text-textPrimary xl:text-display-3 dxl:text-display-6">
            <ul className="list-disc pl-4">
              {listItems.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
export default SmallPromiseBlock
