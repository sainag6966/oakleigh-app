import { useEffect, useState } from "react";
import { Inter } from "next/font/google";
import { useMediaQuery } from "react-responsive";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeaderBanner from "../components/ContentBlocks/HeaderBanner";
import UspBlock from "../components/ContentBlocks/UspBlock";
import BrandWidget from "../components/ContentBlocks/BrandWidget";
import TwoAdBlock from "../components/ContentBlocks/TwoAdBlock";
import headerBanner from "../../public/Images/headerBanner.svg";
import UspBlockMweb from "@/components/ContentBlocks/UspBlockMweb";
import ThreeAdBlock from "@/components/ContentBlocks/ThreeAdBlock";
import Image from "next/image";
import InsightBlock from "@/components/ContentBlocks/InsightBlock";
import AboutBlock from "@/components/ContentBlocks/AboutBlock";
import PromiseBlock from "@/components/ContentBlocks/PromiseBlock";
import VipAdBlock from "@/components/ContentBlocks/VipAdBlock";
import SimpleSlider from "@/reuseComps/Slider";
import SliderBlock from "@/components/ContentBlocks/SliderBlock";
import FooterTop from "@/components/Footer/FooterTop";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ data }) {
  const [item, setItem] = useState([]);
  const [footerItem, setFooterItem] = useState([]);
  const isDesktop = useMediaQuery({ query: "(min-width:900px)" });
  const trayData = data?.acf?.flexible_listing;
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

  function getTrays(tray) {
    switch (tray.acf_fc_layout) {
      case "header_banner":
        return <HeaderBanner trayData={tray} />;
      case "usp_block":
        return isDesktop ? (
          <UspBlockMweb trayData={tray} />
        ) : (
          <UspBlock trayData={tray} />
        );
      case "ad_block":
        return <TwoAdBlock trayData={tray} />;
      case "product_slider":
        return <SliderBlock trayData={tray} />;
      case "about_block":
        return <AboutBlock trayData={tray} />;
      case "the_oakleigh_promise":
        return <PromiseBlock trayData={tray} />;
      case "our_latest_insights":
        return <InsightBlock trayData={tray} />;
      case "ad_block_three":
        return <ThreeAdBlock trayData={tray} />;
      case "vip_ad_block_with_products":
        return <VipAdBlock trayData={tray} />;
      default:
        return null;
    }
  }

  return (
    <div className="flex flex-col justify-between h-screen">
      <header>
        <Header data={item} />
      </header>
      <main className="w-full h-auto">
        {trayData.map((tray) => {
          return getTrays(tray);
        })}
      </main>
      <footer>
        <FooterTop />
        <Footer footerData={footerItem} />
      </footer>
    </div>
  );
}

export async function getServerSideProps(context) {
  try {
    const username = "oakleighcdadevel";
    const password = "QsJY lkVy QxL8 3iFY NhhP Cto1";
    const response = await fetch(
      "https://oakleigh.cda-development3.co.uk/cms/wp-json/wp/v2/pages/55?acf_format=standard",
      {
        method: "get",
        headers: {
          "Content-Type": "text/plain",
          Authorization: "Basic " + btoa(username + ":" + password),
        },
      }
    );
    if (!response.ok) {
      // Handle non-successful responses (e.g., 404, 500)
      console.error(`API request failed with status ${response.status}`);
      return {
        notFound: true,
      };
    }
    const data = await response.json();
    return {
      props: {
        data,
      },
    };
  } catch (error) {
    // Handle network errors or other exceptions
    console.error("Error fetching data from API:", error);
    return {
      props: {
        data: null, // You can set a default value or handle this case in your component
      },
    };
  }
}
