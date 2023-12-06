import SocialIcons from "../../Footer/SocialIcons";
import CopyRightInfo from "../CopyRightInfo";
import MailingList from "../MailingList";
import { useState } from "react";

function FooterMweb() {
  const [clickedLink, setClickedLink] = useState("");
  const [linkData, setLinkData] = useState([]);
  const [accor, setAccor] = useState(false);
  const data1 = ["Useful Links", "Categories", "Our Address"];
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
  const ourAddress = [
    "Oakleigh Watches Tempus Works 2 Fletcher Way Norwich, NR3 3ST",
  ];

  const handleAcor = (link) => {
    setAccor(true);
    switch (link) {
      case "Useful Links":
        setClickedLink(link);
        setLinkData(usefulLinks);
        break;
      case "Categories":
        setClickedLink(link);
        setLinkData(categories);
        break;
      case "Our Address":
        setClickedLink(link);
        setLinkData(ourAddress);
        break;
      default:
        return "";
    }
  };
  const handleClose = (link) => {
    setAccor(false);
  };
  return (
    <div className="bg-footerBg w-full min-h-[500px] pt-[59px] text-textPrimary flex items-center flex-col gap-[60px]">
      <div className="flex flex-col items-center justify-center gap-[32px] w-full h-auto">
        {data1.map((link, index) => {
          return (
            <div key={index} className="flex flex-col items-center">
              <div
                className="flex gap-2 justify-center items-center"
                key={index}
              >
                <div className="text-[25px] tracking-normal">{link}</div>
                {accor && link === clickedLink ? (
                  <div onClick={handleClose} className="text-[25px]">
                    -
                  </div>
                ) : (
                  <div onClick={() => handleAcor(link)} className="text-[25px]">
                    +
                  </div>
                )}
              </div>
              <div className="flex flex-col items-center justify-center gap-[6px] mt-3">
                {accor &&
                  link === clickedLink &&
                  linkData.map((e, index) => {
                    return (
                      <div
                        key={index}
                        className="font-extralight font-sans text-[14px] max-w-[120px]"
                      >
                        {e}
                      </div>
                    );
                  })}
              </div>
            </div>
          );
        })}
        <SocialIcons />
      </div>
      <MailingList />
      <CopyRightInfo />
    </div>
  );
}
export default FooterMweb;
