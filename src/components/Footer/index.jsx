import FooterDweb from "./FooterDweb";
import FooterMweb from "./FooterMweb";
import FooterTop from "./FooterTop";

function Footer({footerData}) {
  return (
    <>
      <div className="block lg:hidden">
        <FooterMweb dataItems={footerData} />
      </div>

      <div className="hidden lg:block">
        <FooterDweb dataItems={footerData} />
      </div>
    </>
  );
}
export default Footer;
