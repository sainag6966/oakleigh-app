import NextImage from '@/reuseComps/NextImage'
import Image from 'next/image'

function HeaderDweb({ data }) {
  const oakleighLogo = '/Images/oakleighLogo.svg'
  const searchIcon = '/Images/searchIcon.svg'
  const accountIcon = '/Images/accountIcon.svg'
  const dwebAccountIcon = '/Images/dwebAccountIcon.svg'
  const dividerLine = '/Images/dividerLine.svg'
  const imgArr = [searchIcon, dividerLine, accountIcon, dwebAccountIcon]
  const filterData = data.filter((e) => {
    const skipMenu = ['Divider', 'My account', 'Basket']
    return !skipMenu.includes(e.title.rendered)
  })

  return (
    <div className="dxl:h-40 dxl:px-28 dxl:py-12 flex h-[98px] w-full items-center justify-between gap-6 px-9 py-[30px] xl:h-32 xl:px-16">
      <div className="dxl:w-80 h-auto w-40 xl:w-48">
        <Image src={oakleighLogo} width="300" height="60" layout="responsive" />
      </div>
      <div className="flex grow-[2] items-center justify-evenly">
        {filterData.map((item, index) => {
          return (
            <div
              key={index}
              className="dxl:text-display-8 font-sans text-display-extra xl:text-display-5"
            >
              {item.title.rendered}
            </div>
          )
        })}
      </div>
      <div className="flex grow-[0.3] items-center justify-evenly gap-4">
        {imgArr.map((e, index) => {
          return (
            <div
              key={index}
              className={`${
                index === 1
                  ? 'dxl:w-[8px] w-[5px] xl:w-[5.5px]'
                  : 'dxl:w-5 w-3 xl:w-4'
              }h-3 flex items-center justify-center`}
            >
              <NextImage src={e} width="24" height="24" layout="responsive" />
            </div>
          )
        })}
      </div>
    </div>
  )
}
export default HeaderDweb
