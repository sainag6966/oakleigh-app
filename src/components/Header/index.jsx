import HeaderMweb from "./HeaderMweb";
import HeaderDweb from "./HeaderDweb";

function Header({ data }) {
  const oakleighLogo = "/Images/oakleighLogo.svg";
  return (
    <>
      <div className="block lg:hidden">
        <HeaderMweb data={data} />
      </div>

      <div className="hidden lg:block">
        <HeaderDweb data={data} />
      </div>
    </>
  );
}
export default Header;
