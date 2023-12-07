import SocialIcons from "../SocialIcons";
import CopyRightInfo from "../CopyRightInfo";
import MailingList from "../MailingList";

function FooterDweb() {
  const usefulLinks = [
    "Our Story",
    "Insights",
    "Accounts",
    "Contact Us",
    "Delivery & Returns",
    "Watch Concierge",
    "Sustainablity",
    "Part Exchange",
    "Showroom",
    "FAQs",
    "Legal",
  ];
  const categories = [
    "Shop All",
    "Shop By Brand",
    "New In",
    "Collectors Choice",
    "Vintage Watches",
    "Online Only",
  ];
  const ourAddress =
    "Oakleigh Watches Tempus Works 2 Fletcher Way Norwich, NR3 3ST";

  return (
    <div className="bg-footerBg w-full max-h-[796px] pt-[65px] text-textPrimary flex flex-col items-center">
      <div className="w-full flex flex-wrap gap-9 px-[40px] pb-12 justify-start">
        <div className="flex flex-col min-w-[340px] grow-[1]">
          <p className="text-[30px]">Useful Links</p>
          <div className="flex flex-col flex-wrap items-start justify-start gap-[12px] mt-3 max-h-[125px]">
            {usefulLinks.map((e, index) => {
              return (
                <div
                  key={index}
                  className="font-extralight font-sans text-[14px]"
                >
                  {e}
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col min-w-[250px] grow-[1]">
          <p className="text-[30px]">Categories</p>
          <div className="flex flex-col flex-wrap items-start justify-start gap-[12px] mt-3 max-h-[100px]">
            {categories.map((e, index) => {
              return (
                <div
                  key={index}
                  className="font-extralight font-sans text-[14px]"
                >
                  {e}
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col grow-[1]">
          <p className="text-[30px]">Our Address</p>
          <div className="flex flex-col flex-wrap items-start justify-start gap-[6px] mt-3 w-[130px] max-h-[100px]">
            <div className="font-extralight font-sans text-[14px] leading-7">
              {ourAddress}
            </div>
          </div>
          <SocialIcons />
        </div>
        <MailingList />
      </div>
      <CopyRightInfo />
    </div>
  );
}
export default FooterDweb;
