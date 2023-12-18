import HeaderMweb from './HeaderMweb'
import HeaderDweb from './HeaderDweb'

function Header({ data }) {
  const oakleighLogo = '/Images/oakleighLogo.svg'
  return (
    <>
      <div className="block border-b-[1px] border-black lg:hidden">
        <HeaderMweb data={data} />
      </div>

      <div className="hidden border-b-[1px] border-black lg:block">
        <HeaderDweb data={data} />
      </div>
    </>
  )
}
export default Header
