import HeaderMweb from './HeaderMweb'
import HeaderDweb from './HeaderDweb'

function Header({ data, isHeaderVisible }) {
  const oakleighLogo = '/Images/oakleighLogo.svg'
  return (
    isHeaderVisible && (
      <>
        <div className="block border-b-[1px] border-black lg:hidden">
          <HeaderMweb data={data} isHeaderVisible={isHeaderVisible} />
        </div>

        <div className="hidden border-b-[1px] border-black lg:block">
          <HeaderDweb data={data} isHeaderVisible={isHeaderVisible} />
        </div>
      </>
    )
  )
}
export default Header
