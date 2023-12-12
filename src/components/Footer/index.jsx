import FooterDweb from "./FooterDweb";
import FooterMweb from "./FooterMweb";
import FooterTop from "./FooterTop";

function Footer() {
  return (
    <>
      <div className="block lg:hidden">
        <FooterMweb />
      </div>

      <div className="hidden lg:block">
        <FooterDweb />
      </div>
    </>
  );
}
export default Footer;
