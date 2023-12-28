function SmallPromiseBlock() {
  const promiseIcon = '/Images/promiseIcon.svg'
  return (
    <div className="h-auto w-full">
      <div className="flex h-auto w-full items-center justify-center bg-footerBg p-6">
        <div className="flex h-auto w-full flex-col items-center justify-around border-[1px] border-copyRightBorder p-9 lg:gap-12">
          <div className=" flex w-full items-center justify-start gap-6">
            <img
              src={promiseIcon}
              alt="promise"
              className="h-[47px] w-[37px] dxl:h-[66px] dxl:w-[52px]"
            />
            <p className="font-cormorant text-display-13 text-textPrimary">
              THE OAKLEIGH PROMISE
            </p>
          </div>
          <div className="font-sans text-display-3 text-textPrimary dxl:text-display-6">
            <div
              className="list-disc"
              dangerouslySetInnerHTML={{
                __html: `<ul style="list-disc"><ul>
                  <li>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam</li>
                  <li>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam</li>
                  <li>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam</li>
                  </ul>
                  </ul>`,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
export default SmallPromiseBlock
