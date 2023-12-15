import { useEffect, useState } from "react";
import Footer from "../Footer";
import FooterTop from "../Footer/FooterTop";
import Header from "../Header";
import { useMediaQuery } from "react-responsive";

function LayoutWrapper({ children }) {
  const [item, setItem] = useState([]);
  const [footerItem, setFooterItem] = useState([]);
  const isDesktop = useMediaQuery({ query: "(min-width:900px)" });
//   const trayData = data?.acf?.flexible_listing;
  const username = "oakleighcdadevel";
  const password = "QsJY lkVy QxL8 3iFY NhhP Cto1";

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        "https://oakleigh.cda-development3.co.uk/cms/wp-json/wp/v2/menu-items?menus=18",
        {
          method: "get",
          headers: {
            "Content-Type": "text/plain",
            Authorization: "Basic " + btoa(username + ":" + password),
          },
        }
      );
      const headerData = (await response?.json()) || [];
      setItem(headerData);
    };
    getData();
  }, []);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        "https://oakleigh.cda-development3.co.uk/cms/wp-json/wp/v2/menu-items?menus=108",
        {
          method: "get",
          headers: {
            "Content-Type": "text/plain",
            Authorization: "Basic " + btoa(username + ":" + password),
          },
        }
      );
      const footerData = (await response?.json()) || [];
      setFooterItem(footerData);
    };
    getData();
  }, []);
  return (
    <div className="flex flex-col justify-between h-screen">
      <Header data={item} />
      {children}
      <FooterTop />
      <Footer footerData={footerItem} />
    </div>
  );
}
export default LayoutWrapper;
